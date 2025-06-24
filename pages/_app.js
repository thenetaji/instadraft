import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      {/* Main content area */}
      <main className="container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
