import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "../../../utils";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  FileText, 
  HelpCircle, 
  Phone,
  Globe,
  ChevronDown
} from "lucide-react";

const navigationItems = [
  {
    title: "בית",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "אודות",
    url: createPageUrl("About"),
    icon: User,
  },
  {
    title: "בלוג",
    url: createPageUrl("Blog"),
    icon: FileText,
  },
  {
    title: "שאלות נפוצות",
    url: createPageUrl("FAQ"),
    icon: HelpCircle,
  },
  {
    title: "צור קשר",
    url: createPageUrl("Contact"),
    icon: Phone,
  },
];

export default function WebWayLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      <style>{`
        :root {
          --main: #1d1e3d;
          --mainDark: #191923;
          --mainLight: #5b5d6e;
          --text: #FFFFFF;
          --primary: #e5e5ff;
          --secondary: #c7b7ff;
          --title: #e5e5ff;
          --subtitle: #c7b7ff;
          --tagline: #d6d4ff;
          --dark-purple: #4b427d;
          --feature-bg: rgba(255, 255, 255, 0.05);
          --feature-border: rgba(255, 255, 255, 0.1);
          --cta-bg: linear-gradient(135deg, #231e38, #2e255e);
          --section-title: #e5e5ff;
          --cta-title: #f0f0ff;
          --cta-text: #cfc8ff;
          --footer-text: #9a96bc;
          --footer-border: rgba(255, 255, 255, 0.1);
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Rubik', sans-serif;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1a1333 0%, #2c235a 100%);
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .glass-nav {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .interactive-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .interactive-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Navigation */}
      <nav className="glass-nav fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WebWay</h1>
              <p className="text-xs text-gray-500">דרכך לעולם הדיגיטלי</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.url
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.url
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">WebWay</h3>
              </div>
              <p className="text-gray-400">
                דרכך לעולם הדיגיטלי - פתרונות שיווק מתקדמים
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">פרטי יצירת קשר</h4>
              <div className="space-y-2 text-gray-400">
                <p>אימייל: hello@webway.com</p>
                <p>טלפון: 972+-XX-XXX-XXXX</p>
                <p>שעות פעילות: ראשון-חמישי, 9:00-18:00</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">עדכונים</h4>
              <p className="text-gray-400 mb-4">
                הירשם לעדכונים שבועיים על חדשות שיווק דיגיטלי
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="כתובת המייל שלך"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  הרשמה
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WebWay. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}