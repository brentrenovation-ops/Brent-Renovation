
import { useState } from 'react';

export default function LuxuryWallFloorFinishesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: 'luxury-wall-floor-finishes',
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
          service: 'luxury-wall-floor-finishes',
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
                    <a href="/services/luxury-wall-floor-finishes" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer">Luxury Wall &amp; Floor Finishes</a>
                    <a href="/services/interior-refurbishment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Interior Refurbishment</a>
                    <a href="/services/lighting-integration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Lighting Integration</a>
                    <a href="/services/window-installation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Window Installation</a>
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
                      <a href="/services/luxury-wall-floor-finishes" onClick={() => setIsMenuOpen(false)} className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Luxury Wall &amp; Floor Finishes</a>
                      <a href="/services/interior-refurbishment" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Interior Refurbishment</a>
                      <a href="/services/lighting-integration" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Lighting Integration</a>
                      <a href="/services/window-installation" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Window Installation</a>
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
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Luxury Wall &amp; Floor Finishes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your property with premium wall and floor finishes. From marble and hardwood to designer tiles and stone surfaces, we deliver exceptional craftsmanship across London.
              </p>
              <button 
                onClick={() => document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20interior%20showing%20premium%20marble%20wall%20finishes%20and%20hardwood%20flooring%2C%20elegant%20residential%20space%20with%20high-end%20materials%2C%20sophisticated%20textures%2C%20professional%20interior%20design%20photography%2C%20warm%20lighting&width=600&height=400&seq=luxury-finishes-hero&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Finishes We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert installation of luxury materials with meticulous attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-layout-grid-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marble &amp; Natural Stone</h3>
              <p className="text-gray-600">Premium marble, granite, and natural stone installations for walls and floors. Carrara, Calacatta, and bespoke stone selections.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tree-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hardwood Flooring</h3>
              <p className="text-gray-600">Solid and engineered hardwood flooring in oak, walnut, cherry, and exotic woods. Professional sanding and finishing services.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-square-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Designer Tiles</h3>
              <p className="text-gray-600">Porcelain, ceramic, and mosaic tiles from leading designers. Large format tiles, subway tiles, and custom patterns.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-paint-brush-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Wall Coverings</h3>
              <p className="text-gray-600">Premium wallpapers, fabric wall coverings, and textured finishes. Venetian plaster and decorative paint techniques.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-stack-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Vinyl &amp; Laminate</h3>
              <p className="text-gray-600">High-end luxury vinyl planks and premium laminate flooring. Waterproof options with realistic wood and stone textures.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tools-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Finishes</h3>
              <p className="text-gray-600">Bespoke finishes tailored to your vision. Micro-cement, resin floors, and specialty decorative treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional approach ensuring perfect results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation &amp; Design</h3>
              <p className="text-gray-600">Site survey and material selection with expert design advice</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Surface Preparation</h3>
              <p className="text-gray-600">Professional preparation ensuring perfect adhesion and finish</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Skilled craftsmen install materials with precision and care</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Finishing</h3>
              <p className="text-gray-600">Final inspection and protective treatments for lasting beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-gray-600">Showcasing our luxury wall and floor installations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20marble%20bathroom%20with%20Carrara%20marble%20walls%20and%20floors%2C%20elegant%20residential%20bathroom%20renovation%2C%20premium%20stone%20finishes%2C%20professional%20photography%2C%20sophisticated%20design&width=400&height=400&seq=marble-project-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carrara Marble Bathroom - Kensington</h3>
                <p className="text-gray-600">Complete marble installation with matching floor and wall tiles</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20hardwood%20flooring%20installation%20showing%20oak%20parquet%20floors%20in%20elegant%20living%20room%2C%20premium%20wood%20finishes%2C%20residential%20interior%2C%20professional%20photography&width=400&height=400&seq=hardwood-project-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oak Parquet Flooring - Westminster</h3>
                <p className="text-gray-600">Traditional parquet pattern in premium European oak</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Designer%20tile%20installation%20showing%20large%20format%20porcelain%20tiles%20in%20modern%20kitchen%2C%20contemporary%20tile%20work%2C%20luxury%20residential%20interior%2C%20professional%20photography&width=400&height=400&seq=tile-project-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Designer Tile Kitchen - Chelsea</h3>
                <p className="text-gray-600">Large format porcelain tiles with seamless installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h2>
            <p className="text-xl text-gray-600">Tell us about your luxury finishes project and we'll provide expert advice</p>
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                placeholder="Tell us about your wall and floor finishes requirements, preferred materials, room details..."
              ></textarea>
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 mr-2"></i>
                  <span className="text-green-800">Thank you! Your consultation request has been submitted successfully. We'll contact you within 24 hours.</span>
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
              {isSubmitting ? 'Submitting...' : 'Get My Free Consultation'}
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for Luxury Finishes?</h2>
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
                <span className="text-xl font-bold">Brent Renovation</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium luxury wall and floor finishes across London with expert craftsmanship and attention to detail.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/property-refurbishment" className="hover:text-white cursor-pointer">Property Refurbishment</a></li>
                <li><a href="/services/kitchen-renovation" className="hover:text-white cursor-pointer">Kitchen Renovation</a></li>
                <li><a href="/services/bathroom-renovation" className="hover:text-white cursor-pointer">Bathroom Renovation</a></li>
                <li><a href="/services/luxury-wall-floor-finishes" className="hover:text-white cursor-pointer">Luxury Wall &amp; Floor Finishes</a></li>
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

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>&copy; 2024 Luxury Refurbishments. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
