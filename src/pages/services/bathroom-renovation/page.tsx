
import { useState } from 'react';

export default function BathroomRenovationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

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
                    <a href="/services/bathroom-renovation" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50 font-medium cursor-pointer">Bathroom Renovation</a>
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
                    <a href="/areas/kensington-chelsea" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Kensington & Chelsea</a>
                    <a href="/areas/camden" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Camden</a>
                    <a href="/areas/islington" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Islington</a>
                    <a href="/areas/hammersmith-fulham" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Hammersmith & Fulham</a>
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
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Consultation
              </a>
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
                      <a href="/services/bathroom-renovation" onClick={() => setIsMenuOpen(false)} className="block text-blue-600 bg-blue-50 font-medium py-1 cursor-pointer">Bathroom Renovation</a>
                      <a href="/services/house-extensions" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">House Extensions</a>
                      <a href="/services/interior-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Interior Refurbishment</a>
                      <a href="/services/building-construction" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Building & Construction</a>
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
                      <a href="/areas/kensington-chelsea" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Kensington & Chelsea</a>
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Camden</a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Islington</a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Hammersmith & Fulham</a>
                      <a href="/areas/wandsworth" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover=text-blue-600 py-1 cursor-pointer">Wandsworth</a>
                      <a href="/areas/richmond" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Richmond</a>
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Brent</a>
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-1 cursor-pointer">Harrow</a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover=text-blue-600 py-1 cursor-pointer">Ealing</a>
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
                <a 
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Luxury Bathroom Renovation Services in London</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Transform bathrooms into luxury retreats with premium fixtures and spa-like design. Expert bathroom renovation throughout Kensington, Chelsea, Hampstead and all London areas.</p>
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-7 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Your Bathroom Design Consultation
            </a>
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
            <span className="text-gray-600">Bathroom Renovation</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Luxury Bathroom Design & Installation</h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A beautifully designed bathroom serves as a personal sanctuary, offering a space for relaxation and rejuvenation. Our expert bathroom renovation services transform ordinary spaces into luxury retreats that combine stunning aesthetics with practical functionality. With over 20 years of experience creating exceptional bathrooms across London's most prestigious properties, we understand how to maximize space, enhance comfort, and create bathrooms that add significant value to your home.
                </p>

                <img 
                  src="https://readdy.ai/api/search-image?query=Luxury%20bathroom%20renovation%20with%20marble%20tiles%20and%20modern%20fixtures%2C%20freestanding%20bathtub%20and%20walk-in%20shower%2C%20contemporary%20design%20with%20natural%20lighting%2C%20high-end%20residential%20interior%2C%20clean%20and%20elegant%20aesthetic%20with%20gold%20accents&width=800&height=400&seq=bathroom-main&orientation=landscape"
                  alt="Luxury bathroom renovation London - marble tiles, modern fixtures, freestanding bathtub, walk-in shower with contemporary design and natural lighting"
                  className="h-64 w-full object-cover object-top rounded-lg mb-8"
                />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Bathroom Transformation</h3>
                
                <p className="text-gray-700 mb-6">
                  Our comprehensive bathroom renovation service encompasses every aspect of your project, from initial design concepts through to final installation and finishing details. We work with leading bathroom designers, premium fixture suppliers, and skilled craftsmen to create bathrooms that exceed expectations. Whether you're envisioning a contemporary spa-like retreat, a traditional period-appropriate design, or a compact yet luxurious solution, our team delivers exceptional results tailored to your lifestyle and space.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Bathroom Renovation Services</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Bespoke bathroom design and planning</li>
                      <li>• Luxury fixture selection and installation</li>
                      <li>• Premium tile and stone work</li>
                      <li>• Underfloor heating systems</li>
                      <li>• Bathroom lighting design</li>
                      <li>• Plumbing and electrical installation</li>
                    </ul>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Bespoke storage solutions</li>
                      <li>• Ventilation and extraction systems</li>
                      <li>• Waterproofing and tanking</li>
                      <li>• Mirror and glass installation</li>
                      <li>• Smart bathroom technology</li>
                      <li>• Project management and coordination</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Fixtures & Materials</h3>
                
                <p className="text-gray-700 mb-6">
                  We source the finest bathroom fixtures and materials from leading manufacturers, ensuring your renovation features premium quality components that combine beauty with durability. From natural stone and designer tiles to luxury sanitaryware and cutting-edge technology, every element is carefully selected to create a bathroom that's both stunning and functional.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Luxury Fixtures</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Freestanding bathtubs</li>
                      <li>• Walk-in shower systems</li>
                      <li>• Designer sanitaryware</li>
                      <li>• Premium taps and fittings</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Premium Materials</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Natural stone and marble</li>
                      <li>• Designer ceramic tiles</li>
                      <li>• Luxury vinyl and wood</li>
                      <li>• Glass and mirror features</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Smart Technology</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Digital shower controls</li>
                      <li>• Heated towel rails</li>
                      <li>• LED lighting systems</li>
                      <li>• Bluetooth audio integration</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas We Serve</h3>
                
                <p className="text-gray-700 mb-6">
                  Our bathroom renovation services are available throughout London, with particular expertise in period properties and conservation areas. We understand local building regulations and work closely with building control to ensure all installations meet current standards while respecting architectural heritage.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Central London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/westminster" className="hover:text-blue-600 cursor-pointer">Westminster</a></li>
                      <li><a href="/areas/kensington-chelsea" className="hover:text-blue-600 cursor-pointer">Kensington & Chelsea</a></li>
                      <li><a href="/areas/camden" className="hover:text-blue-600 cursor-pointer">Camden</a></li>
                      <li><a href="/areas/islington" className="hover:text-blue-600 cursor-pointer">Islington</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">South West London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/hammersmith-fulham" className="hover:text-blue-600 cursor-pointer">Hammersmith & Fulham</a></li>
                      <li><a href="/areas/wandsworth" className="hover:text-blue-600 cursor-pointer">Wandsworth</a></li>
                      <li><a href="/areas/richmond" className="hover:text-blue-600 cursor-pointer">Richmond</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">North West London</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><a href="/areas/brent" className="hover:text-blue-600 cursor-pointer">Brent</a></li>
                      <li><a href="/areas/harrow" className="hover:text-blue-600 cursor-pointer">Harrow</a></li>
                      <li><a href="/areas/ealing" className="hover:text-blue-600 cursor-pointer">Ealing</a></li>
                      <li><a href="/areas/barnet" className="hover:text-blue-600 cursor-pointer">Barnet</a></li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Spa-Like Experience</h4>
                    <p className="text-gray-600">Transform your bathroom into a luxury retreat with premium fixtures, ambient lighting, and thoughtful design details.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Installation</h4>
                    <p className="text-gray-600">Professional installation by certified plumbers and tilers with comprehensive warranties on all work and materials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Quote Form */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Bathroom Design Consultation</h3>
                <p className="mb-4">Free design consultation and detailed quote for your luxury bathroom</p>
                <a 
                  href="/contact"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer block text-center"
                >
                  Request Bathroom Consultation
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li><a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Complete Property Refurbishment</a></li>
                  <li><a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Period Bathroom Restoration</a></li>
                  <li><a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Kitchen Renovation</a></li>
                  <li><a href="/services/interior-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Interior Refurbishment</a></li>
                  <li><a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">Bathroom Extensions</a></li>
                </ul>
              </div>

              {/* Trust Elements */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bathroom Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-drop-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Luxury Spa Design</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-tools-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Expert Installation</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-shield-check-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Waterproofing Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-star-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Premium Fixtures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for Your Dream Bathroom?</h2>
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
                <li><a href="/services/bathroom-renovation" className="hover:text-white transition-colors cursor-pointer">Bathroom Renovation</a></li>
                <li><a href="/services/house-extensions" className="hover:text-white transition-colors cursor-pointer">House Extensions</a></li>
                <li><a href="/services/interior-refurbishment" className="hover:text-white transition-colors cursor-pointer">Interior Refurbishment</a></li>
                <li><a href="/services/building-construction" className="hover:text-white transition-colors cursor-pointer">Building & Construction</a></li>
                <li><a href="/services/design-consultation" className="hover:text-white transition-colors cursor-pointer">Design Consultation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Central London</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/areas/westminster" className="hover:text-white transition-colors cursor-pointer">Westminster</a></li>
                <li><a href="/areas/kensington-chelsea" className="hover:text-white transition-colors cursor-pointer">Kensington & Chelsea</a></li>
                <li><a href="/areas/camden" className="hover:text-white transition-colors cursor-pointer">Camden</a></li>
                <li><a href="/areas/islington" className="hover:text-white transition-colors cursor-pointer">Islington</a></li>
                <li><a href="/areas/hammersmith-fulham" className="hover:text-white transition-colors cursor-pointer">Hammersmith & Fulham</a></li>
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
