
import { useState } from 'react';

export default function HammersmithFulhamAreaPage() {
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
                    <a href="/services/property-refurbishment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Property Refurbishment</a>
                    <a href="/services/period-restoration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Period Restoration</a>
                    <a href="/services/kitchen-renovation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Kitchen Renovation</a>
                    <a href="/services/bathroom-renovation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Bathroom Renovation</a>
                    <a href="/services/house-extensions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">House Extensions</a>
                    <a href="/services/interior-refurbishment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Interior Refurbishment</a>
                    <a href="/services/building-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Building & Construction</a>
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
                  className="text-blue-600 font-medium cursor-pointer flex items-center"
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
                    <a href="/areas/kensington-chelsea" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Kensington & Chelsea</a>
                    <a href="/areas/camden" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Camden</a>
                    <a href="/areas/islington" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Islington</a>
                    <a href="/areas/hammersmith-fulham" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50 font-medium cursor-pointer">Hammersmith & Fulham</a>
                    <a href="/areas/wandsworth" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Wandsworth</a>
                    <a href="/areas/richmond" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Richmond</a>
                    <a href="/areas/brent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Brent</a>
                    <a href="/areas/harrow" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Harrow</a>
                    <a href="/areas/ealing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Ealing</a>
                    <a href="/areas/barnet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Barnet</a>
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
                      <a href="/areas/kensington-chelsea" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Kensington & Chelsea</a>
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Camden</a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Islington</a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Hammersmith & Fulham</a>
                      <a href="/areas/wandsworth" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Wandsworth</a>
                      <a href="/areas/richmond" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Richmond</a>
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Brent</a>
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
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Hammersmith%20Fulham%20London%20residential%20streets%20with%20Victorian%20terraces%2C%20Thames%20riverside%20properties%2C%20elegant%20London%20architecture%2C%20professional%20photography&width=1920&height=600&seq=hammersmith-hero&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Refurbishment & Renovation Hammersmith & Fulham
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Expert renovation and refurbishment services in Hammersmith & Fulham. Serving Fulham, Hammersmith, Shepherd's Bush, and all SW6, W6, W12 areas with 20+ years of local expertise.
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
          <nav className="text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="/areas" className="text-blue-600 hover:text-blue-700 cursor-pointer">Areas</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Hammersmith & Fulham</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Hammersmith & Fulham Renovation Specialists
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The London Borough of Hammersmith and Fulham offers an exceptional blend of riverside living, Victorian elegance, and modern convenience, making it one of West London's most desirable residential areas. Our Hammersmith & Fulham renovation and refurbishment services combine extensive local knowledge with superior craftsmanship to transform properties throughout SW6, W6, and W12. From the prestigious riverside developments along the Thames to the charming Victorian terraces of Fulham Broadway, we understand the unique character and requirements of this diverse borough. With over 20 years of experience working with conservation areas and period properties, we navigate local planning requirements while delivering exceptional renovations that enhance both property value and lifestyle quality.
                </p>

                <div 
                  className="h-64 bg-cover bg-center rounded-lg mb-8"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Hammersmith%20Fulham%20London%20property%20renovation%20showing%20Victorian%20terrace%20with%20modern%20interior%2C%20period%20features%20preserved%2C%20high-end%20refurbishment%20work%2C%20professional%20construction%20quality&width=800&height=400&seq=hammersmith-renovation&orientation=landscape')`
                  }}
                ></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Thames-side Property Expertise
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Hammersmith & Fulham's proximity to the Thames and its rich architectural heritage create unique opportunities and challenges for property renovation. Our team specializes in riverside property refurbishment, understanding flood risk considerations, conservation area requirements, and the premium standards expected in this sought-after location. From luxury apartment renovations overlooking the Thames to period house restorations in Fulham's conservation areas, we maintain excellent relationships with Hammersmith & Fulham Council's planning department and local heritage consultants to ensure seamless project delivery.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Hammersmith & Fulham Neighborhoods We Serve</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Fulham & Fulham Broadway</li>
                      <li>• Hammersmith & Ravenscourt Park</li>
                      <li>• Shepherd's Bush & White City</li>
                      <li>• Parsons Green & Putney Bridge</li>
                    </ul>
                    <ul className="space-y-2 text-blue-800">
                      <li>• West Kensington & Baron's Court</li>
                      <li>• Chiswick & Turnham Green</li>
                      <li>• Riverside areas & Thames Path</li>
                      <li>• All SW6, W6, W12, W4 areas</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Specialized Hammersmith & Fulham Services
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Riverside Property Renovation
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Specialist renovation services for Thames-side properties, understanding flood considerations 
                      and premium finishes expected in riverside locations.
                    </p>
                    <a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Victorian Terrace Restoration
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Expert restoration of Fulham's Victorian terraces, preserving period character 
                      while integrating modern luxury amenities.
                    </p>
                    <a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Kitchen & Bathroom Design
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Bespoke kitchen and bathroom renovation for Hammersmith & Fulham properties, 
                      combining style with practical functionality.
                    </p>
                    <a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      House Extensions & Conversions
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Maximize space with expert extensions and conversions, adding value to 
                      Hammersmith & Fulham properties while respecting planning guidelines.
                    </p>
                    <a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Local Hammersmith & Fulham Experts
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Working in Hammersmith & Fulham requires understanding of the borough's unique riverside location, transport links, and diverse architectural styles. Our Hammersmith & Fulham-focused approach ensures every project respects the area's character while meeting the high standards expected by discerning residents. We coordinate with specialist suppliers, approved contractors, and local consultants to maintain exceptional quality throughout your renovation journey.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Hammersmith & Fulham Council approved contractors</li>
                  <li>Riverside and conservation area specialists</li>
                  <li>Established relationships with local suppliers and craftspeople</li>
                  <li>Understanding of Thames-side property considerations</li>
                  <li>Experience with diverse architectural styles and periods</li>
                  <li>Commitment to enhancing West London's residential character</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Quote Form */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Get Your Hammersmith Quote</h3>
                <p className="mb-4">Free consultation for your Hammersmith & Fulham renovation project</p>
                <button 
                  onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                >
                  Request Free Consultation
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hammersmith & Fulham Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-phone-line text-blue-600 mr-3"></i>
                    <span>07597098565</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-blue-600 mr-3"></i>
                    <span>hammersmith@brentcontractors.co.uk</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-blue-600 mr-3"></i>
                    <span>Serving all SW6, W6, W12, W4 areas</span>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hammersmith & Fulham Services</h3>
                <ul className="space-y-3">
                  <li><a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Complete Property Refurbishment</a></li>
                  <li><a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Period Property Restoration</a></li>
                  <li><a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Kitchen Renovation</a></li>
                  <li><a href="/services/bathroom-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Bathroom Renovation</a></li>
                  <li><a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">House Extensions</a></li>
                  <li><a href="/services/interior-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Interior Refurbishment</a></li>
                  <li><a href="/services/building-construction" className="text-blue-600 hover:text-blue-700 cursor-pointer">Building & Construction</a></li>
                  <li><a href="/services/design-consultation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Design Consultation</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Recent Hammersmith & Fulham Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Riverside Apartment Renovation",
                location: "Hammersmith, W6",
                description: "Luxury apartment renovation with Thames views and contemporary finishes",
                image: "https://readdy.ai/api/search-image?query=Riverside%20apartment%20renovation%20in%20Hammersmith%20with%20Thames%20views%2C%20luxury%20modern%20interior%2C%20contemporary%20finishes%2C%20professional%20renovation%20photography&width=400&height=300&seq=hammersmith-project-1&orientation=landscape"
              },
              {
                title: "Victorian Terrace Refurbishment",
                location: "Fulham, SW6",
                description: "Complete refurbishment preserving period features with modern luxury",
                image: "https://readdy.ai/api/search-image?query=Victorian%20terrace%20refurbishment%20in%20Fulham%2C%20period%20features%20preserved%2C%20modern%20luxury%20interior%2C%20professional%20photography%2C%20high-end%20finishes&width=400&height=300&seq=hammersmith-project-2&orientation=landscape"
              },
              {
                title: "Family Home Extension",
                location: "Shepherd's Bush, W12",
                description: "House extension creating open-plan living with garden access",
                image: "https://readdy.ai/api/search-image?query=Family%20home%20extension%20in%20Shepherds%20Bush%20Hammersmith%2C%20open-plan%20living%20with%20garden%20access%2C%20modern%20interior%20design%2C%20professional%20construction%20finish&width=400&height=300&seq=hammersmith-project-3&orientation=landscape"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Hammersmith & Fulham Consultation</h2>
            <p className="text-xl text-gray-600">Expert renovation advice for your Hammersmith & Fulham property</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Hammersmith & Fulham Project?</h3>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hammersmith & Fulham Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Hammersmith & Fulham
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
