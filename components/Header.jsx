import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { 
  Moon, 
  Sun, 
  FileText, 
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${
          scrolled 
            ? "bg-white/80 dark:bg-gray-950/90 shadow-md" 
            : "bg-white dark:bg-gray-950"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Area */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center gap-2 group"
              >
                <div className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden shadow-md">
                  <FileText className="h-3.5 w-3.5 md:h-4 md:w-4 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                  Instadraft
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How it Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <div className="relative group">
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#templates" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Templates</a>
                  <a href="#guides" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Guides</a>
                  <a href="#support" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Support</a>
                </div>
              </div>
            </nav>

            {/* Right Side Items */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all overflow-hidden"
                  aria-label="Toggle theme"
                >
                  <Sun className={`h-4 w-4 text-amber-500 absolute transition-all duration-300 ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                  <Moon className={`h-4 w-4 text-blue-400 absolute transition-all duration-300 ${theme !== 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                </button>
              )}

              {/* CTA Button - hidden on very small screens */}
              <Button 
                className="hidden sm:flex relative overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 rounded-lg font-medium px-3 py-1.5 sm:px-4 md:px-5 h-8 sm:h-9 md:h-10 transition-all duration-300 group"
              >
                <Link href={"/create"}>
                <span className="relative z-10 text-xs sm:text-sm md:text-base whitespace-nowrap">Start Agreement</span>
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute left-0 w-8 h-32 -mt-16 rotate-12 bg-white opacity-10 group-hover:translate-x-[250px] transition-all duration-1000 ease-linear"></div>
              </Link>
              </Button>

              {/* Mobile menu button */}
              <button 
                className="rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-gray-900/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed right-0 top-16 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl p-5 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition-colors px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Features</a>
              <a href="#how-it-works" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition-colors px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">How it Works</a>
              <a href="#pricing" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition-colors px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Pricing</a>
              
              <div className="py-2">
                <div className="flex items-center justify-between px-2 py-2 text-gray-900 dark:text-gray-100 font-medium text-lg">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-2 space-y-2 mt-1">
                  <a href="#templates" className="block px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Templates</a>
                  <a href="#guides" className="block px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Guides</a>
                  <a href="#support" className="block px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Support</a>
                </div>
              </div>
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button 
                className="w-full relative overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 rounded-lg font-medium py-6 transition-all duration-300 group text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Start Agreement</span>
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute left-0 w-8 h-32 -mt-16 rotate-12 bg-white opacity-10 group-hover:translate-x-[250px] transition-all duration-1000 ease-linear"></div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper component for nav links with animation
function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-200"></span>
    </a>
  );
}