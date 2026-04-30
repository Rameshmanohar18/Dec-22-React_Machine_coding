// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PremiumDashboardLayout({ children, title }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-lg text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">React Lab</h2>

        <nav className="space-y-4">
          <a href="/Counter" target="_blank" className="block hover:text-yellow-300">Counter</a>
          <a href="/DataFetcher" target="_blank" className="block hover:text-yellow-300">Data Fetcher</a>
          <a href="/FormHandling" target="_blank" className="block hover:text-yellow-300">Forms</a>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/30"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>

        {/* Page Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
}

export default PremiumDashboardLayout;