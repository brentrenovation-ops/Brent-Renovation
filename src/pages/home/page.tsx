
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  // Add Schema.org JSON-LD for homepage
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Brent Contractors - London Renovation & Refurbishment Specialists",
      "description":
        "London's premier renovation specialists. Complete property refurbishment, period restoration, kitchen & bathroom renovation across Westminster, Kensington, Camden & all London boroughs.",
      "url": `${import.meta.env.VITE_SITE_URL}/`,
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Brent Contractors",
        "description":
          "London's premier renovation and refurbishment specialists with over 20 years of experience.",
        "url": import.meta.env.VITE_SITE_URL,
        "telephone": "+447376719216",
        "email": "info@brentrenovation.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "serviceArea": [
          "Westminster",
          "Kensington and Chelsea",
          "Camden",
          "Islington",
          "Hammersmith and Fulham",
          "Wandsworth",
          "Richmond",
          "Brent",
          "Harrow",
          "Ealing",
          "Barnet"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${import.meta.env.VITE_SITE_URL}/`
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
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
                      href="/services/bathroom-renovitation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Bathroom Renovation
                    </a>
                    <a
                      href="/services/interior-refurbishment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Interior Refurbishment
                    </a>
                    <a
                      href="/services/luxury-wall-floor-finishes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Luxury Wall &amp; Floor Finishes
                    </a>
                    <a
                      href="/services/lighting-integration"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Lighting Integration
                    </a>
                    <a
                      href="/services/window-installation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Window Installation
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
                      href="/areas/wandsward"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Wandsward
                    </a>
                    <a
                      href="/areas/richmond"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-60 cursor-pointer"
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

              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Portfolio
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Contact
              </a>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                Get Your Free Consultation
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
                <a href="/" onClick={() => setIsMenuOpen(false)} className="text-blue-600 font-medium cursor-pointer">
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
                      <a href="/services/property-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Property Refurbishment
                      </a>
                      <a href="/services/period-restoration" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Period Restoration
                      </a>
                      <a href="/services/kitchen-renovation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Kitchen Renovation
                      </a>
                      <a href="/services/bathroom-renovition" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Bathroom Renovation
                      </a>
                      <a href="/services/interior-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Interior Refurbishment
                      </a>
                      <a href="/services/luxury-wall-floor-finishes" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Luxury Wall &amp; Floor Finishes
                      </a>
                      <a href="/services/lighting-integration" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Lighting Integration
                      </a>
                      <a href="/services/window-installation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Window Installation
                      </a>
                      <a href="/services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
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
                    Areas <i className={`ri-arrow-${isAreasOpen ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {isAreasOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/areas/westminster" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Westminster
                      </a>
                      <a href="/areas/kensington-chelsea" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Kensington &amp; Chelsea
                      </a>
                      <a href="/areas/camden" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Camden
                      </a>
                      <a href="/areas/islington" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Islington
                      </a>
                      <a href="/areas/hammersmith-fulham" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        Hammersmith &amp; Fulham
                      </a>
                      <a href="/areas/wandsward" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Wandsward
                      </a>
                      <a href="/areas/richmond" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Richmond
                      </a>
                      <a href="/areas/brent" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Brent
                      </a>
                      <a href="/areas/harrow" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Harrow
                      </a>
                      <a href="/areas/ealing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Ealing
                      </a>
                      <a href="/areas/barnet" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Barnet
                      </a>
                      <a href="/areas/central-london" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                        Central London
                      </a>
                    </div>
                  )}
                </div>

                <a href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  Portfolio
                </a>
                <a href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                  About
                </a>
                <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20London%20property%20renovation%20showing%20elegant%20Victorian%20house%20with%20modern%20extension%2C%20premium%20refurbishment%20work%2C%20high-end%20residential%20architecture%2C%20professional%20construction%20quality%2C%20twilight%20photography%20with%20warm%20interior%20lighting&width=1920&height=1080&seq=hero-renovation&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            London's Premier<br />Renovation &amp; Refurbishment Specialists
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Transforming properties across Central London and beyond with 20+ years of expert craftsmanship
          </p>
          <button
            onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Get Your Free Consultation
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete property refurbishment to period restoration, we deliver exceptional results across all aspects of renovation and construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service cards (unchanged) */}
            {/* ... (omitted for brevity; same as original) */}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving London's Finest Neighborhoods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Central London's prestigious areas to North West London's vibrant communities, we bring 20+ years of renovation expertise to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Westminster', href: '/areas/westminster' },
              { name: 'Kensington &amp; Chelsea', href: '/areas/kensington-chelsea' },
              { name: 'Camden', href: '/areas/camden' },
              { name: 'Islington', href: '/areas/islington' },
              { name: 'Hammersmith &amp; Fulham', href: '/areas/hammersmith-fulham' },
              { name: 'Wandsward', href: '/areas/wandsward' },
              { name: 'Richmond', href: '/areas/richmond' },
              { name: 'Brent', href: '/areas/brent' },
              { name: 'Harrow', href: '/areas/harrow' },
              { name: 'Ealing', href: '/areas/ealing' },
              { name: 'Barnet', href: '/areas/barnet' },
              { name: 'Central London', href: '/areas/central-london' }
            ].map((area, index) => (
              <a
                key={index}
                href={area.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">Expert renovation services</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your area? We serve all London boroughs with the same commitment to excellence.</p>
            <button
              onClick={() => document.querySelector('#consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Check Your Area
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our commitment to excellence and attention to detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio cards (unchanged) */}
            {/* ... (omitted for brevity; same as original) */}
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">20+ years of excellence across London</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial cards (unchanged) */}
            {/* ... (omitted for brevity; same as original) */}
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">✓</div>
              <div className="text-blue-100">Fully Insured &amp; Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">FREE</div>
              <div className="text-blue-100">Consultation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-blue-100">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Comprehensive Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation-iframe" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <style>{`
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

            @media (max-width: 640px) {
              .consultation-iframe {
                height: 1350px;
              }
            }

            @media (min-width: 641px) and (max-width: 1024px) {
              .consultation-iframe {
                height: 1600px;
              }
            }

            @media (min-width: 1025px) {
              .consultation-iframe {
                height: 1200px;
              }
            }
          `}</style>
          <div className="consultation-iframe-container">
            <iframe
              className="consultation-iframe"
              src="https://consultation-flax.vercel.app/consultation"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your renovation project? Contact us today for a consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak to our team</p>
              <a href="tel:07597098565" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                07597 098565
              </a>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:info@brentrenovation.co.uk" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                info@brentrenovation.co.uk
              </a>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600 mb-2">
                Westminster, Kensington &amp; Chelsea, Camden, Islington, Hammersmith &amp; Fulham, Wandsward, Richmond, Brent, Harrow, Easing and all London boroughs
              </p>
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
              <p className="text-gray-400 mb-4">
                Premium renovation and refurbishment specialists serving London for over 20 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/services/property-refurbishment" className="hover:text-white transition-colors cursor-pointer">
                    Property Refurbishment
                  </a>
                </li>
                <li>
                  <a href="/services/period-restoration" className="hover:text-white transition-colors cursor-pointer">
                    Period Restoration
                  </a>
                </li>
                <li>
                  <a href="/services/kitchen-renovation" className="hover:text-white transition-colors cursor-pointer">
                    Kitchen Renovation
                  </a>
                </li>
                <li>
                  <a href="/services/bathroom-renovition" className="hover:text-white transition-colors cursor-pointer">
                    Bathroom Renovation
                  </a>
                </li>
                <li>
                  <a href="/services/interior-refurbishment" className="hover:text-white transition-colors cursor-pointer">
                    Interior Refurbishment
                  </a>
                </li>
                <li>
                  <a href="/services/luxury-wall-floor-finishes" className="hover:text-white transition-colors cursor-pointer">
                    Luxury Wall &amp; Floor Finishes
                  </a>
                </li>
                <li>
                  <a href="/services/lighting-integration" className="hover:text-white transition-colors cursor-pointer">
                    Lighting Integration
                  </a>
                </li>
                <li>
                  <a href="/services/window-installation" className="hover:text-white transition-colors cursor-pointer">
                    Window Installation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Central London</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/areas/westminster" className="hover:text-white transition-colors cursor-pointer">
                    Westminster
                  </a>
                </li>
                <li>
                  <a href="/areas/kensington-chelsea" className="hover:text-white transition-colors cursor-pointer">
                    Kensington &amp; Chelsea
                  </a>
                </li>
                <li>
                  <a href="/areas/camden" className="hover:text-white transition-colors cursor-pointer">
                    Camden
                  </a>
                </li>
                <li>
                  <a href="/areas/islington" className="hover:text-white transition-colors cursor-pointer">
                    Islington
                  </a>
                </li>
                <li>
                  <a href="/areas/hammersmith-fulham" className="hover:text-white transition-colors cursor-pointer">
                    Hammersmith &amp; Fulham
                  </a>
                </li>
                <li>
                  <a href="/areas/wandsward" className="hover:text-white transition-colors cursor-pointer">
                    Wandsward
                  </a>
                </li>
                <li>
                  <a href="/areas/richmond" className="hover:text-white transition-colors cursor-pointer">
                    Richmond
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">North West London</h4>
              <ul className="space-y-2 text-gray-400 mb-4">
                <li>
                  <a href="/areas/brent" className="hover:text-white transition-colors cursor-pointer">
                    Brent
                  </a>
                </li>
                <li>
                  <a href="/areas/harrow" className="hover:text-white transition-colors cursor-pointer">
                    Harrow
                  </a>
                </li>
                <li>
                  <a href="/areas/ealing" className="hover:text-white transition-colors cursor-pointer">
                    Ealing
                  </a>
                </li>
                <li>
                  <a href="/areas/barnet" className="hover:text-white transition-colors cursor-pointer">
                    Barnet
                  </a>
                </li>
              </ul>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="hover:text-white transition-colors cursor-pointer">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Phone: 07376 719216</span>
            <span>|</span>
            <span>Email: info@brentrenovation.co.uk</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
