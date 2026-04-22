import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const civilServices = [
  'Residential House Construction',
  'Commercial Building',
  'RCC Structure Work',
  'Renovation & Remodeling',
  'Turnkey Projects',
];

const interiorServices = [
  'Home Interior Design',
  'Modular Kitchen',
  'Office Interior',
  'False Ceiling & Lighting',
  'Furniture & Décor',
];

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#c9971c] p-2 rounded">
                <Building2 size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base tracking-widest">HARSH</div>
                <div className="text-[#c9971c] text-[9px] tracking-[0.3em]">ASSOCIATES</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Trusted civil construction and interior design firm based in Ghaziabad, delivering quality
              and craftsmanship since day one.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+919198739614" className="flex items-center gap-2 hover:text-[#c9971c] transition-colors">
                <Phone size={14} className="text-[#c9971c]" />
                +91 91987 39614
              </a>
              <a href="mailto:Singhaushlendra1510@gmail.com" className="flex items-center gap-2 hover:text-[#c9971c] transition-colors break-all">
                <Mail size={14} className="text-[#c9971c]" />
<<<<<<< HEAD
                Singhkaushlendra1510@gmail.com
=======
                Singhaushlendra1510@gmail.com
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c9971c] flex-shrink-0 mt-0.5" />
                Nandgram, Ghaziabad, UP
              </div>
            </div>
          </div>

          {/* Civil Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Civil Construction</h4>
            <ul className="flex flex-col gap-2.5">
              {civilServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-[#c9971c] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c9971c] flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Interior Design</h4>
            <ul className="flex flex-col gap-2.5">
              {interiorServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-[#c9971c] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c9971c] flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Services CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Free Services</h4>
            <div className="bg-[#c9971c]/10 border border-[#c9971c]/20 rounded-xl p-5">
              <p className="text-sm mb-4 leading-relaxed">
                Get a free site visit, cost estimate, or design consultation — no strings attached.
              </p>
              <ul className="flex flex-col gap-2 mb-5 text-sm">
                {['Site Visit', 'Cost Estimate', 'Design Consultation'].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-white/80">
                    <span className="w-4 h-4 rounded-full bg-[#c9971c] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-[#c9971c] text-white text-sm py-2.5 rounded-lg font-semibold hover:bg-[#b5861a] transition-colors"
              >
                Book Now — It's Free
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Harsh Associates Construction & Interior Design. All rights reserved.</p>
          <p>Nandgram, Ghaziabad, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
