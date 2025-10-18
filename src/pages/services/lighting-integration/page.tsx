
import { useState } from 'react';

export default function LightingIntegrationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: 'lighting-integration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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

      const response = await fetch(
        'https://readdy.ai/api/form/d3mv6tv68806cmb3n5cg',
        {
          method: 'POST',
          body: new URLSearchParams(formDataToSubmit as any)
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          postcode: '',
          service: 'lighting-integration',
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
              <span className="text-xl font-bold text-gray-900">
                Brent Renovation
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Home
              </a>

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
                      href="/services/bathroom-renovation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Bathroom Renovation
                    </a>
                    <a
                      href="/services/luxury-wall-floor-finishes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Luxury Wall &amp; Floor Finishes
                    </a>
                    <a
                      href="/services/interior-refurbishment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Interior Refurbishment
                    </a>
                    <a
                      href="/services/lighting-integration"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer"
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
                      href="/areas/wandsworth"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      Wandsworth
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
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

              <a
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Contact
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector('#quote-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
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
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}
              ></i>
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
                    Services{' '}
                    <i
                      className={`ri-arrow-${isServicesOpen ? 'up' : 'down'}-s-line`}
                    ></i>
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="/services/property-refurbishment"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Property Refurbishment
                      </a>
                      <a
                        href="/services/period-restoration"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Period Restoration
                      </a>
                      <a
                        href="/services/kitchen-renovation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Kitchen Renovation
                      </a>
                      <a
                        href="/services/bathroom-renovation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Bathroom Renovation
                      </a>
                      <a
                        href="/services/luxury-wall-floor-finishes"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Luxury Wall &amp; Floor Finishes
                      </a>
                      <a
                        href="/services/interior-refurbishment"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Interior Refurbishment
                      </a>
                      <a
                        href="/services/lighting-integration"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                      >
                        Lighting Integration
                      </a>
                      <a
                        href="/services/window-installation"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Window Installation
                      </a>
                      <a
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                      >
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
                    Areas{' '}
                    <i
                      className={`ri-arrow-${isAreasOpen ? 'up' : 'down'}-s-line`}
                    ></i>
                  </button>
                  {isAreasOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="/areas/westminster"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Westminster
                      </a>
                      <a
                        href="/areas/kensington-chelsea"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Kensington &amp; Chelsea
                      </a>
                      <a
                        href="/areas/camden"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Camden
                      </a>
                      <a
                        href="/areas/islington"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Islington
                      </a>
                      <a
                        href="/areas/hammersmith-fulham"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Hammersmith &amp; Fulham
                      </a>
                      <a
                        href="/areas/wandsworth"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Wandsworth
                      </a>
                      <a
                        href="/areas/richmond"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Richmond
                      </a>
                      <a
                        href="/areas/brent"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Brent
                      </a>
                      <a
                        href="/areas/harrow"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Harrow
                      </a>
                      <a
                        href="/areas/ealing"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Ealing
                      </a>
                      <a
                        href="/areas/barnet"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Barnet
                      </a>
                      <a
                        href="/areas/central-london"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        Central London
                      </a>
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
                    document
                      .querySelector('#quote-form')
                      ?.scrollIntoView({ behavior: 'smooth' });
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
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Smart Lighting Integration
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your property with intelligent lighting systems.
                From architectural LED installations to smart home automation,
                we create the perfect ambiance for every space across London.
              </p>
              <button
                onClick={() =>
                  document
                    .querySelector('#quote-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20smart%20lighting%20system%20showing%20LED%20strip%20lights%2C%20architectural%20lighting%20design%2C%20contemporary%20interior%20with%20automated%20lighting%20controls%2C%20elegant%20residential%20lighting%20installation%2C%20warm%20ambient%20lighting&width=600&height=400&seq=lighting-hero&orientation=landscape')`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Illuminate Your Space?</h2>
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lighting Solutions We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional lighting design and installation for every room and
              requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Home Lighting
              </h3>
              <p className="text-gray-600">
                Automated lighting systems with smartphone control, voice
                activation, and programmable scenes for ultimate convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Architectural Lighting
              </h3>
              <p className="text-gray-600">
                LED strip lighting, cove lighting, and accent lighting to highlight
                architectural features and create stunning visual effects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-restaurant-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kitchen Lighting
              </h3>
              <p className="text-gray-600">
                Under-cabinet LED strips, pendant lights, and task lighting for
                functional and beautiful kitchen illumination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-drop-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bathroom Lighting
              </h3>
              <p className="text-gray-600">
                IP-rated LED downlights, mirror lighting, and mood lighting for
                safe and luxurious bathroom environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-sun-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Outdoor Lighting
              </h3>
              <p className="text-gray-600">
                Garden lighting, security lighting, and facade illumination to
                enhance your property's exterior appeal and safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lighting Controls
              </h3>
              <p className="text-gray-600">
                Dimmer switches, motion sensors, and smart control systems for
                energy efficiency and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Lighting Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Latest technology for intelligent, energy-efficient lighting
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">App Control</h3>
              <p className="text-gray-600">
                Control all lights from your smartphone with custom scenes and
                schedules
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mic-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Control</h3>
              <p className="text-gray-600">
                Compatible with Alexa, Google Home, and Siri for hands‑free
                operation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Energy Efficient
              </h3>
              <p className="text-gray-600">
                LED technology reduces energy consumption by up to 80%
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Automated Scheduling
              </h3>
              <p className="text-gray-600">
                Lights automatically adjust based on time of day and occupancy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Lighting Projects
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our smart lighting installations across London
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20kitchen%20with%20under%20cabinet%20LED%20lighting%20and%20pendant%20lights%2C%20contemporary%20lighting%20design%2C%20smart%20home%20lighting%20system%2C%20professional%20interior%20photography&width=400&height=400&seq=kitchen-lighting-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Smart Kitchen Lighting - Westminster
                </h3>
                <p className="text-gray-600">
                  Under-cabinet LEDs with smart dimming and color temperature
                  control
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20living%20room%20with%20architectural%20LED%20strip%20lighting%20and%20smart%20controls%2C%20contemporary%20interior%20lighting%20design%2C%20ambient%20lighting%20system%2C%20professional%20photography&width=400&height=400&seq=living-lighting-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Architectural Lighting - Kensington
                </h3>
                <p className="text-gray-600">
                  LED strip lighting with automated scenes and smartphone control
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20bathroom%20with%20LED%20mirror%20lighting%20and%20ceiling%20downlights%2C%20modern%20bathroom%20lighting%20design%2C%20smart%20lighting%20controls%2C%20professional%20interior%20photography&width=400&height=400&seq=bathroom-lighting-1&orientation=squarish')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Bathroom Lighting - Chelsea
                </h3>
                <p className="text-gray-600">
                  IP-rated LED downlights with mirror illumination and motion
                  sensors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your lighting project and we'll provide expert advice
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            data-readdy-form
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
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
                <label
                  htmlFor="postcode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Postcode *
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your postcode"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                placeholder="Tell us about your lighting requirements, rooms to be lit, smart features needed..."
              ></textarea>
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 mr-2"></i>
                  <span className="text-green-800">
                    Thank you! Your consultation request has been submitted
                    successfully. We'll contact you within 24 hours.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 mr-2"></i>
                  <span className="text-red-800">
                    Sorry, there was an error submitting your request. Please
                    try again or call us directly.
                  </span>
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
                Smart lighting integration and automation systems across London
                with expert installation and support.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/services/property-refurbishment"
                    className="hover:text-white cursor-pointer"
                  >
                    Property Refurbishment
                  </a>
                </li>
                <li>
                  <a
                    href="/services/kitchen-renovation"
                    className="hover:text-white cursor-pointer"
                  >
                    Kitchen Renovation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/bathroom-renovation"
                    className="hover:text-white cursor-pointer"
                  >
                    Bathroom Renovation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/lighting-integration"
                    className="hover:text-white cursor-pointer"
                  >
                    Lighting Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/areas/westminster"
                    className="hover:text-white cursor-pointer"
                  >
                    Westminster
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/kensington-chelsea"
                    className="hover:text-white cursor-pointer"
                  >
                    Kensington &amp; Chelsea
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/camden"
                    className="hover:text-white cursor-pointer"
                  >
                    Camden
                  </a>
                </li>
                <li>
                  <a
                    href="/areas/islington"
                    className="hover:text-white cursor-pointer"
                  >
                    Islington
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>07597098565
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>info@brentcontractors.co.uk
                </li>
                <li className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>London, UK
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
