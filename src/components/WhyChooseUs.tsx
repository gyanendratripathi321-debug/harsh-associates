<<<<<<< HEAD
import { CheckCircle2, MapPin, Phone, Star } from 'lucide-react';
=======
import { CheckCircle2, MapPin, Phone, Mail, Star } from 'lucide-react';
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea

const reasons = [
  { title: 'Quality Construction Materials', desc: 'We source premium-grade materials from certified suppliers to ensure longevity and strength.' },
  { title: 'Experienced Team', desc: 'Our engineers, architects and designers bring decades of combined expertise to every project.' },
  { title: 'On-Time Project Delivery', desc: 'We plan meticulously and execute efficiently, so your project is never delayed.' },
  { title: 'Affordable Pricing', desc: 'Transparent, competitive pricing with no hidden costs — quality you can afford.' },
  { title: 'Customized Designs', desc: 'Every space is unique. We tailor our designs to perfectly match your vision and lifestyle.' },
];

const freeServices = [
  { icon: MapPin, title: 'Site Visit', desc: 'Our experts visit your site at no cost to assess and plan.' },
  { icon: Star, title: 'Cost Estimate', desc: 'Receive a detailed, accurate project estimate completely free.' },
  { icon: Phone, title: 'Design Consultation', desc: 'Consult with our design team to explore possibilities for your space.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#c9971c]" />
            <span className="text-[#c9971c] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Advantage
            </span>
            <div className="h-px w-10 bg-[#c9971c]" />
          </div>
          <h2 className="text-4xl font-bold text-[#0d1f3c]">Why Choose Us</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            We bring together expertise, integrity, and passion to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
                alt="Quality Work"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute top-6 -right-6 bg-[#c9971c] text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-xs mt-0.5 text-amber-100">Happy Clients</div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {reasons.map(({ title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#c9971c]/30 hover:bg-amber-50/30 transition-all duration-200 group"
              >
                <CheckCircle2
                  size={22}
                  className="flex-shrink-0 text-[#c9971c] mt-0.5"
                />
                <div>
                  <div className="font-semibold text-[#0d1f3c]">{title}</div>
                  <div className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Services */}
        <div className="bg-gradient-to-br from-[#0d1f3c] to-[#163055] rounded-2xl p-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Our Free Services</h3>
            <p className="text-blue-200 mt-2 text-sm">Get started at absolutely no cost</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {freeServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors duration-200"
              >
                <div className="w-14 h-14 bg-[#c9971c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-white text-lg">{title}</h4>
                <p className="text-blue-200 text-sm mt-2 leading-relaxed">{desc}</p>
                <div className="mt-4 inline-block bg-[#c9971c]/20 text-[#c9971c] text-xs font-bold px-3 py-1 rounded-full border border-[#c9971c]/30">
                  100% FREE
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-[#c9971c] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#b5861a] transition-colors duration-200"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
