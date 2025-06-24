import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  PenTool,
  Lock,
  User,
  CreditCard,
  KeyRound,
  Mail,
  ArrowRight,
  FileDigit,
  Scale,
  Wallet,
  Fingerprint,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <Hero />
      <VisualFlow />
      <FeaturesBenefits />
      <FAQContactSection />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-20 dark:opacity-10 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-3xl -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Optional Badge/Tag */}
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            No paperwork • 100% online • Court valid
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white max-w-3xl mx-auto">
            Create Legally Compliant Rental Agreements in Minutes
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Instadraft lets landlords, PG owners, and tenants generate fully
            legal agreements online — fast, paperless, and court-valid.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-xl text-base sm:text-lg px-8 py-6 h-auto hover:shadow-blue-200 dark:hover:shadow-blue-900/20 transition-all duration-200"
            >
              Start Agreement
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>

          {/* Trust indicators with larger Lucide React icons */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                Legally Valid
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
                <PenTool className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                Digital Signing
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
                <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                Secure eStamp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisualFlow() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Agreement in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From start to finish, create a legally binding rental agreement in
            minutes
          </p>
        </div>

        {/* Step Flow - horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="absolute right-6 top-6 md:right-auto md:top-auto md:relative md:self-end md:mb-4 text-gray-300 dark:text-gray-600 md:group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="h-6 w-6 hidden md:block" />
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-5">
              <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill Details</h3>
            <p className="text-muted-foreground">
              Enter owner & tenant information with guided forms
            </p>
            <div className="mt-4 inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
              Step 1
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="absolute right-6 top-6 md:right-auto md:top-auto md:relative md:self-end md:mb-4 text-gray-300 dark:text-gray-600 md:group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="h-6 w-6 hidden md:block" />
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-5">
              <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
            <p className="text-muted-foreground">
              Secure payment with multiple options available
            </p>
            <div className="mt-4 inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
              Step 2
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="absolute right-6 top-6 md:right-auto md:top-auto md:relative md:self-end md:mb-4 text-gray-300 dark:text-gray-600 md:group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="h-6 w-6 hidden md:block" />
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-5">
              <KeyRound className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Signing</h3>
            <p className="text-muted-foreground">
              Sign with Aadhaar OTP verification - legally binding
            </p>
            <div className="mt-4 inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
              Step 3
            </div>
          </div>

          {/* Step 4 */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full mb-5">
              <Mail className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Agreement</h3>
            <p className="text-muted-foreground">
              Receive via Email & WhatsApp instantly
            </p>
            <div className="mt-4 inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
              Step 4
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            The entire process takes less than 10 minutes
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors">
            Start Creating Agreement
          </button>
        </div>
      </div>
    </section>
  );
}

export function FeaturesBenefits() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Get Hassle-Free Legal Paperwork
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything you need to create legally binding rental agreements without the complexity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature 1: Digital Process */}
          <Card className="overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FileDigit className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Completely Digital Process</h3>
                <p className="text-muted-foreground">
                  Create, sign, and share agreements online without any paperwork or in-person visits. Save time and avoid unnecessary travel.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2: Legally Compliant */}
          <Card className="overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Scale className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Legally Compliant Documents</h3>
                <p className="text-muted-foreground">
                  AI-powered drafting ensures your agreements include all necessary legal clauses and follow latest regulations for court validity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3: Pay-Per-Use */}
          <Card className="overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Wallet className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Pay-Per-Use Pricing</h3>
                <p className="text-muted-foreground">
                  Simple pricing at ₹249–₹299 per agreement with no subscription or hidden fees. Pay only when you need to create a document.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 4: eStamp + Aadhaar eSign */}
          <Card className="overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Fingerprint className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">eStamp + Aadhaar eSign Support</h3>
                <p className="text-muted-foreground">
                  Secure, government-backed digital signatures and stamp papers that provide the same legal validity as physical documents.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of landlords and tenants saving time with digital agreements
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Try Instadraft Now
          </button>
        </div>
      </div>
    </section>
  );
}


export function FAQContactSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container px-4 md:px-6 mx-auto">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about creating rental agreements with Instadraft
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200 dark:border-gray-800">
              <AccordionTrigger className="text-lg font-medium py-5">
                Are these agreements legally valid?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pt-2">
                <p>
                  Yes, all agreements created through Instadraft are 100% legally valid and court-admissible. 
                  We use government-approved eStamp papers and Aadhaar-based eSign technology which is recognized
                  under the IT Act, 2000. Our documents meet all requirements of the Registration Act and Rent Control Acts.
                </p>
                <div className="flex items-center gap-2 mt-3 text-green-600 dark:text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Valid in all Indian courts</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200 dark:border-gray-800">
              <AccordionTrigger className="text-lg font-medium py-5">
                Do I need to visit a registrar office?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pt-2">
                <p>
                  No, the entire process is 100% digital. For lease agreements under 11 months, registration is not 
                  mandatory under Indian law. Our platform creates legally binding rental/lease agreements that don't 
                  require registrar office visits. For agreements longer than 11 months that require registration, 
                  we provide clear guidance on the next steps.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200 dark:border-gray-800">
              <AccordionTrigger className="text-lg font-medium py-5">
                Can I use this for PG or commercial property?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pt-2">
                <p>
                  Absolutely! Instadraft supports multiple agreement types including residential rent agreements, 
                  commercial lease agreements, PG accommodation agreements, and shop rent agreements. Our system 
                  automatically adjusts the legal clauses based on the property type you select to ensure compliance 
                  with specific regulations for each property category.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200 dark:border-gray-800">
              <AccordionTrigger className="text-lg font-medium py-5">
                Is Aadhaar required for both parties?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pt-2">
                <p>
                  For the full digital experience with eSign, yes, both landlord and tenant need Aadhaar cards 
                  linked to their mobile numbers for OTP verification during signing. However, we also offer a 
                  hybrid option where one party can sign digitally while the other can print and sign physically 
                  if Aadhaar is not available. All personal data is encrypted and secured as per UIDAI guidelines.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Us Section */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Still have questions?
            </h2>
            <p className="text-muted-foreground">
              Our team is here to help with any specific queries you might have
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="min-h-[120px]"
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-center sm:text-left">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Email us at</h3>
                <a href="mailto:support@instadraft.com" className="text-blue-600 dark:text-blue-400 font-medium">support@instadraft.com</a>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Call us at</h3>
                <a href="tel:+918800123456" className="text-blue-600 dark:text-blue-400 font-medium">+91 88001 23456</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

