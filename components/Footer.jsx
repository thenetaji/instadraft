export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2025 Instadraft. All rights reserved.
          </div>
          
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            <a 
              href="/terms" 
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}