
import { useState } from 'react';

export default function WestminsterAreaPage() {
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
                    <a href="/areas/westminster" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50 font-medium cursor-pointer">Westminster</a>
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
                <a 
                  href="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  Services
                </a>
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Westminster%20London%20iconic%20architecture%20with%20Big%20Ben%20and%20Parliament%20buildings%2C%20prestigious%20residential%20streets%2C%20elegant%20Georgian%20and%20Victorian%20properties%2C%20professional%20photography%2C%20bright%20daylight&width=1920&height=600&seq=westminster-hero&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Refurbishment & Renovation Westminster
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Expert renovation and refurbishment services in Westminster. Serving Mayfair, Belgravia, Pimlico, and all SW1 areas with 20+ years of local expertise.
          </p>
          <button 
            onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Check Your Area
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
            <span className="text-gray-600">Westminster</span>
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
                  Westminster Renovation Specialists
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Westminster represents the heart of London's political and cultural heritage, home to some of the capital's most prestigious residential properties. Our Westminster renovation and refurbishment services combine deep local knowledge with exceptional craftsmanship to transform properties throughout SW1, from the elegant Georgian terraces of Belgravia to the sophisticated apartments of Mayfair. With over 20 years of experience working in Westminster's conservation areas and with listed buildings, we understand the unique planning requirements and architectural sensitivities that define this historic borough.
                </p>

                <img 
                  src="https://readdy.ai/api/search-image?query=Luxury%20Westminster%20property%20renovation%20showing%20elegant%20Georgian%20terrace%20house%20with%20modern%20interior%2C%20period%20features%20preserved%2C%20high-end%20refurbishment%20work%2C%20professional%20construction%20quality&width=800&height=400&seq=westminster-renovation&orientation=landscape"
                  alt="Westminster property renovation London - elegant Georgian terrace with modern interior, preserved period features and high-end refurbishment"
                  className="h-64 w-full object-cover object-top rounded-lg mb-8"
                />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Local Knowledge & Planning Expertise
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Westminster's rich architectural heritage requires specialist knowledge of conservation area regulations, listed building consent procedures, and Westminster City Council planning requirements. Our team maintains close relationships with local planning officers and heritage consultants, ensuring every renovation project complies with strict conservation guidelines while achieving your vision for modern living. From basement excavations in Belgravia to penthouse refurbishments overlooking Hyde Park, we navigate the complex approval processes with expertise gained through decades of local experience.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Westminster Neighborhoods We Serve</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Mayfair &amp; Marylebone</li>
                      <li>• Belgravia &amp; Pimlico</li>
                      <li>• St. James's &amp; Westminster</li>
                      <li>• Fitzrovia &amp; Bloomsbury</li>
                    </ul>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Covent Garden &amp; Holborn</li>
                      <li>• Victoria &amp; Vauxhall</li>
                      <li>• Paddington &amp; Bayswater</li>
                      <li>• All SW1, W1, WC1, WC2 areas</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Specialized Westminster Services
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Period Property Restoration
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Expert restoration of Georgian, Victorian, and Edwardian properties throughout Westminster, 
                      preserving original features while integrating modern amenities.
                    </p>
                    <a href="/services/period-restoration" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Luxury Refurbishment
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Complete property refurbishment services for Westminster's premium residential market, 
                      from concept to completion with white-glove service.
                    </p>
                    <a href="/services/property-refurbishment" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Kitchen &amp; Bathroom Design
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Bespoke kitchen and bathroom renovation designed for Westminster properties, 
                      combining luxury finishes with practical functionality.
                    </p>
                    <a href="/services/kitchen-renovation" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Basement Conversions
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Specialist basement excavation and conversion services, maximizing space in 
                      Westminster properties while maintaining structural integrity.
                    </p>
                    <a href="/services/house-extensions" className="text-blue-600 hover:text-blue-700 cursor-pointer">Learn More →</a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Local Westminster Experts
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Working in Westminster requires more than construction expertise – it demands understanding of the borough's unique character, planning constraints, and quality expectations. Our Westminster-focused approach ensures every project respects the area's heritage while delivering the luxury standards expected by discerning residents. We coordinate with specialist suppliers, heritage consultants, and approved contractors to maintain the highest standards throughout your renovation journey.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Westminster City Council approved contractors</li>
                  <li>Conservation area and listed building specialists</li>
                  <li>Established relationships with local suppliers</li>
                  <li>Understanding of Westminster's unique planning requirements</li>
                  <li>Experience with high-value property renovations</li>
                  <li>Discretion and professionalism for prestigious addresses</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Quote Form */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Get Your Westminster Quote</h3>
                <p className="mb-4">Free consultation for your Westminster renovation project</p>
                <button 
                  onClick={() => document.querySelector('#consultation-iframe')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Free Consultation
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Westminster Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-phone-line text-blue-600 mr-3"></i>
                    <span>07597098565</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-blue-600 mr-3"></i>
                    <span>westminster@brentcontractors.co.uk</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-blue-600 mr-3"></i>
                    <span>Serving all SW1, W1, WC areas</span>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Westminster Services</h3>
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
            Recent Westminster Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Georgian Terrace Restoration",
                location: "Belgravia, SW1",
                description: "Complete restoration preserving period features while adding modern luxury amenities",
                image: "https://readdy.ai/api/search-image?query=Elegant%20Georgian%20terrace%20house%20restoration%20in%20Belgravia%20Westminster%2C%20period%20features%20preserved%2C%20luxury%20modern%20interior%2C%20professional%20renovation%20photography%2C%20high-end%20finishes&width=400&height=300&seq=westminster-project-1&orientation=landscape"
              },
              {
                title: "Mayfair Apartment Refurbishment",
                location: "Mayfair, W1",
                description: "Luxury apartment renovation with bespoke kitchen and marble bathrooms",
                image: "https://readdy.ai/api/search-image?query=Luxury%20Mayfair%20apartment%20refurbishment%20with%20modern%20kitchen%20and%20marble%20bathroom%2C%20contemporary%20interior%20design%2C%20high-end%20residential%20renovation%2C%20professional%20photography&width=400&height=300&seq=westminster-project-2&orientation=landscape"
              },
              {
                title: "Victorian House Renovation",
                location: "Pimlico, SW1",
                description: "Full house renovation combining period charm with contemporary living spaces",
                image: "https://readdy.ai/api/search-image?query=Victorian%20house%20renovation%20in%20Pimlico%20Westminster%2C%20period%20property%20restoration%2C%20modern%20interior%20with%20original%20features%2C%20professional%20construction%20finish&width=400&height=300&seq=westminster-project-3&orientation=landscape"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} Westminster London - ${project.description}`}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Westminster Consultation</h2>
            <p className="text-xl text-gray-600">Expert renovation advice for your Westminster property</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="mb-8">
              <i className="ri-phone-line text-6xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Westminster Project?</h3>
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
                <li><a href="/services/bathroom-renovishment" className="hover:text-white transition-colors cursor-pointer">Bathroom Renovation</a></li>
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

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Westminster Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact us today for expert renovation services in Westminster
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
