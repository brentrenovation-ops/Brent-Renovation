
import { useState } from 'react';

export default function RichmondAreaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch(
        'https://readdy.ai/api/form/d3mv6tv68806cmb3n5cg',
        {
          method: 'POST',
          body: new URLSearchParams(formDataToSubmit as any)
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          postcode: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Brent Renovation
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center"
                >
                  Services{' '}
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <a
                      href="/services/property-refurbishment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Property Refurbishment
                    </a>
                    <a
                      href="/services/period-restoration"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Period Restoration
                    </a>
                    <a
                      href="/services/kitchen-renovation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Kitchen Renovation
                    </a>
                    <a
                      href="/services/bathroom-renovation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Bathroom Renovation
                    </a>
                    <a
                      href="/services/house-extensions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      House Extensions
                    </a>
                    <a
                      href="/services/interior-refurbishment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Interior Refurbishment
                    </a>
                    <a
                      href="/services/building-construction"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Building &amp; Construction
                    </a>
                    <a
                      href="/services/design-consultation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Design Consultation
                    </a>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <a
                        href="/services"
                        className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer"
                      >
                        View All Services →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsAreasOpen(true)}
                  onMouseLeave={() => setIsAreasOpen(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer flex items-center"
                >
                  Areas <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {isAreasOpen && (
                  <div
                    onMouseEnter={() => setIsAreasOpen(true)}
                    onMouseLeave={() => setIsAreasOpen(false)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <a
                      href="/areas/westminster"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Westminster
                    </a>
                    <a
                      href="/areas/kensington-chelsea"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Kensington &amp; Chelsea
                    </a>
                    <a
                      href="/areas/camden"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Camden
                    </a>
                    <a
                      href="/areas/islington"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Islington
                    </a>
                    <a
                      href="/areas/hammersmith-fulham"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Hammersmith &amp; Fulham
                    </a>
                    <a
                      href="/areas/wandsworth"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Wandsworth
                    </a>
                    <a
                      href="/areas/richmond"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer"
                    >
                      Richmond
                    </a>
                    <a
                      href="/areas/brent"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Brent
                    </a>
                    <a
                      href="/areas/harrow"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Harrow
                    </a>
                    <a
                      href="/areas/ealing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Ealing
                    </a>
                    <a
                      href="/areas/barnet"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Barnet
                    </a>
                    <a
                      href="/areas/central-london"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Central London
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Contact
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector('#consultation-iframe')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i
                className={`ri-${
                  isMenuOpen ? 'close' : 'menu'
                }-line text-2xl text-gray-700`}
              ></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  Home
                </a>

                {/* Mobile Services Menu */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    Services{' '}
                    <i
                      className={`ri-arrow-${
                        isServicesOpen ? 'up' : 'down'
                      }-s-line`}
                    ></i>
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="/services/property-refurbishment"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Property Refurbishment
                      </a>
                      <a
                        href="/services/period-restoration"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Period Restoration
                      </a>
                      <a
                        href="/services/kitchen-renovation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Kitchen Renovation
                      </a>
                      <a
                        href="/services/bathroom-renovation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Bathroom Renovation
                      </a>
                      <a
                        href="/services/house-extensions"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        House Extensions
                      </a>
                      <a
                        href="/services/interior-refurbishment"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Interior Refurbishment
                      </a>
                      <a
                        href="/services/building-construction"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Building &amp; Construction
                      </a>
                      <a
                        href="/services/design-consultation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Design Consultation
                      </a>
                      <a
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                      >
                        View All Services →
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Areas Menu */}
                <div>
                  <button
                    onClick={() => setIsAreasOpen(!isAreasOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    Areas{' '}
                    <i
                      className={`ri-arrow-${
                        isAreasOpen ? 'up' : 'down'
                      }-s-line`}
                    ></i>
                  </button>
                  {isAreasOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="/areas/westminster"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Westminster
                      </a>
                      <a
                        href="/areas/kensington-chelsea"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Kensington &amp; Chelsea
                      </a>
                      <a
                        href="/areas/camden"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Camden
                      </a>
                      <a
                        href="/areas/islington"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Islington
                      </a>
                      <a
                        href="/areas/hammersmith-fulham"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Hammersmith &amp; Fulham
                      </a>
                      <a
                        href="/areas/wandsworth"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover=text-blue-600 cursor-pointer"
                      >
                        Wandsworth
                      </a>
                      <a
                        href="/areas/richmond"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                      >
                        Richmond
                      </a>
                      <a
                        href="/areas/brent"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Brent
                      </a>
                      <a
                        href="/areas/harrow"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Harrow
                      </a>
                      <a
                        href="/areas/ealing"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Ealing
                      </a>
                      <a
                        href="/areas/barnet"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Barnet
                      </a>
                      <a
                        href="/areas/central-london"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Central London
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  Portfolio
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  About
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Richmond%20upon%20Thames%20riverside%20properties%20showing%20elegant%20Victorian%20and%20Georgian%20houses%20along%20the%20Thames%2C%20leafy%20suburban%20streets%2C%20premium%20residential%20architecture%2C%20beautiful%20London%20borough%20with%20river%20views%20and%20green%20spaces&width=1920&height=600&seq=richmond-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Richmond Property Renovation Specialists
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Expert refurbishment services for Richmond upon Thames&apos; prestigious
            riverside properties and period homes
          </p>
          <button 
            onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Your Quote
          </button>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 cursor-pointer">
              Home
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/areas" className="hover:text-blue-600 cursor-pointer">
              Areas
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-blue-600 font-medium">Richmond</span>
          </div>
        </div>
      </div>

      {/* Richmond Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Richmond upon Thames Renovation Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Richmond upon Thames combines riverside elegance with suburban
                tranquility, featuring some of London&apos;s most desirable
                properties. From Victorian terraces near Richmond Park to Georgian
                mansions along the Thames, we specialize in preserving the
                area&apos;s architectural heritage while creating modern,
                comfortable homes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Riverside Properties
                  </h4>
                  <p className="text-sm text-gray-600">
                    Thames-side homes and apartments with river views
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Period Homes
                  </h4>
                  <p className="text-sm text-gray-600">
                    Victorian and Georgian properties near Richmond Park
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Modern Developments
                  </h4>
                  <p className="text-sm text-gray-600">
                    Contemporary apartments and townhouses
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Conservation Areas
                  </h4>
                  <p className="text-sm text-gray-600">
                    Specialist work in protected historic areas
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Richmond%20upon%20Thames%20property%20renovation%20showing%20elegant%20Victorian%20house%20refurbishment%2C%20period%20features%20preserved%2C%20modern%20interior%20design%2C%20Thames%20riverside%20location%2C%20professional%20renovation%20work%20in%20prestigious%20London%20borough&width=600&height=400&seq=richmond-overview&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services in Richmond */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Richmond Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized renovation services for Richmond&apos;s diverse property
              portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-home-4-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Riverside Property Refurbishment
              </h3>
              <p className="text-gray-600 mb-4">
                Complete renovation of Thames-side properties, maximizing river
                views while addressing unique challenges of waterfront
                locations.
              </p>
              <a
                href="/services/property-refurbishment"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Period Property Restoration
              </h3>
              <p className="text-gray-600 mb-4">
                Expert restoration of Victorian and Georgian homes near Richmond
                Park, preserving architectural heritage with modern comfort.
              </p>
              <a
                href="/services/period-restoration"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-scissors-cut-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kitchen &amp; Bathroom Renovation
              </h3>
              <p className="text-gray-600 mb-4">
                Luxury kitchen and bathroom transformations designed for
                Richmond&apos;s sophisticated lifestyle and entertaining needs.
              </p>
              <a
                href="/services/kitchen-renovation"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-add-box-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                House Extensions
              </h3>
              <p className="text-gray-600 mb-4">
                Thoughtful extensions that complement Richmond&apos;s architectural
                character while maximizing garden and river views.
              </p>
              <a
                href="/services/house-extensions"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-paint-brush-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interior Refurbishment
              </h3>
              <p className="text-gray-600 mb-4">
                Complete interior transformations creating elegant, comfortable
                spaces that reflect Richmond&apos;s refined character.
              </p>
              <a
                href="/services/interior-refurbishment"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Conservation Area Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Expert navigation of planning permissions and conservation
                requirements for Richmond&apos; s protected areas.
              </p>
              <a
                href="/services/design-consultation"
                className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Richmond Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Richmond Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise in Richmond&apos;s unique property
              landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Victorian%20terrace%20renovation%20in%20Richmond%20showing%20period%20property%20with%20modern%20extension%2C%20Thames%20views%2C%20elegant%20interior%20design%2C%20professional%20refurbishment%20work%2C%20luxury%20finishes%20and%20period%20features%20preserved&width=400&height=300&seq=richmond-project-1&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Victorian Terrace with Thames Views
                </h3>
                <p className="text-gray-600 mb-3">
                  Complete refurbishment maximizing river views while preserving
                  period character.
                </p>
                <div className="text-sm text-gray-500">
                  Richmond Riverside
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover 
                bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Georgian%20house%20restoration%20in%20Richmond%20near%20Richmond%20Park%20showing%20period%20property%20renovation%2C%20elegant%20classical%20architecture%2C%20modern%20interior%20with%20original%20features%2C%20professional%20heritage%20restoration%20work&width=400&height=300&seq=richmond-project-2&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Georgian House Near Richmond Park
                </h3>
                <p className="text-gray-600 mb-3">
                  Heritage restoration combining period authenticity with
                  contemporary comfort.
                </p>
                <div className="text-sm text-gray-500">
                  Richmond Park Area
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg 
              shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20apartment%20renovation%20in%20Richmond%20showing%20contemporary%20interior%20design%2C%20luxury%20finishes%2C%20river%20views%2C%20open%20plan%20living%2C%20professional%20refurbishment%20work%20in%20prestigious%20London%20development&width=400&height=300&seq=richmond-project-3&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contemporary Riverside Apartment
                </h3>
                <p className="text-gray-600 mb-3">
                  Luxury apartment transformation with panoramic Thames views.
                </p>
                <div className="text-sm text-gray-500">
                  Richmond Waterfront
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Richmond */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Richmond Residents Choose Us
            </h2>
            <p className="text-xl text-blue-100">
              Local expertise meets premium craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Local Knowledge</h3>
              <p className="text-blue-100">
                Deep understanding of Richmond&apos;s conservation areas and
                planning requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Riverside Expertise</h3>
              <p className="text-blue-100">
                Specialized experience with Thames-side properties and flood
                considerations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Heritage Specialists</h3>
              <p className="text-blue-100">
                Expert restoration of period properties with conservation
                compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-blue-100">
                Luxury finishes and attention to detail matching Richmond&apos;s
                prestigious character
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Richmond Consultation</h2>
            <p className="text-xl text-gray-600">Expert renovation advice for your Richmond property</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Richmond Project?</h3>
              <p className="text-lg text-gray-600 mb-6">Contact us directly for expert renovation advice</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07376719216"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call: 07376 719216
              </a>
              <a
                href="mailto:info@brentrenovation.co.uk"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-mail-line mr-2"></i>
                Email Us
              </a>
            </div>
            
            <div className="mt-6">
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Visit our contact page for more information →
              </a>
            </div>

            <button 
              onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Free Consultation
            </button>

          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation-iframe" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe 
            src="https://consultation-flax.vercel.app/consultation" 
            width="100%" 
            height="1050px"
            frameBorder="0"
            style={{ border: 'none', display: 'block', margin: 0, padding: 0, overflow: 'hidden' }}
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Richmond Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Richmond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </a>
            <a
              href="/portfolio"
              className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold">Brent Renovation</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium renovation specialists serving Richmond upon Thames with
                20+ years of expertise.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Richmond Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/services/property-refurbishment"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Riverside Refurbishment
                  </a>
                </li>
                <li>
                  <a
                    href="/services/period-restoration"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Period Restoration
                  </a>
                </li>
                <li>
                  <a
                    href="/services/kitchen-renovation"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Kitchen Renovation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/bathroom-renovation"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Bathroom Renovation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/house-extensions"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    House Extensions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Other Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/areas/westminster"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Westminster
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/kensington-chelsea"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Kensington &amp; Chelsea
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/camden"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Camden
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/islington"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Islington
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/hammersmith-fulham"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Hammersmith &amp; Fulham
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact Richmond Team
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 07597098565</li>
                <li>Email: info@brentcontractors.co.uk</li>
                <li>Richmond upon Thames</li>
                <li>TW9, TW10 Areas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Richmond Specialists</span>
              <span>|</span>
              <a
                href="https://readdy.ai/?origin=logo"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
