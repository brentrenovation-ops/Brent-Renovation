
import { useState } from 'react';

export default function InteriorRefurbishmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: 'interior-refurbishment',
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
          service: 'interior-refurbishment',
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
                  className="text-blue-600 font-medium cursor-pointer flex items-center"
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
                    <a href="/services/interior-refurbishment" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50 font-medium cursor-pointer">Interior Refurbishment</a>
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
                    <a href="/areas/barnet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Barnet</a>
                    <a href="/areas/central-london" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Central London</a>
                  </div>
                )}
              </div>

              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Portfolio</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Contact</a>
              <button 
                onClick={() => document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' })}
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
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-blue-600 font-medium cursor-pointer flex items-center justify-between"
                  >
                    Services <i className={`ri-arrow-${isServicesOpen ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/services/property-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Property Refurbishment</a>
                      <a href="/services/period-restoration" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Period Restoration</a>
                      <a href="/services/kitchen-renovation" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Kitchen Renovation</a>
                      <a href="/services/bathroom-renovation" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Bathroom Renovation</a>
                      <a href="/services/house-extensions" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">House Extensions</a>
                      <a href="/services/interior-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-blue-600 bg-blue-50 font-medium py-1 cursor-pointer">Interior Refurbishment</a>
                      <a href="/services/building-construction" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Building &amp; Construction</a>
                      <a href="/services/design-consultation" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Design Consultation</a>
                      <a href="/services" onClick={() => setIsMenuOpen(false)} className="block text-blue-600 font-medium py-1 cursor-pointer">View All Services →</a>
                    </div>
                  )}
                </div>

                {/* Mobile Areas Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsAreasOpen(!isAreasOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center justify-between"
                  >
                    Areas <i className={`ri-arrow-${isAreasOpen ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {isAreasOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/areas/westminster" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Westminster</a>
                      <a href="/areas/kensington-chelsea" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Kensington &amp; Chelsea</a>
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover=text-blue-600 py-1 cursor-pointer">Camden</a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Islington</a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Hammersmith &amp; Fulham</a>
                      <a href="/areas/wandsworth" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Wandsworth</a>
                      <a href="/areas/richmond" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Richmond</a>
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Brent</a>
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Harrow</a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Ealing</a>
                      <a href="/areas/barnet" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Barnet</a>
                      <a href="/areas/central-london" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Central London</a>
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
                    document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' });
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
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Interior Refurbishment Services in London</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Modernize interior spaces with expert refurbishment for living rooms, bedrooms, and common areas across Central and North West London.</p>
            <button 
              onClick={() => document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Your Interior Design Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="/services" className="text-blue-600 hover:text-blue-700 cursor-pointer">Services</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Interior Refurbishment</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Interior Transformation</h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Interior refurbishment breathes new life into existing spaces, transforming tired rooms into stunning, functional areas that reflect modern living while respecting architectural character. Our comprehensive interior refurbishment services cover every aspect of room transformation, from structural modifications and electrical upgrades to decorative finishes and furnishing. With over 20 years of experience working across London's diverse property types, we understand how to maximize space, enhance natural light, and create interiors that perfectly balance style with practicality.
                </p>

                <div 
                  className="h-64 bg-cover bg-center rounded-lg mb-8"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Interior%20refurbishment%20showing%20modern%20living%20room%20transformation%2C%20contemporary%20furniture%20and%20lighting%2C%20open%20plan%20design%2C%20professional%20interior%20renovation%2C%20elegant%20residential%20space%20with%20neutral%20colors%20and%20natural%20materials&width=800&height=400&seq=interior-main&orientation=landscape')`
                  }}
                ></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Interior Services</h3>
                
                <p className="text-gray-700 mb-6">
                  Our interior refurbishment approach combines practical renovation expertise with contemporary design sensibilities to create spaces that are both beautiful and functional. We work with experienced interior designers, skilled craftsmen, and trusted suppliers to deliver complete room transformations that enhance your lifestyle and add significant value to your property. From period property restoration to contemporary modernization, our team adapts our approach to suit your vision and property's character.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Interior Refurbishment Services</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Complete room transformations</li>
                      <li>• Modern lighting design and electrical</li>
                      <li>• Flooring installation and refinishing</li>
                      <li>• Wall preparation and decorative finishes</li>
                      <li>• Built-in storage solutions</li>
                      <li>• Window treatments and soft furnishings</li>
                    </ul>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Heating and ventilation upgrades</li>
                      <li>• Structural modifications and openings</li>
                      <li>• Period feature restoration</li>
                      <li>• Smart home technology integration</li>
                      <li>• Color consultation and paint finishes</li>
                      <li>• Project coordination and management</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Room-Specific Expertise</h3>
                
                <p className="text-gray-700 mb-6">
                  Each room in your home serves different purposes and requires specialized consideration during refurbishment. Our team understands the unique requirements of different spaces, from creating relaxing bedroom retreats and productive home offices to designing welcoming living areas and functional utility spaces. We tailor our approach to maximize each room's potential while ensuring consistency throughout your home.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Living Spaces</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Living room refurbishment</li>
                      <li>• Dining room transformation</li>
                      <li>• Open plan living design</li>
                      <li>• Entertainment area creation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Private Spaces</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Master bedroom suites</li>
                      <li>• Guest bedroom design</li>
                      <li>• Home office creation</li>
                      <li>• Study and library spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Functional Areas</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Utility room optimization</li>
                      <li>• Hallway and entrance design</li>
                      <li>• Storage room organization</li>
                      <li>• Basement conversions</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas We Serve</h3>
                
                <p className="text-gray-700 mb-6">
                  Our interior refurbishment services are available throughout London, with particular expertise in period properties and conservation areas. We understand local architectural styles and work sensitively with existing features while introducing contemporary elements that enhance comfort and functionality.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Central London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/westminster" className="hover:text-blue-600 cursor-pointer">Westminster</a></li>
                      <li><a href="/areas/kensington-chelsea" className="hover:text-blue-600 cursor-pointer">Kensington &amp; Chelsea</a></li>
                      <li><a href="/areas/camden" className="hover:text-blue-600 cursor-pointer">Camden</a></li>
                      <li><a href="/areas/islington" className="hover:text-blue-600 cursor-pointer">Islington</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">West London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/hammersmith-fulham" className="hover:text-blue-600 cursor-pointer">Hammersmith &amp; Fulham</a></li>
                      <li><a href="/areas/wandsworth" className="hover:text-blue-600 cursor-pointer">Wandsworth</a></li>
                      <li><a href="/areas/richmond" className="hover:text-blue-600 cursor-pointer">Richmond</a></li>
                      <li><a href="/areas/ealing" className="hover:text-blue-600 cursor-pointer">Ealing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">North West London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/brent" className="hover:text-blue-600 cursor-pointer">Brent</a></li>
                      <li><a href="/areas/harrow" className="hover:text-blue-600 cursor-pointer">Harrow</a></li>
                      <li><a href="/areas/barnet" className="hover:text-blue-600 cursor-pointer">Barnet</a></li>
                      <li><a href="/areas/central-london" className="hover:text-blue-600 cursor-pointer">Central London</a></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Interior Refurbishment Services</h3>
                
                <p className="text-gray-700 mb-6">
                  Our interior refurbishment expertise combines creative design vision with practical renovation skills to deliver exceptional results. We understand that every room has unique requirements and work closely with you to create spaces that reflect your lifestyle while maximizing functionality and aesthetic appeal.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Design Excellence</h4>
                    <p className="text-gray-600">Professional interior design services that create cohesive, stylish spaces tailored to your lifestyle and preferences.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Craftsmanship</h4>
                    <p className="text-gray-600">Expert installation and finishing by skilled tradesmen with attention to detail and commitment to excellence.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Quote Form */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Interior Design Consultation</h3>
                <p className="mb-4">Free consultation and design proposal for your interior refurbishment</p>
                <a 
                  href="/contact"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer block text-center"
                >
                  Request Interior Consultation
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li><a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Complete Property Refurbishment</a></li>
                  <li><a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Period Interior Restoration</a></li>
                  <li><a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Kitchen Renovation</a></li>
                  <li><a href="/services/bathroom-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Bathroom Renovation</a></li>
                  <li><a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">House Extensions</a></li>
                </ul>
              </div>

              {/* Trust Elements */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interior Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-palette-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Professional Design</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-lightbulb-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Lighting Specialists</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-tools-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Expert Installation</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-home-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Complete Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Interior Refurbishment Consultation</h2>
            <p className="text-xl text-gray-600">Tell us about your interior transformation vision and we'll provide expert design advice within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} data-readdy-form className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="e.g. SW1A 1AA"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Interior Requirements</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                placeholder="Tell us about your interior refurbishment requirements, rooms to be transformed, style preferences, and timeline..."
              ></textarea>
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 mr-2"></i>
                  <span className="text-green-800">Thank you! Your interior consultation request has been submitted successfully. We'll contact you within 24 hours.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 mr-2"></i>
                  <span className="text-red-800">Sorry, there was an error submitting your request. Please try again or call us directly.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Interior Design Consultation'}
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Interior?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and detailed quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07376719216"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call: 07376 719216
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
              >
                Get In Touch
              </a>
            </div>
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
              <p className="text-gray-400 mb-4">Premium renovation and refurbishment specialists serving London for over 20 years.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/property-refurbishment" className="hover:text-white transition-colors cursor-pointer">Property Refurbishment</a></li>
                <li><a href="/services/period-restoration" className="hover:text-white transition-colors cursor-pointer">Period Restoration</a></li>
                <li><a href="/services/kitchen-renovation" className="hover:text-white transition-colors cursor-pointer">Kitchen Renovation</a></li>
                <li><a href="/services/bathroom-renovition" className="hover:text-white transition-colors cursor-pointer">Bathroom Renovation</a></li>
                <li><a href="/services/house-extensions" className="hover:text-white transition-colors cursor-pointer">House Extensions</a></li>
                <li><a href="/services/interior-refurbishment" className="hover:text-white transition-colors cursor-pointer">Interior Refurbishment</a></li>
                <li><a href="/services/building-construction" className="hover:text-white transition-colors cursor-pointer">Building &amp; Construction</a></li>
                <li><a href="/services/design-consultation" className="hover:text-white transition-colors cursor-pointer">Design Consultation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Central London</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/areas/westminster" className="hover:text-white transition-colors cursor-pointer">Westminster</a></li>
                <li><a href="/areas/kensington-chelsea" className="hover:text-white transition-colors cursor-pointer">Kensington &amp; Chelsea</a></li>
                <li><a href="/areas/camden" className="hover:text-white transition-colors cursor-pointer">Camden</a></li>
                <li><a href="/areas/islington" className="hover:text-white transition-colors cursor-pointer">Islington</a></li>
                <li><a href="/areas/hammersmith-fulham" className="hover:text-white transition-colors cursor-pointer">Hammersmith &amp; Fulham</a></li>
                <li><a href="/areas/wandsworth" className="hover:text-white transition-colors cursor-pointer">Wandsworth</a></li>
                <li><a href="/areas/richmond" className="hover:text-white transition-colors cursor-pointer">Richmond</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">North West London</h4>
              <ul className="space-y-2 text-gray-400 mb-4">
                <li><a href="/areas/brent" className="hover:text-white transition-colors cursor-pointer">Brent</a></li>
                <li><a href="/areas/harrow" className="hover:text-white transition-colors cursor-pointer">Harrow</a></li>
                <li><a href="/areas/ealing" className="hover:text-white transition-colors cursor-pointer">Ealing</a></li>
                <li><a href="/areas/barnet" className="hover:text-white transition-colors cursor-pointer">Barnet</a></li>
              </ul>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="/portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Phone: 07597098565</span>
              <span>|</span>
              <span>Email: info@brentcontractors.co.uk</span>
              <span>|</span>
              <a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors cursor-pointer">Website Builder</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
