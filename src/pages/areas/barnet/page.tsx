
import { useState } from 'react';

export default function BarnetAreaPage() {
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

      const response = await fetch('https://readdy.ai/api/form/d3pi9aaqm8kq7403o620', {
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
      <span className="text-xl font-bold text-gray-900">Brent Renovation</span>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
                    <a href="/services/property-refurbishment" className="block px-4 py-2 text-sm text-gray-7 00 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Property Refurbishment</a>
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
                    <a href="/areas/barnet" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer">Barnet</a>
                    <a href="/areas/central-london" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Central London</a>
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
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Harrow</a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Ealing</a>
                      <a href="/areas/barnet" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Barnet</a>
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Barnet%20London%20borough%20showing%20suburban%20family%20homes%2C%20tree-lined%20streets%2C%201930s%20houses%2C%20modern%20developments%2C%20leafy%20North%20London%20residential%20area%2C%20family%20neighborhoods&width=1920&height=600&seq=barnet-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Barnet Property Renovation Specialists
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Expert refurbishment services for Barnet's family homes and diverse residential communities
          </p>
          <button 
            onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Free Consultation
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
            <span className="text-blue-600 font-medium">Barnet</span>
          </div>
        </div>
      </div>

      {/* Barnet Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Barnet Borough Renovation Experts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Barnet is London's largest borough, offering everything from leafy suburbs to bustling town centers. From the historic charm of Barnet Village to the modern developments of Borehamwood, we understand the diverse character of each neighborhood. Our renovation services help families create beautiful, functional homes that suit Barnet's family-focused lifestyle while enhancing property values.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1930s Family Homes</h4>
                  <p className="text-sm text-gray-600">Classic suburban properties throughout Barnet</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Developments</h4>
                  <p className="text-sm text-gray-600">Contemporary apartments and townhouses</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Period Properties</h4>
                  <p className="text-sm text-gray-600">Victorian and Edwardian character homes</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Green Belt Properties</h4>
                  <p className="text-sm text-gray-600">Homes near parks and open spaces</p>
                </div>
              </div>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Barnet%20family%20home%20renovation%20showing%201930s%20suburban%20house%20refurbishment%2C%20modern%20extension%2C%20family-friendly%20design%2C%20North%20London%20property%2C%20professional%20renovation%20work&width=600&height=400&seq=barnet-overview&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services in Barnet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Barnet Services</h2>
            <p className="text-xl text-gray-600">Comprehensive renovation services for Barnet's diverse property portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-home-4-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suburban Home Refurbishment</h3>
              <p className="text-gray-600 mb-4">Complete renovation of 1930s and post-war family homes throughout Barnet's residential areas.</p>
              <a href="/services/property-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-scissors-cut-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Kitchen Renovation</h3>
              <p className="text-gray-600 mb-4">Modern kitchen transformations designed for busy family life with practical storage solutions.</p>
              <a href="/services/kitchen-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-add-box-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">House Extensions</h3>
              <p className="text-gray-600 mb-4">Single and double-story extensions creating additional space for growing families across Barnet.</p>
              <a href="/services/house-extensions" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-drop-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bathroom Renovation</h3>
              <p className="text-gray-600 mb-4">Family bathroom and en-suite transformations with modern fixtures and efficient layouts.</p>
              <a href="/services/bathroom-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-paint-brush-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Loft Conversions</h3>
              <p className="text-gray-600 mb-4">Converting unused loft space into bedrooms, offices, or playrooms for additional family space.</p>
              <a href="/services/interior-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-leaf-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garden Room Extensions</h3>
              <p className="text-gray-600 mb-4">Creating seamless indoor-outdoor living spaces perfect for Barnet's green suburban lifestyle.</p>
              <a href="/services/house-extensions" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Barnet Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Barnet Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our expertise across Barnet's diverse neighborhoods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=1930s%20house%20renovation%20in%20Finchley%20Barnet%20showing%20family%20home%20refurbishment%2C%20modern%20kitchen%20extension%2C%20open%20plan%20living%2C%20North%20London%20suburban%20property%2C%20professional%20renovation%20work&width=400&height=300&seq=barnet-project-1&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1930s Family Home - Finchley</h3>
                <p className="text-gray-600 mb-3">Complete refurbishment with rear extension creating modern family living space.</p>
                <div className="text-sm text-gray-500">East Finchley, N2</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20apartment%20renovation%20in%20Borehamwood%20Barnet%20showing%20contemporary%20interior%20design%2C%20luxury%20finishes%2C%20open%20plan%20living%2C%20North%20London%20development%2C%20professional%20refurbishment%20work&width=400&height=300&seq=barnet-project-2&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contemporary Apartment - Borehamwood</h3>
                <p className="text-gray-600 mb-3">Modern apartment transformation with luxury finishes and smart home features.</p>
                <div className="text-sm text-gray-500">Borehamwood, WD6</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=House%20extension%20in%20Barnet%20showing%20double%20story%20rear%20extension%2C%20bi-fold%20doors%20to%20garden%2C%20modern%20family%20kitchen%2C%20professional%20building%20work%2C%20suburban%20London%20property&width=400&height=300&seq=barnet-project-3&orientation=landscape')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-9

                mb-2">Double Extension - High Barnet</h3>
                <p className="text-gray-600 mb-3">Two-story extension creating spacious kitchen-dining and additional bedroom.</p>
                <div className="text-sm text-gray-500">High Barnet, EN5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Barnet */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Barnet Families Choose Us</h2>
            <p className="text-xl text-blue-100">Local expertise meets family-focused design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-heart-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Family-Focused Design</h3>
              <p className="text-blue-100">Specialized in creating practical, beautiful spaces for family life</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Borough-Wide Expertise</h3>
              <p className="text-blue-100">Extensive experience across all Barnet areas from Finchley to Borehamwood</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Green Space Integration</h3>
              <p className="text-blue-100">Designs that maximize Barnet's proximity to parks and green spaces</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-price-tag-3-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Value Enhancement</h3>
              <p className="text-blue-100">Renovations that significantly increase property values in Barnet's market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Barnet Consultation</h2>
            <p className="text-xl text-gray-600">Expert renovation advice for your Barnet family home</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Barnet Project?</h3>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Barnet Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Barnet
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
    </div>
  );
}
