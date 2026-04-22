import { Home, Building, Layers, Wrench, Briefcase, Palette, ChefHat, Monitor, Lightbulb, Sofa } from 'lucide-react';

const civil = [
  { icon: Home, label: 'Residential House Construction' },
  { icon: Building, label: 'Building Construction (Residential & Commercial)' },
  { icon: Layers, label: 'RCC Structure Work' },
  { icon: Wrench, label: 'Renovation and Remodeling' },
  { icon: Briefcase, label: 'Turnkey Projects' },
];

const interior = [
  { icon: Palette, label: 'Home Interior Design' },
  { icon: ChefHat, label: 'Modular Kitchen Design' },
  { icon: Monitor, label: 'Office Interior Solutions' },
  { icon: Lightbulb, label: 'False Ceiling and Lighting' },
  { icon: Sofa, label: 'Furniture and Décor Planning' },
];

function ServiceCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#c9971c]/40 hover:shadow-md transition-all duration-200 group">
      <div className="w-10 h-10 flex-shrink-0 bg-[#c9971c]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9971c] transition-colors duration-200">
        <Icon size={18} className="text-[#c9971c] group-hover:text-white transition-colors duration-200" />
      </div>
      <span className="text-gray-700 text-sm font-medium">{label}</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#c9971c]" />
            <span className="text-[#c9971c] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
            <div className="h-px w-10 bg-[#c9971c]" />
          </div>
          <h2 className="text-4xl font-bold text-[#0d1f3c]">Our Services</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Comprehensive construction and design solutions tailored to your needs — from structural work to stunning interiors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Civil Construction */}
          <div className="bg-gradient-to-br from-[#0d1f3c] to-[#163055] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#c9971c] p-2.5 rounded-lg">
                <Building size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Civil Construction</h3>
                <p className="text-blue-200 text-xs mt-0.5">Built to last, built with care</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden mb-6 h-48">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                alt="Civil Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0d1f3c]/30" />
            </div>
            <div className="flex flex-col gap-3">
              {civil.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon size={15} className="text-[#c9971c]" />
                  </div>
                  <span className="text-gray-200 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interior Design */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#c9971c] p-2.5 rounded-lg">
                <Palette size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d1f3c]">Interior Design</h3>
                <p className="text-gray-400 text-xs mt-0.5">Spaces that reflect your style</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden mb-6 h-48">
              <img
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0d1f3c]/10" />
            </div>
            <div className="flex flex-col gap-3">
              {interior.map((item) => (
                <ServiceCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
