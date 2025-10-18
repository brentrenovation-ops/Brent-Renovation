
import { useState } from 'react';

export default function CentralLondonAreaPage() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      const response = await fetch('https://readdy.ai/api/form/d3mv6tv68806cmb3n5cg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSubmit as any)
      });

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
              <span className="text-xl font-bold text-gray-900">Brent Renovation</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Home</a>
              
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
                    <a href="/services/property-refurbishment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Property Refurbishment</a>
                    <a href="/services/period-restoration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Period Restoration</a>
                    <a href="/services/kitchen-renovation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Kitchen Renovation</a>
                    <a href="/services/bathroom-renovation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Bathroom Renovation</a>
                    <a href="/services/house-extensions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">House Extensions</a>
                    <a href="/services/interior-refurbishment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Interior Refurbishment</a>
                    <a href="/services/building-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Building &amp; Construction</a>
                    <a href="/services/design-consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Design Consultation</a>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <a href="/services" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer">View All Services →</a>
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
                    <a href="/areas/westminster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Westminster</a>
                    <a href="/areas/kensington-chelsea" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Kensington &amp; Chelsea</a>
                    <a href="/areas/camden" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Camden</a>
                    <a href="/areas/islington" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Islington</a>
                    <a href="/areas/hammersmith-fulham" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Hammersmith &amp; Fulham</a>
                    <a href="/areas/wandsworth" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Wandsworth</a>
                    <a href="/areas/richmond" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Richmond</a>
                    <a href="/areas/brent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Brent</a>
                    <a href="/areas/harrow" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Harrow</a>
                    <a href="/areas/ealing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Ealing</a>
                    <a href="/areas/barnet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Barnet</a>
                    <a href="/areas/central-london" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer">Central London</a>
                  </div>
                )}
              </div>

              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Portfolio</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Contact</a>
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
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
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
                      <a href="/services/building-construction" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Building &amp; Construction</a>
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
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Brent</a>
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover;text-blue-600 cursor-pointer">Harrow</a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Ealing</a>
                      <a href="/areas/barnet" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Barnet</a>
                      <a href="/areas/central-london" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Central London</a>
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Central%20London%20cityscape%20showing%20luxury%20apartments%2C%20period%20buildings%2C%20modern%20developments%2C%20prestigious%20residential%20properties%2C%20iconic%20London%20architecture%2C%20urban%20renovation%20projects&width=1920&height=600&seq=central-london-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Central London Property Renovation Specialists
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Premium refurbishment services for Central London's most prestigious properties and developments
          </p>
          <button 
            onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Get Your Central London Consultation
          </button>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/areas" className="hover:text-blue-600 cursor-pointer">Areas</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-blue-600 font-medium">Central London</span>
          </div>
        </div>
      </div>

      {/* Central London Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Central London Renovation Experts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Central London represents the pinnacle of urban living, from luxury penthouses in Mayfair to converted warehouses in Shoreditch. We specialize in high-end renovations that meet the exacting standards of Central London's discerning residents. Our expertise spans historic listed buildings, modern developments, and everything in between, delivering exceptional results in the heart of the capital.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Luxury Apartments</h4>
                  <p className="text-sm text-gray-600">High-end residential developments and penthouses</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Listed Buildings</h4>
                  <p className="text-sm text-gray-600">Historic properties with heritage protection</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial Conversions</h4>
                  <p className="text-sm text-gray-600">Warehouse and office to residential conversions</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">New Developments</h4>
                  <p className="text-sm text-gray-600">Contemporary luxury residential projects</p>
                </div>
              </div>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Central%20London%20luxury%20apartment%20renovation%20showing%20high-end%20interior%20design%2C%20modern%20finishes%2C%20city%20views%2C%20premium%20residential%20refurbishment%2C%20contemporary%20living%20space%2C%20professional%20renovation%20work&width=600&height=400&seq=central-london-overview&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services in Central London */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Central London Services</h2>
            <p className="text-xl text-gray-600">Premium renovation services for Central London's prestigious properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-4-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Apartment Refurbishment</h3>
              <p className="text-gray-600 mb-4">High-end apartment renovations with premium finishes and bespoke design solutions.</p>
              <a href="/services/property-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-ancient-gate-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Listed Building Restoration</h3>
              <p className="text-gray-600 mb-4">Specialist restoration of historic and listed properties with heritage compliance.</p>
              <a href="/services/period-restoration" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-scissors-cut-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Designer Kitchen &amp; Bathroom</h3>
              <p className="text-gray-600 mb-4">Bespoke kitchen and bathroom design with luxury fixtures and smart technology.</p>
              <a href="/services/kitchen-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Conversions</h3>
              <p className="text-gray-600 mb-4">Converting commercial spaces into luxury residential properties with modern amenities.</p>
              <a href="/services/building-construction" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-paint-brush-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interior Design &amp; Refurbishment</h3>
              <p className="text-gray-600 mb-4">Complete interior transformations with bespoke design and premium materials.</p>
              <a href="/services/interior-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Concierge Project Management</h3>
              <p className="text-gray-600 mb-4">White-glove project management service for discerning Central London clients.</p>
              <a href="/services/design-consultation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Central London Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Central London Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our expertise in Central London's most prestigious developments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20penthouse%20renovation%20in%20Mayfair%20Central%20London%20showing%20high-end%20interior%20design%2C%20city%20views%2C%20premium%20finishes%2C%20contemporary%20living%20space%2C%20professional%20refurbishment%20work&width=400&height=300&seq=central-london-project-1&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Luxury Penthouse - Mayfair</h3>
                <p className="text-gray-600 mb-3">Complete luxury refurbishment with bespoke interiors and smart home technology.</p>
                <div className="text-sm text-gray-500">Mayfair, W1</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Listed%20building%20restoration%20in%20Bloomsbury%20Central%20London%20showing%20period%20property%20renovation%2C%20heritage%20features%20preserved%2C%20modern%20interior%20design%2C%20professional%20conservation%20work&width=400&height=300&seq=central-london-project-2&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Listed Building - Bloomsbury</h3>
                <p className="text-gray-600 mb-3">Heritage restoration combining period authenticity with contemporary luxury.</p>
                <div className="text-sm text-gray-500">Bloomsbury, WC1</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Warehouse%20conversion%20in%20Shoreditch%20Central%20London%20showing%20industrial%20to%20residential%20conversion%2C%20modern%20loft%20design%2C%20exposed%20brick%2C%20contemporary%20living%20space%2C%20professional%20renovation%20work&width=400&height=300&seq=central-london-project-3&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Warehouse Conversion - Shoreditch</h3>
                <p className="text-gray-600 mb-3">Industrial space transformed into luxury loft with modern amenities.</p>
                <div className="text-sm text-gray-500">Shoreditch, E1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Central London */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Central London Clients Choose Us</h2>
            <p className="text-xl text-blue-100">Premium expertise meets exceptional service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Luxury Specialists</h3>
              <p className="text-blue-100">Exclusive focus on high-end properties and discerning clientele</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Heritage Expertise</h3>
              <p className="text-blue-100">Specialist knowledge of listed buildings and conservation requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Concierge Service</h3>
              <p className="text-blue-100">White-glove project management with minimal client involvement required</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-blue-100">Exceptional craftsmanship and attention to detail in every project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Central London Consultation</h2>
            <p className="text-xl text-gray-600">Premium renovation advice for your Central London property</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Central London Project?</h3>
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
            {/* New Request Free Consultation Button */}
            <button 
              onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Free Consultation
            </button>
            {/* New Get Your Quote Button */}
            <button 
              onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Your Quote
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Central London Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Central London
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
                <span className="text-xl font-bold text-gray-900">Brent Renovation</span>
              </div>
              <p className="text-gray-400 mb-4">Serving Central London's most prestigious properties with 20+ years of luxury renovation expertise.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Central London Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/property-refurbishment" className="hover:text-white transition-colors cursor-pointer">Luxury Refurbishment</a></li>
                <li><a href="/services/period-restoration" className="hover:text-white transition-colors cursor-pointer">Listed Building Restoration</a></li>
                <li><a href="/services/kitchen-renovation" className="hover:text-white transition-colors cursor-pointer">Designer Kitchen &amp; Bathroom</a></li>
                <li><a href="/services/building-construction" className="hover:text-white transition-colors cursor-pointer">Commercial Conversions</a></li>
                <li><a href="/services/interior-refurbishment" className="hover:text-white transition-colors cursor-pointer">Interior Design</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Other Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/areas/westminster" className="hover:text-white transition-colors cursor-pointer">Westminster</a></li>
                <li><a href="/areas/kensington-chelsea" className="hover:text-white transition-colors cursor-pointer">Kensington &amp; Chelsea</a></li>
                <li><a href="/areas/camden" className="hover:text-white transition-colors cursor-pointer">Camden</a></li>
                <li><a href="/areas/islington" className="hover:text-white transition-colors cursor-pointer">Islington</a></li>
                <li><a href="/areas/richmond" className="hover:text-white transition-colors cursor-pointer">Richmond</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Central London Team</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 07597098565</li>
                <li>Email: info@brentcontractors.co.uk</li>
                <li>Serving: Mayfair, Bloomsbury</li>
                <li>Shoreditch & All Central London</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
