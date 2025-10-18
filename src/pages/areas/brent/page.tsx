
import { useState } from 'react';

export default function BrentAreaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        'https://readdy.ai/api/form/d3pi9aaqm8kq7403o620',
        {
          method: 'POST',
          body: new URLSearchParams(
            // URLSearchParams expects an iterable of key/value pairs.
            // Converting FormData to plain object first ensures compatibility.
            Array.from(formDataToSubmit.entries()) as [string, string][]
          ),
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
          message: '',
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center cursor-pointer">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900">Brent Renovation</span>
              </a>
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
                  Services <i className="ri-arrow-down-s-line ml-1"></i>
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
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Richmond
                    </a>
                    <a
                      href="/areas/brent"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer"
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
                onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
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
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}
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
                    Services <i className={`ri-arrow-${isServicesOpen ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/services/property-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Property Refurbishment</a>
                      <a href="/services/period-restoration" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Period Restoration</a>
                      <a href="/services/kitchen-renovation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Kitchen Renovation</a>
                      <a href="/services/bathroom-renovation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Bathroom Renovation</a>
                      <a href="/services/house-extensions" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">House Extensions</a>
                      <a href="/services/interior-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Interior Refurbishment</a>
                      <a href="/services/building-construction" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Building & Construction</a>
                      <a href="/services/design-consultation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Design Consultation</a>
                      <a href="/services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">View All Services →</a>
                    </div>
                  )}
                </div>

                {/* Mobile Areas Menu */}
                <div>
                  <button 
                    onClick={() => setIsAreasOpen(!isAreasOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    Areas <i className={`ri-arrow-${isAreasOpen ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {isAreasOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/areas/westminster" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Westminster</a>
                      <a href="/areas/kensington-chelsea" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Kensington &amp; Chelsea</a>
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Camden</a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Islington</a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Hammersmith &amp; Fulham</a>
                      <a href="/areas/wandsworth" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Wandsworth</a>
                      <a href="/areas/richmond" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Richmond</a>
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Brent</a>
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Harrow</a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Ealing</a>
                      <a href="/areas/barnet" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Barnet</a>
                      <a href="/areas/central-london" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Central London</a>
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Brent%20London%20borough%20showing%20diverse%20residential%20properties%20including%20Victorian%20terraces%2C%20modern%20developments%2C%20multicultural%20neighborhood%2C%20Wembley%20Stadium%20in%20background%2C%20vibrant%20North%20West%20London%20community&width=1920&height=600&seq=brent-hero&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Brent Property Renovation Specialists
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Expert refurbishment services for Brent&apos;s diverse communities from
            Wembley to Willesden and beyond
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
            <a href="/areas" className="hover=text-blue-600 cursor-pointer">
              Areas
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-blue-600 font-medium">Brent</span>
          </div>
        </div>
      </div>

      {/* Brent Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Brent Borough Renovation Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Brent is one of London&apos;s most diverse and dynamic boroughs,
                home to iconic Wembley Stadium and vibrant multicultural
                communities. From Victorian terraces in Willesden to modern
                developments near Wembley Park, we understand the unique character
                of each neighborhood and deliver renovation services that
                respect local heritage while meeting contemporary needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Wembley Area
                  </h4>
                  <p className="text-sm text-gray-600">
                    Modern developments and regeneration projects
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Willesden
                  </h4>
                  <p className="text-sm text-gray-600">
                    Victorian and Edwardian family homes
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Kilburn
                  </h4>
                  <p className="text-sm text-gray-600">
                    Period conversions and modern apartments
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Kingsbury
                  </h4>
                  <p className="text-sm text-gray-600">
                    Suburban family properties and extensions
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Brent%20property%20renovation%20showing%20Victorian%20terrace%20refurbishment%20in%20Willesden%2C%20modern%20interior%20transformation%2C%20multicultural%20London%20neighborhood%2C%20professional%20renovation%20work%2C%20contemporary%20design%20with%20period%20features&width=600&height=400&seq=brent-overview&orientation=landscape')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services in Brent */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Brent Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive renovation services for Brent&apos;s diverse property
              types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Victorian%20terrace%20refurbishment%20in%20Brent%20showing%20period%20property%20renovation%2C%20modern%20interior%20with%20original%20features%20preserved%2C%20professional%20construction%20quality%2C%20multicultural%20London%20neighborhood&width=400&height=300&seq=brent-service-1&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Victorian Terrace Refurbishment</h3>
              <p className="text-gray-600 mb-4">Complete renovation of Brent's period properties, preserving character while adding modern amenities.</p>
              <a href="/services/property-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20kitchen%20renovation%20in%20Brent%20multicultural%20family%20home%2C%20contemporary%20design%20with%20island%20unit%2C%20professional%20interior%20refurbishment%2C%20diverse%20London%20community&width=400&height=300&seq=brent-service-2&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Cultural Kitchen Design</h3>
              <p className="text-gray-600 mb-4">Kitchen renovations designed for Brent's diverse communities with flexible cooking and entertaining spaces.</p>
              <a href="/services/kitchen-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20house%20extension%20in%20Brent%20showing%20contemporary%20rear%20extension%20with%20glass%20doors%2C%20family%20home%20expansion%2C%20professional%20building%20work%2C%20North%20West%20London%20property&width=400&height=300&seq=brent-service-3&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Development Renovation</h3>
              <p className="text-gray-600 mb-4">Updating and enhancing Brent's newer developments with contemporary design and energy efficiency.</p>
              <a href="/services/house-extensions" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brent Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Brent Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise across Brent&apos;s diverse neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Wembley%20area%20property%20renovation%20showing%20modern%20family%20home%20refurbishment%20near%20stadium%2C%20contemporary%20interior%20design%2C%20professional%20building%20work%2C%20Brent%20London&width=400&height=300&seq=brent-project-1&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wembley Family Home Extension</h3>
                <p className="text-gray-600 mb-3">Complete refurbishment with rear extension creating modern family living space.</p>
                <div className="text-sm text-gray-500">Wembley, HA9</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Willesden%20Victorian%20terrace%20renovation%20showing%20period%20property%20restoration%2C%20modern%20kitchen%20and%20bathroom%2C%20professional%20refurbishment%20work%2C%20Brent%20London&width=400&height=300&seq=brent-project-2&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Willesden Victorian Restoration</h3>
                <p className="text-gray-600 mb-3">Period property restoration preserving original features with modern amenities.</p>
                <div className="text-sm text-gray-500">Willesden, NW10</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Kilburn%20apartment%20renovation%20showing%20modern%20interior%20refurbishment%2C%20contemporary%20design%2C%20professional%20building%20work%2C%20multicultural%20Brent%20neighborhood&width=400&height=300&seq=brent-project-3&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kilburn Apartment Refurbishment</h3>
                <p className="text-gray-600 mb-3">Modern apartment renovation with open-plan living and luxury finishes.</p>
                <div className="text-sm text-gray-500">Kilburn, NW6</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Brent */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Brent Residents Choose Us
            </h2>
            <p className="text-xl text-blue-100">
              Local expertise meets multicultural understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Cultural Understanding</h3>
              <p className="text-blue-100">Experienced working with Brent's diverse communities and varied lifestyle needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Local Knowledge</h3>
              <p className="text-blue-100">Deep understanding of Brent's property types from Wembley to Willesden</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Planning Expertise</h3>
              <p className="text-blue-100">Extensive experience with Brent Council planning and building regulations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Community Focus</h3>
              <p className="text-blue-100">Committed to enhancing Brent's neighborhoods through quality renovation work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Brent Consultation</h2>
            <p className="text-xl text-gray-600">Expert renovation advice for your Brent property</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Brent Project?</h3>
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
          <style>
            {`
              .consultation-iframe-container {
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
                padding: 0;
              }
              
              .consultation-iframe {
                width: 100%;
                height: 1800px;
                border: none;
                display: block;
              }
              
              /* Mobile phones */
              @media (max-width: 640px) {
                .consultation-iframe {
                  height: 1350px;
                }
              }
              
              /* Tablets */
              @media (min-width: 641px) and (max-width: 1024px) {
                .consultation-iframe {
                  height: 1600px;
                }
              }
              
              /* Desktop */
              @media (min-width: 1025px) {
                .consultation-iframe {
                  height: 1200px;
                }
              }
            `}
          </style>

          <div className="consultation-iframe-container">
            <iframe 
              className="consultation-iframe"
              src="https://consultation-flax.vercel.app/consultation" 
              frameBorder="0" 
              scrolling="no">
            </iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brent Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Brent
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
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
      </div>
    </div>
  );
}
