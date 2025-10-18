
import { useState, useEffect } from 'react';

// Portfolio categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'refurbishment', name: 'Property Refurbishment' },
  { id: 'kitchen', name: 'Kitchen Renovation' },
  { id: 'bathroom', name: 'Bathroom Renovation' },
  { id: 'extension', name: 'House Extensions' },
  { id: 'interior', name: 'Interior Refurbishment' },
  { id: 'construction', name: 'Building & Construction' }
];

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: 'Luxury Westminster Townhouse',
    location: 'Westminster, Central London',
    category: 'refurbishment',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20townhouse%20interior%20with%20elegant%20living%20room%2C%20contemporary%20furniture%2C%20marble%20fireplace%2C%20large%20windows%20with%20natural%20light%2C%20sophisticated%20color%20palette%20of%20whites%20and%20grays%2C%20high-end%20finishes%2C%20minimalist%20design&width=400&height=300&seq=1&orientation=landscape',
    description: 'Complete refurbishment of a Grade II listed Georgian townhouse with modern amenities while preserving period features.',
    features: [
      'Period feature restoration',
      'Modern kitchen installation',
      'Luxury bathroom suites',
      'Structural improvements'
    ]
  },
  {
    id: 2,
    title: 'Contemporary Kitchen Extension',
    location: 'Kensington & Chelsea',
    category: 'extension',
    image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20extension%20with%20large%20glass%20doors%20opening%20to%20garden%2C%20contemporary%20white%20cabinets%2C%20marble%20countertops%2C%20pendant%20lighting%2C%20open%20plan%20design%2C%20natural%20light%20flooding%20space%2C%20clean%20minimalist%20aesthetic&width=400&height=300&seq=2&orientation=landscape',
    description: 'Single-storey rear extension creating an open-plan kitchen-dining area with bi-fold doors to garden.',
    features: [
      'Structural glass extension',
      'Open-plan living space',
      'Premium appliances',
      'Garden integration'
    ]
  },
  {
    id: 3,
    title: 'Master Bathroom Renovation',
    location: 'Camden',
    category: 'bathroom',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20master%20bathroom%20with%20freestanding%20bathtub%2C%20walk-in%20shower%2C%20marble%20tiles%2C%20modern%20fixtures%2C%20elegant%20lighting%2C%20spa-like%20atmosphere%2C%20neutral%20color%20scheme%2C%20high-end%20finishes%2C%20contemporary%20design&width=400&height=300&seq=3&orientation=landscape',
    description: 'Complete transformation of master bathroom with luxury fittings and contemporary design.',
    features: [
      'Freestanding bathtub',
      'Walk-in shower',
      'Heated floors',
      'Premium fixtures'
    ]
  },
  {
    id: 4,
    title: 'Victorian House Refurbishment',
    location: 'Islington',
    category: 'refurbishment',
    image: 'https://readdy.ai/api/search-image?query=Renovated%20Victorian%20house%20interior%20with%20modern%20open%20plan%20living%2C%20exposed%20brick%20walls%2C%20contemporary%20furniture%2C%20large%20windows%2C%20wooden%20floors%2C%20industrial%20lighting%2C%20blend%20of%20period%20and%20modern%20features&width=400&height=300&seq=4&orientation=landscape',
    description: 'Full refurbishment of Victorian terrace house with modern open-plan living while retaining character.',
    features: [
      'Original feature retention',
      'Modern heating system',
      'Rewiring and plumbing',
      'Insulation upgrade'
    ]
  },
  {
    id: 5,
    title: 'Designer Kitchen Renovation',
    location: 'Hammersmith & Fulham',
    category: 'kitchen',
    image: 'https://readdy.ai/api/search-image?query=Designer%20kitchen%20with%20sleek%20modern%20cabinets%2C%20quartz%20countertops%2C%20stainless%20steel%20appliances%2C%20pendant%20lighting%2C%20breakfast%20bar%2C%20contemporary%20design%2C%20neutral%20colors%2C%20high-end%20finishes%2C%20functional%20layout&width=400&height=300&seq=5&orientation=landscape',
    description: 'High-end kitchen renovation with bespoke cabinetry and premium appliances.',
    features: [
      'Bespoke cabinetry',
      'Quartz worktops',
      'Integrated appliances',
      'LED lighting system'
    ]
  },
  {
    id: 6,
    title: 'Loft Conversion & Interior',
    location: 'Wandsworth',
    category: 'interior',
    image: 'https://readdy.ai/api/search-image?query=Modern%20loft%20conversion%20with%20sloped%20ceilings%2C%20skylights%2C%20contemporary%20bedroom%20furniture%2C%20built-in%20storage%2C%20wooden%20floors%2C%20neutral%20decor%2C%20natural%20light%2C%20cozy%20atmosphere%2C%20efficient%20use%20of%20space&width=400&height=300&seq=6&orientation=landscape',
    description: 'Loft conversion with complete interior refurbishment creating additional bedroom and study space.',
    features: [
      'Dormer window installation',
      'Built-in storage',
      'Ensuite bathroom',
      'Velux windows'
    ]
  },
  {
    id: 7,
    title: 'New Build Construction',
    location: 'Richmond',
    category: 'construction',
    image: 'https://readdy.ai/api/search-image?query=Modern%20new%20build%20house%20exterior%20with%20contemporary%20architecture%2C%20large%20windows%2C%20clean%20lines%2C%20landscaped%20front%20garden%2C%20driveway%2C%20brick%20and%20render%20facade%2C%20stylish%20design%2C%20suburban%20setting&width=400&height=300&seq=7&orientation=landscape',
    description: 'Ground-up construction of contemporary family home with sustainable features.',
    features: [
      'Energy-efficient design',
      'Smart home technology',
      'Landscaped gardens',
      'Triple glazing'
    ]
  },
  {
    id: 8,
    title: 'Period Property Restoration',
    location: 'Brent',
    category: 'refurbishment',
    image: 'https://readdy.ai/api/search-image?query=Restored%20period%20property%20interior%20with%20original%20features%2C%20ornate%20ceiling%20moldings%2C%20period%20fireplace%2C%20hardwood%20floors%2C%20traditional%20furniture%20mixed%20with%20modern%20elements%2C%20elegant%20decor%2C%20classic%20British%20style&width=400&height=300&seq=8&orientation=landscape',
    description: 'Careful restoration of 1930s semi-detached house preserving original Art Deco features.',
    features: [
      'Art Deco feature restoration',
      'Period-appropriate materials',
      'Modern utilities integration',
      'Garden landscaping'
    ]
  },
  {
    id: 9,
    title: 'Luxury Bathroom Suite',
    location: 'Harrow',
    category: 'bathroom',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20bathroom%20suite%20with%20double%20vanity%2C%20large%20mirror%2C%20marble%20surfaces%2C%20modern%20fixtures%2C%20elegant%20lighting%2C%20spacious%20layout%2C%20contemporary%20design%2C%20high-end%20finishes%2C%20spa-like%20ambiance&width=400&height=300&seq=9&orientation=landscape',
    description: 'Complete bathroom renovation with luxury fittings and spa-like atmosphere.',
    features: [
      'Double vanity unit',
      'Rainfall shower',
      'Underfloor heating',
      'Smart mirror'
    ]
  },
  {
    id: 10,
    title: 'Open Plan Kitchen Extension',
    location: 'Ealing',
    category: 'extension',
    image: 'https://readdy.ai/api/search-image?query=Open%20plan%20kitchen%20extension%20with%20dining%20area%2C%20modern%20white%20kitchen%2C%20large%20island%2C%20pendant%20lights%2C%20glass%20doors%20to%20garden%2C%20contemporary%20design%2C%20spacious%20layout%2C%20natural%20light%2C%20family-friendly%20space&width=400&height=300&seq=10&orientation=landscape',
    description: 'Two-storey extension creating open-plan kitchen-dining area with additional bedroom above.',
    features: [
      'Two-storey extension',
      'Kitchen island',
      'Bi-fold doors',
      'Additional bedroom'
    ]
  },
  {
    id: 11,
    title: 'Complete Interior Redesign',
    location: 'Barnet',
    category: 'interior',
    image: 'https://readdy.ai/api/search-image?query=Complete%20interior%20redesign%20with%20modern%20living%20room%2C%20contemporary%20furniture%2C%20neutral%20color%20palette%2C%20stylish%20lighting%2C%20hardwood%20floors%2C%20minimalist%20decor%2C%20comfortable%20seating%2C%20elegant%20design&width=400&height=300&seq=11&orientation=landscape',
    description: 'Full interior refurbishment with contemporary design throughout all living spaces.',
    features: [
      'Complete redecoration',
      'New flooring throughout',
      'Modern lighting design',
      'Built-in furniture'
    ]
  },
  {
    id: 12,
    title: 'Heritage Building Renovation',
    location: 'Central London',
    category: 'construction',
    image: 'https://readdy.ai/api/search-image?query=Heritage%20building%20renovation%20with%20restored%20facade%2C%20period%20windows%2C%20traditional%20brickwork%2C%20modern%20interior%20visible%20through%20windows%2C%20blend%20of%20old%20and%20new%2C%20urban%20setting%2C%20architectural%20preservation&width=400&height=300&seq=12&orientation=landscape',
    description: 'Renovation of heritage commercial building converting to luxury residential apartments.',
    features: [
      'Heritage facade restoration',
      'Modern apartment conversion',
      'Lift installation',
      'Communal areas'
    ]
  }
];

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Add Schema.org JSON-LD for portfolio page
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio - Brent Contractors London Renovation Projects",
      "description": "View our portfolio of completed renovation projects across London. Property refurbishment, period restoration, kitchen & bathroom renovations in Westminster, Kensington, Camden and beyond.",
      "url": import.meta.env.VITE_SITE_URL,
      "telephone": "+447376719216",
      "email": "info@brentrenovation.co.uk",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Renovation Projects Portfolio",
        "description": "Completed renovation and refurbishment projects by Brent Contractors",
        "numberOfItems": projects.length,
        "itemListElement": projects.slice(0, 5).map((project, index) => ({
          "@type": "CreativeWork",
          "position": index + 1,
          "name": project.title,
          "description": project.description,
          "image": project.image,
          "locationCreated": project.location
        }))
      },
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
            "name": "Portfolio",
            "item": `${import.meta.env.VITE_SITE_URL}/portfolio`
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Portfolio - Brent Contractors London Renovation Projects";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our portfolio of completed renovation projects across London. Property refurbishment, period restoration, kitchen & bathroom renovations in Westminster, Kensington, Camden and beyond.');
    }

    return () => {
      document.head.removeChild(script);
      document.title = "Brent Contractors - London Renovation & Refurbishment Specialists";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'London\'s premier renovation specialists. Complete property refurbishment, period restoration, kitchen & bathroom renovation, house extensions across Westminster, Kensington, Camden & all London boroughs.');
      }
    };
  }, []);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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

              <a href="/portfolio" className="text-blue-600 font-medium cursor-pointer">Portfolio</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">Contact</a>
              <button 
                onClick={() => window.location.href = '/#quote-form'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Consultation
              </button>
              {/* Call Button */}
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
                      <a href="/areas/wandsworth" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Wandsward</a>
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
                  className="text-blue-600 font-medium cursor-pointer"
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
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Showcasing 20+ years of exceptional renovation and refurbishment projects across London's finest neighborhoods</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image}
                  alt={`${project.title} - ${project.location} renovation project by Brent Contractors London`}
                  className="h-64 w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-map-pin-line mr-2"></i>
                    {project.location}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <i className="ri-check-line text-blue-600 mr-2 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Let us transform your property with the same attention to detail and quality craftsmanship.</p>
          <button 
            onClick={() => window.location.href = '/#quote-form'}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Your Free Consultation
          </button>
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
              <span>Phone: 07376 719216</span>
              <span>|</span>
              <span>Email: info@brentrenovation.co.uk</span>
              <span>|</span>
              <a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors cursor-pointer">Website Builder</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
