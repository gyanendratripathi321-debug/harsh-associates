import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
import { supabase } from '../supabaseClient';
=======
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea

const contactDetails = [
  {
    icon: MapPin,
    label: 'Location',
    lines: ['Nandgram, Ghaziabad', 'Uttar Pradesh, India'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 91987 39614', '+91 91125 20369'],
  },
  {
    icon: Mail,
    label: 'Email',
<<<<<<< HEAD
    lines: ['Singhkaushlendra1510@gmail.com'],
=======
    lines: ['Singhaushlendra1510@gmail.com'],
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, service, message } = form;
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, phone, email, service, message }]);
    if (error) {
      console.error('Supabase insert error:', error);
      // you could show an error toast here
    } else {
      setSubmitted(true);
    }
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#c9971c]" />
            <span className="text-[#c9971c] text-sm font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#c9971c]" />
          </div>
          <h2 className="text-4xl font-bold text-[#0d1f3c]">Contact Us</h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto leading-relaxed">
            Ready to start your project? Reach out for a free consultation, site visit, or cost estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#0d1f3c] to-[#163055] rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-2">Reach Us Directly</h3>
              <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                We are available Mon–Sat, 9 AM to 7 PM. Drop us a message and we'll get back to you within 24 hours.
              </p>

              <div className="flex flex-col gap-7">
                {contactDetails.map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 flex-shrink-0 bg-[#c9971c] rounded-lg flex items-center justify-center">
                      <Icon size={19} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[#c9971c] text-xs font-bold tracking-widest uppercase mb-1">{label}</div>
                      {lines.map((line) => (
                        <div key={line} className="text-gray-200 text-sm">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
<<<<<<< HEAD
                <div className="rounded-xl overflow-hidden h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457252.33767122525!2d79.74814436995324!3d26.44657659168699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1776835245521!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>
=======
                <div className="relative rounded-xl overflow-hidden h-44">
                  <img
                    src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
                    alt="Ghaziabad"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 text-[#0d1f3c] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow">
                      <MapPin size={13} className="text-[#c9971c]" />
                      Nandgram, Ghaziabad, UP
                    </div>
                  </div>
                </div>
>>>>>>> a8c26291ced7aab212b9bd02c61b680867931cea
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[#0d1f3c] mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#c9971c] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c9971c] focus:ring-1 focus:ring-[#c9971c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c9971c] focus:ring-1 focus:ring-[#c9971c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c9971c] focus:ring-1 focus:ring-[#c9971c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#c9971c] focus:ring-1 focus:ring-[#c9971c] transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Residential House Construction</option>
                    <option>Commercial Building Construction</option>
                    <option>RCC Structure Work</option>
                    <option>Renovation and Remodeling</option>
                    <option>Turnkey Project</option>
                    <option>Home Interior Design</option>
                    <option>Modular Kitchen Design</option>
                    <option>Office Interior Solutions</option>
                    <option>False Ceiling and Lighting</option>
                    <option>Furniture and Décor Planning</option>
                    <option>Free Site Visit</option>
                    <option>Free Cost Estimate</option>
                    <option>Free Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, location, timeline, or any specific requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c9971c] focus:ring-1 focus:ring-[#c9971c] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#c9971c] text-white py-3.5 rounded-lg font-semibold hover:bg-[#b5861a] transition-colors duration-200"
                >
                  <Send size={17} />
                  Send Message
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Site visit, cost estimate, and design consultation are completely free.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
