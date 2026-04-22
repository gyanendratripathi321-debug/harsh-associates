import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          alt="Construction and Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/75 to-[#0d1f3c]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-[#c9971c]" />
            <span className="text-[#c9971c] text-sm font-semibold tracking-[0.2em] uppercase">
              Trusted Since Day One
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Building Dreams,{' '}
            <span className="text-[#c9971c]">Creating</span> Spaces
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            We are a trusted name in civil construction and interior design services, delivering
            high-quality projects with precision, durability and modern aesthetics. From residential
            homes to commercial spaces, we turn your vision into reality.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {['Quality Materials', 'On-Time Delivery', 'Affordable Pricing'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#c9971c]" />
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c9971c] text-white px-7 py-3.5 rounded font-semibold hover:bg-[#b5861a] transition-all duration-200 hover:gap-3"
            >
              Get Free Consultation <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded font-semibold hover:border-[#c9971c] hover:text-[#c9971c] transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0d1f3c]/95 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '10+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Expert Team Members' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#c9971c]">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
