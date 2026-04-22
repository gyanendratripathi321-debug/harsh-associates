import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { LogOut, Loader2, Calendar, Phone, Mail, FolderHeart, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface Submission {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err: any) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please ensure the database table exists.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/admin');
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', month: 'short', day: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-[#c9971c] p-2 rounded text-white font-bold text-lg leading-none">
            HA
          </div>
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Admin Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 font-medium transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Inquiries</h2>
            <p className="text-gray-500">Manage client contact submissions and requests.</p>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg px-4 py-2">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total</span>
            <div className="text-2xl font-bold text-[#c9971c]">{submissions.length}</div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-md">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <Loader2 size={40} className="animate-spin mb-4 text-[#c9971c]" />
            <p>Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <FolderHeart size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No submissions yet</h3>
            <p className="text-gray-500">When clients contact you, their details will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {submissions.map((sub, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={sub.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all group"
              >
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#fcf8f0] flex items-center justify-center text-[#c9971c] font-bold">
                      {sub.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{sub.name}</h3>
                      <div className="flex items-center text-xs text-gray-400 mt-0.5">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(sub.created_at)}
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#fcf8f0] text-[#c9971c]">
                    New
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-start text-sm text-gray-600">
                    <FolderHeart size={16} className="mr-3 mt-0.5 text-gray-400 shrink-0" />
                    <span className="font-medium text-gray-800">{sub.service}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-3 text-gray-400 shrink-0" />
                    <a href={`tel:${sub.phone}`} className="hover:text-[#c9971c] transition-colors">{sub.phone}</a>
                  </div>
                  {sub.email && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={16} className="mr-3 text-gray-400 shrink-0" />
                      <a href={`mailto:${sub.email}`} className="hover:text-[#c9971c] transition-colors">{sub.email}</a>
                    </div>
                  )}
                </div>

                {sub.message && (
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 italic border border-gray-100 relative">
                    <MessageSquare size={14} className="absolute top-4 left-4 text-gray-300" />
                    <p className="pl-6">{sub.message}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
