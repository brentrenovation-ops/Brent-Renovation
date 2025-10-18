
import { useState, useEffect } from 'react';

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  // Add Schema.org JSON-LD for services page
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Professional Construction & Renovation Services London",
      "description": "Comprehensive construction and renovation services in London. Property refurbishment, period restoration, kitchen & bathroom renovation, house extensions across Westminster, Kensington, Camden.",
      "url": import.meta.env.VITE_SITE_URL,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Brent Contractors",
        "telephone": "+447376719216",
        "email": "info@brentrenovation.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction & Renovation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Property Refurbishment",
              "description": "Complete property transformations from planning to completion",
              "url": `${import.meta.env.VITE_SITE_URL}/services/property-refurbishment`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Period Restoration",
              "description": "Specialist restoration of Victorian and Georgian properties",
              "url": `${import.meta.env.VITE_SITE_URL}/services/period-restoration`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Renovation",
              "description": "Modern kitchen designs with premium finishes and appliances",
              "url": `${import.meta.env.VITE_SITE_URL}/services/kitchen-renovation`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathroom Renovation",
              "description": "Luxury bathroom installations and complete refurbishments",
              "url": `${import.meta.env.VITE_SITE_URL}/services/bathroom-renovation`
            }
          }
        ]
      },
      "areaServed": [
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
      ],
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${import.meta.env.VITE_SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${import.meta.env.VITE_SITE_URL}/services`
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Professional Construction & Renovation Services London - Brent Contractors";
    const metaDescription = document.querySelector('meta[name=\"description\"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive construction and renovation services in London. Property refurbishment, period restoration, kitchen & bathroom renovation, house extensions across Westminster, Kensington, Camden.');
    }

    return () => {
      document.head.removeChild(script);
      document.title = "Brent Contractors - London Renovation & Refurbishment Specialists";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'London\'s premier renovation specialists. Complete property refurbishment, period restoration, kitchen & bathroom renovation, house extensions across Westminster, Kensington, Camden & all London boroughs.');
      }
    };
  }, []);

  const services = [
    {
      title: 'Property Refurbishment',
      description: 'Complete property transformations from planning to completion',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20home%20property%20refurbishment%20with%20elegant%20interior%20design%2C%20contemporary%20furniture%2C%20hardwood%20floors%2C%20large%20windows%20with%20natural%20light%2C%20neutral%20color%20palette%2C%20professional%20renovation%20work%2C%20high-end%20finishes%2C%20spacious%20living%20room%20with%20modern%20decor&width=400&height=300&seq=property-refurb-001&orientation=landscape',
      link: '/services/property-refurbishment'
    },
    {
      title: 'Period Restoration',
      description: 'Specialist restoration of Victorian and Georgian properties',
      image: 'https://readdy.ai/api/search-image?query=Victorian%20Georgian%20period%20property%20restoration%20with%20original%20architectural%20features%2C%20ornate%20moldings%2C%20restored%20sash%20windows%2C%20period%20fireplace%2C%20traditional%20craftsmanship%2C%20heritage%20building%20renovation%2C%20classic%20interior%20design%2C%20historical%20accuracy&width=400&height=300&seq=period-restore-001&orientation=landscape',
      link: '/services/period-restoration'
    },
    {
      title: 'Kitchen Renovation',
      description: 'Modern kitchen designs with premium finishes and appliances',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20kitchen%20renovation%20with%20white%20cabinets%2C%20marble%20countertops%2C%20stainless%20steel%20appliances%2C%20pendant%20lighting%2C%20kitchen%20island%2C%20contemporary%20design%2C%20premium%20finishes%2C%20clean%20minimalist%20style%2C%20professional%20installation&width=400&height=300&seq=kitchen-reno-001&orientation=landscape',
      link: '/services/kitchen-renovation'
    },
    {
      title: 'Bathroom Renovation',
      description: 'Luxury bathroom installations and complete refurbishments',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20bathroom%20renovation%20with%20marble%20tiles%2C%20modern%20fixtures%2C%20rainfall%20shower%2C%20freestanding%20bathtub%2C%20contemporary%20vanity%2C%20premium%20finishes%2C%20elegant%20lighting%2C%20spa-like%20atmosphere%2C%20high-end%20bathroom%20design&width=400&height=300&seq=bathroom-reno-001&orientation=landscape',
      link: '/services/bathroom-renovation'
    },
    {
      title: 'House Extensions',
      description: 'Single and double-storey extensions to expand your living space',
      image: 'https://readdy.ai/api/search-image?query=Modern%20house%20extension%20construction%20with%20glass%20walls%2C%20contemporary%20architecture%2C%20seamless%20integration%20with%20existing%20building%2C%20construction%20work%20in%20progress%2C%20structural%20beams%2C%20professional%20building%20work%2C%20expanded%20living%20space&width=400&height=300&seq=house-extension-001&orientation=landscape',
      link: '/services/house-extensions'
    },
    {
      title: 'Interior Refurbishment',
      description: 'Complete interior makeovers with modern design and finishes',
      image: 'https://readdy.ai/api/search-image?query=Complete%20interior%20refurbishment%20with%20modern%20design%2C%20contemporary%20furniture%2C%20stylish%20decor%2C%20neutral%20color%20scheme%2C%20hardwood%20flooring%2C%20designer%20lighting%2C%20elegant%20finishes%2C%20professional%20interior%20renovation%20work&width=400&height=300&seq=interior-refurb-001&orientation=landscape',
      link: '/services/interior-refurbishment'
    },
    {
      title: 'Building & Construction',
      description: 'New builds and major structural construction projects',
      image: 'https://readdy.ai/api/search-image?query=Construction%20site%20with%20modern%20building%20framework%2C%20structural%20steel%20beams%2C%20construction%20workers%2C%20building%20materials%2C%20professional%20construction%20work%2C%20new%20build%20project%2C%20architectural%20development%2C%20construction%20machinery&width=400&height=300&seq=building-construction-001&orientation=landscape',
      link: '/services/building-construction'
    },
    {
      title: 'Design Consultation',
      description: 'Professional design advice and project planning services',
      image: 'https://readdy.ai/api/search-image?query=Professional%20design%20consultation%20meeting%20with%20architectural%20plans%2C%20blueprints%2C%20design%20samples%2C%20interior%20design%20materials%2C%20consultation%20table%2C%20professional%20designer%20working%2C%20project%20planning%2C%20design%20portfolio&width=400&height=300&seq=design-consultation-001&orientation=landscape',
      link: '/services/design-consultation'
    },
    {
      title: 'Luxury Wall & Floor Finishes',
      description: 'Premium materials and expert installation for walls and floors',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20wall%20and%20floor%20finishes%20installation%20with%20marble%20tiles%2C%20hardwood%20flooring%2C%20premium%20materials%2C%20expert%20craftsmanship%2C%20elegant%20interior%20surfaces%2C%20high-end%20finishes%2C%20professional%20installation%20work&width=400&height=300&seq=luxury-finishes-001&orientation=landscape',
      link: '/services/luxury-wall-floor-finishes'
    },
    {
      title: 'Lighting Integration',
      description: 'Smart lighting systems and architectural illumination solutions',
      image: 'https://readdy.ai/api/search-image?query=Modern%20smart%20lighting%20integration%20with%20LED%20fixtures%2C%20architectural%20lighting%20design%2C%20contemporary%20light%20installations%2C%20ambient%20lighting%2C%20smart%20home%20technology%2C%20professional%20electrical%20work%2C%20elegant%20illumination%20systems&width=400&height=300&seq=lighting-integration-001&orientation=landscape',
      link: '/services/lighting-integration'
    },
    {
      title: 'Window Installation',
      description: 'Professional window installation and replacement services',
      image: 'https://readdy.ai/api/search-image?query=Professional%20window%20installation%20with%20modern%20double%20glazed%20windows%2C%20construction%20worker%20installing%20windows%2C%20building%20renovation%2C%20window%20replacement%20work%2C%20contemporary%20window%20frames%2C%20professional%20installation&width=400&height=300&seq=window-installation-001&orientation=landscape',
      link: '/services/window-installation'
    }
  ];

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
                <span className="text-xl font-bold text-gray-900">Brent Contractors</span>
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
                href="tel:07376719216"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call: 07376 719216
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
                
                {/* Mobile Services Menu */}
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-blue-600 font-medium cursor-pointer flex items-center justify-between"
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
                    window.location.href = '/#quote-form';
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
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Construction Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From complete property refurbishments to specialized renovations, we deliver exceptional results across London with over 15 years of experience.
            </p>
            <button 
              onClick={() => window.location.href = '/#quote-form'}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Phone: 07376 719216</span>
              <span>|</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and renovation services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Refurbishment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <i className="ri-home-4-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Refurbishment</h3>
                <p className="text-gray-600 mb-4">Complete property transformations from planning to completion</p>
                <a href="/services/property-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Period Restoration */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <i className="ri-building-2-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Period Restoration</h3>
                <p className="text-gray-600 mb-4">Specialist restoration of Victorian and Georgian properties</p>
                <a href="/services/period-restoration" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Kitchen Renovation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <i className="ri-restaurant-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen Renovation</h3>
                <p className="text-gray-600 mb-4">Modern kitchen designs with premium finishes and appliances</p>
                <a href="/services/kitchen-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Bathroom Renovation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <i className="ri-drop-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bathroom Renovation</h3>
                <p className="text-gray-600 mb-4">Luxury bathroom installations and complete refurbishments</p>
                <a href="/services/bathroom-renovation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* House Extensions */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <i className="ri-add-box-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">House Extensions</h3>
                <p className="text-gray-600 mb-4">Single and double-storey extensions to expand your living space</p>
                <a href="/services/house-extensions" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Interior Refurbishment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <i className="ri-paint-brush-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interior Refurbishment</h3>
                <p className="text-gray-600 mb-4">Complete interior makeovers with modern design and finishes</p>
                <a href="/services/interior-refurbishment" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Building & Construction */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <i className="ri-hammer-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building &amp; Construction</h3>
                <p className="text-gray-600 mb-4">New builds and major structural construction projects</p>
                <a href="/services/building-construction" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Design Consultation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <i className="ri-pencil-ruler-2-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Consultation</h3>
                <p className="text-gray-600 mb-4">Professional design advice and project planning services</p>
                <a href="/services/design-consultation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Luxury Wall & Floor Finishes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <i className="ri-layout-grid-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Wall &amp; Floor Finishes</h3>
                <p className="text-gray-600 mb-4">Premium materials and expert installation for walls and floors</p>
                <a href="/services/luxury-wall-floor-finishes" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Lighting Integration */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <i className="ri-lightbulb-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lighting Integration</h3>
                <p className="text-gray-600 mb-4">Smart lighting systems and architectural illumination solutions</p>
                <a href="/services/lighting-integration" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Window Installation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <i className="ri-window-line text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Window Installation</h3>
                <p className="text-gray-600 mb-4">Professional window installation and replacement services</p>
                <a href="/services/window-installation" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Brent Contractors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results with professional service and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Proven track record of successful projects across London</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive insurance coverage for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Projects completed on schedule with quality workmanship</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-4 mb-4">
                <i className="ri-customer-service-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer support throughout your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your construction or renovation project
          </p>
          <button 
            onClick={() => window.location.href = '/#quote-form'}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold">Brent Contractors</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional construction and renovation services across London with over 15 years of experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/property-refurbishment" className="hover:text-white cursor-pointer">Property Refurbishment</a></li>
                <li><a href="/services/kitchen-renovation" className="hover:text-white cursor-pointer">Kitchen Renovation</a></li>
                <li><a href="/services/bathroom-renovishment" className="hover:text-white cursor-pointer">Bathroom Renovation</a></li>
                <li><a href="/services/house-extensions" className="hover:text-white cursor-pointer">House Extensions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/areas/westminster" className="hover:text-white cursor-pointer">Westminster</a></li>
                <li><a href="/areas/kensington-chelsea" className="hover:text-white cursor-pointer">Kensington &amp; Chelsea</a></li>
                <li><a href="/areas/camden" className="hover:text-white cursor-pointer">Camden</a></li>
                <li><a href="/areas/islington" className="hover:text-white cursor-pointer">Islington</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  07597098565
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@brentcontractors.co.uk
                </li>
                <li className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  London, UK
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
