
import React, { useState } from 'react';

const PeriodRestorationPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">Brent Renovation</span>
            </a>

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
                  className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
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
                      <a href="/services/period-restoration" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Period Restoration</a>
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
      <section 
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20Victorian%20period%20property%20restoration%20showing%20beautiful%20heritage%20building%20facade%20with%20restored%20sash%20windows%2C%20ornate%20architectural%20details%2C%20period%20appropriate%20stonework%2C%20professional%20heritage%20restoration%20work%2C%20London%20Victorian%20terrace%20house&width=1200&height=600&seq=period-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Period Property Restoration
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Specialist restoration of Victorian and Edwardian properties throughout London. 
            Preserving heritage while integrating modern living.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Heritage Restoration Specialists</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 20 years of experience in London's period properties, we understand the unique challenges 
                and requirements of Victorian and Edwardian homes. Our specialist team combines traditional 
                craftsmanship with modern techniques to preserve your property's character while enhancing its functionality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Original Feature Preservation</h3>
                    <p className="text-gray-600">Restore and maintain period features including sash windows, cornicing, and fireplaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Modern System Integration</h3>
                    <p className="text-gray-600">Seamlessly integrate heating, plumbing, and electrical systems without compromising character</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Conservation Area Expertise</h3>
                    <p className="text-gray-600">Navigate planning permissions and conservation requirements with confidence</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Victorian%20interior%20restoration%20showing%20elegant%20period%20living%20room%20with%20restored%20original%20features%2C%20ornate%20ceiling%20moldings%2C%20period%20fireplace%2C%20traditional%20furniture%2C%20heritage%20interior%20design%2C%20authentic%20period%20details&width=600&height=400&seq=period-interior&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Period Restoration Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services tailored to Victorian and Edwardian properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-home-4-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Restoration</h3>
              <p className="text-gray-600">
                Foundation repairs, wall restoration, roof work, and structural reinforcement while maintaining period integrity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-window-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sash Window Restoration</h3>
              <p className="text-gray-600">
                Expert restoration of original sash windows, including draught-proofing and double glazing where appropriate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-fire-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Period Fireplaces</h3>
              <p className="text-gray-600">
                Restoration of original fireplaces, chimney work, and installation of period-appropriate heating solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-paint-brush-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decorative Features</h3>
              <p className="text-gray-600">
                Restoration of cornicing, ceiling roses, picture rails, and other period decorative elements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-stairs-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Period Staircases</h3>
              <p className="text-gray-600">
                Restoration and repair of original staircases, banisters, and period flooring throughout the property.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Integration</h3>
              <p className="text-gray-600">
                Discreet installation of modern heating, plumbing, and electrical systems without compromising character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Period Properties Across London</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specializing in Victorian and Edwardian properties in London's most prestigious areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-building-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Westminster</h3>
              <p className="text-sm text-gray-600">60% Victorian properties</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-building-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Kensington &amp; Chelsea</h3>
              <p className="text-sm text-gray-600">75% period properties</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-building-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Camden (Hampstead)</h3>
              <p className="text-sm text-gray-600">70% Victorian homes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-building-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Islington</h3>
              <p className="text-sm text-gray-600">65% period properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Restoration Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A careful, methodical approach to preserving your property's heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage Assessment</h3>
              <p className="text-gray-600">Detailed survey of original features and structural condition</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conservation Planning</h3>
              <p className="text-gray-600">Design solutions that preserve character while meeting modern needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialist Restoration</h3>
              <p className="text-gray-600">Expert craftsmen restore original features using traditional techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Integration</h3>
              <p className="text-gray-600">Seamless installation of contemporary systems and finishes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Restore Your Period Property?</h2>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Period Property?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our heritage specialists for a consultation on your Victorian or Edwardian property restoration project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Get Free Quote
            </a>
            <a href="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              View Portfolio
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
              <p className="text-gray-400 mb-4">London's premier renovation specialists with over 20 years of experience.</p>
              <div className="flex space-x-4">
                <i className="ri-facebook-fill text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
                <i className="ri-twitter-fill text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
                <i className="ri-instagram-line text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/property-refurbishment" className="hover:text-white cursor-pointer">Property Refurbishment</a></li>
                <li><a href="/services/period-restoration" className="hover:text-white cursor-pointer">Period Restoration</a></li>
                <li><a href="/services/kitchen-renovation" className="hover:text-white cursor-pointer">Kitchen Renovation</a></li>
                <li><a href="/services/bathroom-renovation" className="hover:text-white cursor-pointer">Bathroom Renovation</a></li>
                <li><a href="/services/house-extensions" className="hover:text-white cursor-pointer">House Extensions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/areas/westminster" className="hover:text-white cursor-pointer">Westminster</a></li>
                <li><a href="/areas/kensington-chelsea" className="hover:text-white cursor-pointer">Kensington &amp; Chelsea</a></li>
                <li><a href="/areas/camden" className="hover:text-white cursor-pointer">Camden</a></li>
                <li><a href="/areas/islington" className="hover:text-white cursor-pointer">Islington</a></li>
                <li><a href="/areas/central-london" className="hover:text-white cursor-pointer">Central London</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p><i className="ri-phone-line mr-2"></i>07597098565</p>
                <p><i className="ri-mail-line mr-2"></i>info@brentcontractors.co.uk</p>
                <p><i className="ri-map-pin-line mr-2"></i>London, UK</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PeriodRestorationPage;
