import { Award, Users, Clock, Shield } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality First', desc: 'We use only premium construction materials and proven techniques.' },
  { icon: Users, title: 'Expert Team', desc: 'Experienced engineers, designers, and skilled craftsmen.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'We respect your time and always deliver projects on schedule.' },
  { icon: Shield, title: 'Trusted Partner', desc: 'Years of trust built through transparency and excellence.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Our Team"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#0d1f3c] text-white p-8 rounded-xl shadow-xl w-48 text-center">
              <div className="text-4xl font-bold text-[#c9971c]">10+</div>
              <div className="text-sm mt-1 text-gray-300">Years of Excellence</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-[#c9971c]" />
              <span className="text-[#c9971c] text-sm font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#0d1f3c] leading-tight mb-6">
              Crafting Excellence in Every Structure
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are a team of experienced engineers, designers, and skilled professionals specializing
              in construction and interior solutions. With years of experience in the industry, we focus
              on quality workmanship, timely delivery, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              From the foundation to the finishing touches, Harsh Associates is your single destination
              for civil construction and beautiful interior design — serving Ghaziabad and the broader
              Uttar Pradesh region.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c9971c]/10 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-[#c9971c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d1f3c] text-sm">{title}</div>
                    <div className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
