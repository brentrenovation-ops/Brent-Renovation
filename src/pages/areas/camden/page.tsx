
import { useState } from 'react';

export default function CamdenAreaPage() {
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
                    <a href="/areas/camden" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer">Camden</a>
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
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Camden</a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Islington</a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Hammersmith &amp; Fulham</a>
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Camden%20London%20residential%20streets%20with%20Victorian%20terraces%2C%20Regent%5C%5Cs%20Park%20area%2C%20Primrose%20Hill%20neighborhood%2C%20elegant%20London%20architecture%2C%20professional%20photography&width=1920&height=600&seq=camden-hero&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Refurbishment & Renovation Camden
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Expert renovation and refurbishment services in Camden. Serving Primrose Hill, Regent's Park, King's Cross, and all NW1, NW3 areas with 20+ years of local expertise.
          </p>
          <a
            href="tel:07376719216"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
          >
            <i className="ri-phone-line mr-2"></i>
            Call: 07376 719216
          </a>
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
            <span className="text-gray-600">Camden</span>
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
                  Camden Renovation Specialists
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Camden represents one of London's most vibrant and culturally rich boroughs, where historic Georgian terraces meet contemporary urban living. Our Camden renovation and refurbishment services combine deep local knowledge with exceptional craftsmanship to transform properties throughout NW1 and NW3. From the elegant Victorian villas of Primrose Hill to the converted warehouses of King's Cross, we understand Camden's unique architectural character and the diverse needs of its residents. With over 20 years of experience working in conservation areas and with listed buildings, we navigate Camden Council's planning requirements while delivering renovations that respect the area's heritage and enhance modern living.
                </p>

                <div 
                  className="h-64 bg-cover bg-center rounded-lg mb-8"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Camden%20London%20property%20renovation%20showing%20Victorian%20terrace%20with%20modern%20interior%2C%20period%20features%20preserved%2C%20high-end%20refurbishment%20work%2C%20professional%20construction%20quality&width=800&height=400&seq=camden-renovation&orientation=landscape')`
                  }}
                ></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Local Planning & Conservation Expertise
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Camden's rich architectural heritage includes numerous conservation areas, listed buildings, and planning restrictions that require specialist knowledge and careful navigation. Our team maintains excellent relationships with Camden Council's planning department, conservation officers, and local heritage consultants, ensuring every renovation project meets strict guidelines while achieving your vision. From basement conversions in Primrose Hill to warehouse conversions in King's Cross, we handle complex approval processes with expertise gained through decades of successful Camden projects.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Camden Neighborhoods We Serve</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Primrose Hill & Regent's Park</li>
                      <li>• Camden Town & Camden Market</li>
                      <li>• King's Cross & St. Pancras</li>
                      <li>• Bloomsbury & Fitzrovia</li>
                    </ul>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Hampstead & Hampstead Heath</li>
                      <li>• Kentish Town & Gospel Oak</li>
                      <li>• Holborn & Russell Square</li>
                      <li>• All NW1, NW3, WC1 areas</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Specialized Camden Services
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Victorian & Georgian Restoration
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Expert restoration of Camden's period properties, preserving original features while 
                      integrating modern amenities for contemporary living.
                    </p>
                    <a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Complete Property Refurbishment
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Comprehensive refurbishment services for Camden properties, from concept to completion 
                      with full project management.
                    </p>
                    <a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Kitchen & Bathroom Renovation
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Bespoke kitchen and bathroom design for Camden homes, combining period character 
                      with modern functionality and luxury finishes.
                    </p>
                    <a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Loft & Basement Conversions
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Maximize space in Camden properties with expert loft and basement conversions, 
                      adding value while respecting planning constraints.
                    </p>
                    <a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Local Camden Experts
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Working in Camden requires understanding of the borough's unique character, from the artistic heritage of Camden Market to the refined elegance of Primrose Hill. Our Camden-focused approach ensures every project respects the area's diverse architectural styles while meeting the high standards expected by discerning residents. We coordinate with specialist suppliers, heritage consultants, and approved contractors to maintain exceptional quality throughout your renovation journey.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Camden Council approved contractors with local expertise</li>
                  <li>Conservation area and listed building specialists</li>
                  <li>Established relationships with local suppliers and craftspeople</li>
                  <li>Understanding of Camden's unique planning requirements</li>
                  <li>Experience with diverse property types and architectural styles</li>
                  <li>Commitment to preserving Camden's cultural and architectural heritage</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Quote Form */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Get Your Camden Quote</h3>
                <p className="mb-4">Free consultation for your Camden renovation project</p>
                <button 
                  onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Free Consultation
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Camden Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-phone-line text-blue-600 mr-3"></i>
                    <span>07597098565</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-blue-600 mr-3"></i>
                    <span>camden@brentcontractors.co.uk</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-blue-600 mr-3"></i>
                    <span>Serving all NW1, NW3, WC1 areas</span>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Camden Services</h3>
                <ul className="space-y-3">
                  <li><a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Complete Property Refurbishment</a></li>
                  <li><a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Period Property Restoration</a></li>
                  <li><a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Kitchen Renovation</a></li>
                  <li><a href="/services/bathroom-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Bathroom Renovation</a></li>
                  <li><a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">House Extensions</a></li>
                  <li><a href="/services/interior-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Interior Refurbishment</a></li>
                  <li><a href="/services/building-construction" className="text-blue-600 hover:text-blue-700 cursor-pointer">Building &amp; Construction</a></li>
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
            Recent Camden Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Victorian Villa Restoration",
                location: "Primrose Hill, NW3",
                description: "Complete restoration preserving period features while adding contemporary luxury",
                image: "https://readdy.ai/api/search-image?query=Victorian%20villa%20restoration%20in%20Primrose%20Hill%20Camden%2C%20period%20features%20preserved%2C%20luxury%20modern%20interior%2C%20professional%20renovation%20photography%2C%20high-end%20finishes&width=400&height=300&seq=camden-project-1&orientation=landscape"
              },
              {
                title: "Georgian Terrace Refurbishment",
                location: "Bloomsbury, WC1",
                description: "Full house refurbishment with modern kitchen and luxury bathrooms",
                image: "https://readdy.ai/api/search-image?query=Georgian%20terrace%20refurbishment%20in%20Bloomsbury%20Camden%2C%20modern%20kitchen%20and%20luxury%20bathroom%2C%20contemporary%20interior%20design%2C%20professional%20photography&width=400&height=300&seq=camden-project-2&orientation=landscape"
              },
              {
                title: "Warehouse Conversion",
                location: "King's Cross, N1",
                description: "Industrial warehouse converted to luxury residential space with period features",
                image: "https://readdy.ai/api/search-image?query=Warehouse%20conversion%20in%20Kings%20Cross%20Camden%2C%20industrial%20to%20luxury%20residential%2C%20period%20features%20preserved%2C%20modern%20interior%20design%2C%20professional%20construction%20finish&width=400&height=300&seq=camden-project-3&orientation=landscape"
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

      {/* Consultation Section */}
      <section id="consultation-iframe" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe 
            src="https://readdy.ai/api/form/d3prkngud0rphmrm5pig" 
            width="100%" 
            height="600" 
            frameBorder="0"
            className="rounded-lg shadow-lg"
          ></iframe>
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
