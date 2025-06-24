import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
  Loader2,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Lock,
  ChevronRight,
  FileText,
  Download,
} from "lucide-react";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";

export default function Task() {
  const [step, setStep] = useState(1);

  const [ownerInfo, setOwnerInfo] = useState({});
  const [tenantInfo, setTenantInfo] = useState({});
  const [agreementDetails, setAgreementDetails] = useState({});

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {step === 1 && (
        <OwnerDetailsForm
          data={ownerInfo}
          onNext={(data) => {
            setOwnerInfo(data);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <TenantDetailsForm
          data={tenantInfo}
          onNext={(data) => {
            setTenantInfo(data);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <AgreementDetailsForm
          data={agreementDetails}
          onNext={(data) => {
            setAgreementDetails(data);
            setStep(4);
          }}
          onBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <AgreementSummary
          ownerInfo={ownerInfo}
          tenantInfo={tenantInfo}
          agreementDetails={agreementDetails}
          onConfirm={() => setStep(5)}
          onBack={() => setStep(3)}
        />
      )}

      {step === 5 && (
        <AadhaarOTPVerification
          onVerified={() => setStep(6)}
          onBack={() => setStep(4)}
        />
      )}

      {step === 6 && <AgreementSuccess />}
    </div>
  );
}

export function OwnerDetailsForm({ data = {}, onNext }) {
  const limitedStates = ["Delhi", "Telangana", "Maharashtra"];
  const [form, setForm] = useState({
    fullName: data.fullName || "",
    mobileNumber: data.mobileNumber || "",
    aadhaarNumber: data.aadhaarNumber || "",
    email: data.email || "",
    address: data.address || "",
    state: data.state || "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: add validation
    onNext(form);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Owner Details</CardTitle>
        <CardDescription className="text-center">
          Enter the property owner's information for the rental agreement
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="As per legal documents"
                className="h-10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number <span className="text-red-500">*</span></Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 dark:bg-gray-800 border border-r-0 border-gray-300 dark:border-gray-700 rounded-l-md text-gray-500 dark:text-gray-400">+91</span>
                <Input
                  id="mobileNumber"
                  value={form.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  placeholder="10 digit mobile number"
                  className="h-10 rounded-l-none"
                  maxLength={10}
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="aadhaarNumber">Aadhaar Number <span className="text-xs text-gray-500 font-normal">(Optional)</span></Label>
              <Input
                id="aadhaarNumber"
                value={form.aadhaarNumber}
                onChange={(e) => handleChange("aadhaarNumber", e.target.value)}
                placeholder="XXXX XXXX XXXX"
                className="h-10"
                maxLength={14}
                type="text"
              />
              <p className="text-xs text-muted-foreground">
                Used only for eSign, won't be shared
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                className="h-10"
                required
                type="email"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
              <Textarea
                id="address"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Enter your permanent address"
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
              <Select
                value={form.state}
                onValueChange={(value) => handleChange("state", value)}
              >
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {limitedStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <CardFooter className="flex justify-end pt-6">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8">
              Save & Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}


export function TenantDetailsForm({ data = {}, onNext, onBack }) {
  const [form, setForm] = useState({
    fullName: data.fullName || "",
    mobileNumber: data.mobileNumber || "",
    aadhaarNumber: data.aadhaarNumber || "",
    email: data.email || "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(form); // Send data up
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Tenant Details</CardTitle>
        <CardDescription className="text-center">
          Enter the tenant's information for the rental agreement
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="tenantFullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="tenantFullName"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="As per legal documents"
                className="h-10"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="tenantMobileNumber">
                Mobile Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 dark:bg-gray-800 border border-r-0 border-gray-300 dark:border-gray-700 rounded-l-md text-gray-500 dark:text-gray-400">
                  +91
                </span>
                <Input
                  id="tenantMobileNumber"
                  value={form.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  placeholder="10 digit mobile number"
                  className="h-10 rounded-l-none"
                  maxLength={10}
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Will receive agreement notifications
              </p>
            </div>

            {/* Aadhaar Number */}
            <div className="space-y-2">
              <Label htmlFor="tenantAadhaarNumber">
                Aadhaar Number{" "}
                <span className="text-xs text-gray-500 font-normal">(Optional)</span>
              </Label>
              <Input
                id="tenantAadhaarNumber"
                value={form.aadhaarNumber}
                onChange={(e) => handleChange("aadhaarNumber", e.target.value)}
                placeholder="XXXX XXXX XXXX"
                className="h-10"
                maxLength={14}
                type="text"
              />
              <p className="text-xs text-muted-foreground">
                Required only if tenant will eSign
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="tenantEmail">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="tenantEmail"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="tenant@email.com"
                className="h-10"
                required
                type="email"
              />
              <p className="text-xs text-muted-foreground">
                Agreement will be sent to this email
              </p>
            </div>

            {/* Info Box */}
            <div className="md:col-span-2 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Make sure to enter the tenant's details exactly as they appear on their ID documents. The mobile number will be used for digital signature verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CardFooter className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              className="font-medium px-6"
              onClick={onBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8"
            >
              Save & Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}


export function AgreementDetailsForm() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-center">Agreement Details</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-1">
              Enter the rental terms and property details
            </p>
          </div>

          <div className="p-6 space-y-6">
            <form>
              {/* Financial Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="rentAmount" className="block text-sm font-medium">
                    Monthly Rent Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      id="rentAmount"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="10000"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="depositAmount" className="block text-sm font-medium">
                    Security Deposit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      id="depositAmount"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="50000"
                      min="1"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Usually equivalent to 2-6 months of rent
                  </p>
                </div>
              </div>

              {/* Time Period Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="startDate" className="block text-sm font-medium">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="duration" className="block text-sm font-medium">
                    Duration (Months) <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="duration"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="11">11 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Agreements over 11 months require registration at Registrar Office
                  </p>
                </div>
              </div>

              {/* Property Address */}
              <div className="space-y-2 mb-6">
                <label htmlFor="propertyAddress" className="block text-sm font-medium">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="propertyAddress"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                  placeholder="Enter the complete address of the rental property"
                  required
                ></textarea>
              </div>

              {/* Agreement Type Selection */}
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-medium">
                  Agreement Type <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* eSign Only Option */}
                  <label className="relative flex cursor-pointer rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400">
                    <input
                      type="radio"
                      name="agreement-type"
                      value="esign-only"
                      className="sr-only"
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-lg font-medium text-gray-900 dark:text-gray-100">
                          eSign Only
                        </span>
                        <span className="mt-1 flex items-center text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          ₹249
                        </span>
                        <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Digital signatures with legal validity
                        </span>
                      </span>
                    </span>
                    <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-blue-500 dark:peer-checked:border-blue-400"></span>
                  </label>

                  {/* eSign + eStamp Option */}
                  <label className="relative flex cursor-pointer rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400">
                    <input
                      type="radio"
                      name="agreement-type"
                      value="esign-estamp"
                      className="sr-only"
                      defaultChecked
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-lg font-medium text-gray-900 dark:text-gray-100">
                          eSign + eStamp
                        </span>
                        <span className="mt-1 flex items-center text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          ₹299
                        </span>
                        <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Includes govt. approved eStamp paper
                        </span>
                      </span>
                    </span>
                    <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-blue-500 dark:peer-checked:border-blue-400"></span>
                    <span className="absolute top-2 right-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                      Recommended
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex justify-between">
            <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
            <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 flex items-center">
              Next Step
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function AgreementSummary({ ownerInfo, tenantInfo, agreementDetails }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', 'failed'
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Amount calculation based on agreement type (in paise)
  const amount =
    agreementDetails?.agreementType === "esign-only" ? 24900 : 29900;

  // Handle payment initiation
  const handlePayment = async () => {
    if (!isTermsAccepted) {
      alert("Please accept the terms and conditions to proceed");
      return;
    }

    setIsLoading(true);

    try {
      // In production, you would make an API call to create an order
      // const response = await fetch('/api/orders', { method: 'POST' });
      // const data = await response.json();

      // For demo purposes, using mock data
      const options = {
        key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your actual test key
        amount: amount,
        currency: "INR",
        name: "Instadraft",
        description:
          agreementDetails?.agreementType === "esign-only"
            ? "Rental Agreement with eSign"
            : "Rental Agreement with eSign + eStamp",
        order_id: `order_${Date.now()}`, // In production, get this from your backend
        prefill: {
          name: ownerInfo?.fullName || "Rajesh Kumar",
          email: ownerInfo?.email || "rajesh.kumar@example.com",
          contact: ownerInfo?.mobileNumber || "9876543210",
        },
        theme: {
          color: "#2563EB", // blue-600 color
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
        handler: function (response) {
          // Payment successful
          setPaymentStatus("success");

          // Simulate API call to verify payment
          setTimeout(() => {
            // Redirect to next step (Aadhaar OTP screen)
            router.push("/agreement/step5");
          }, 2000);
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
      setPaymentStatus("failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center">Agreement Summary</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-1">
            Please review all details before confirming
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-8">
          {/* Owner Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold pb-2 border-b border-gray-200 dark:border-gray-800">
              Owner Information
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Full Name</dt>
                <dd className="mt-1 text-sm font-medium">
                  {ownerInfo?.fullName || "Rajesh Kumar"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Mobile Number</dt>
                <dd className="mt-1 text-sm font-medium">
                  +91 {ownerInfo?.mobileNumber || "98765 43210"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1 text-sm font-medium">
                  {ownerInfo?.email || "rajesh.kumar@example.com"}
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm text-muted-foreground">Address</dt>
                <dd className="mt-1 text-sm font-medium">
                  {ownerInfo?.address ||
                    "123 Main Road, Indiranagar, Bengaluru, Karnataka - 560038"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Tenant Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold pb-2 border-b border-gray-200 dark:border-gray-800">
              Tenant Information
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Full Name</dt>
                <dd className="mt-1 text-sm font-medium">
                  {tenantInfo?.fullName || "Priya Sharma"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Mobile Number</dt>
                <dd className="mt-1 text-sm font-medium">
                  +91 {tenantInfo?.mobileNumber || "87654 32109"}
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1 text-sm font-medium">
                  {tenantInfo?.email || "priya.sharma@example.com"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Agreement Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold pb-2 border-b border-gray-200 dark:border-gray-800">
              Agreement Details
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Monthly Rent</dt>
                <dd className="mt-1 text-sm font-medium">
                  ₹{agreementDetails?.rentAmount?.toLocaleString() || "18,000"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">
                  Security Deposit
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  ₹
                  {agreementDetails?.depositAmount?.toLocaleString() ||
                    "54,000"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Start Date</dt>
                <dd className="mt-1 text-sm font-medium">
                  {agreementDetails?.startDate || "July 1, 2025"}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm text-muted-foreground">Duration</dt>
                <dd className="mt-1 text-sm font-medium">
                  {agreementDetails?.duration || "11"} months
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm text-muted-foreground">
                  Property Address
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  {agreementDetails?.propertyAddress ||
                    "Flat 401, Sunshine Apartments, HSR Layout, Bengaluru, Karnataka - 560102"}
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm text-muted-foreground">
                  Agreement Type
                </dt>
                <dd className="mt-1 text-sm font-medium flex items-center">
                  <span className="font-medium">
                    {agreementDetails?.agreementType === "esign-only"
                      ? "eSign Only (₹249)"
                      : "eSign + eStamp (₹299)"}
                  </span>
                  {agreementDetails?.agreementType !== "esign-only" && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                      Recommended
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Amount Due</span>
              <span className="text-lg font-bold">
                ₹
                {agreementDetails?.agreementType === "esign-only"
                  ? "249"
                  : "299"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This covers the eSign
              {agreementDetails?.agreementType !== "esign-only"
                ? " and eStamp"
                : ""}{" "}
              processing. Rent and deposit are paid directly to the owner.
            </p>
          </div>

          {/* Payment Status Message */}
          {paymentStatus && (
            <div
              className={`flex items-start p-4 rounded-lg border ${
                paymentStatus === "success"
                  ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/30"
                  : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/30"
              }`}
            >
              <div className="flex-shrink-0">
                {paymentStatus === "success" ? (
                  <CheckCircle
                    className={`h-5 w-5 text-green-500 dark:text-green-400`}
                  />
                ) : (
                  <AlertCircle
                    className={`h-5 w-5 text-red-500 dark:text-red-400`}
                  />
                )}
              </div>
              <div className="ml-3">
                <h3
                  className={`text-sm font-medium ${
                    paymentStatus === "success"
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}
                >
                  {paymentStatus === "success"
                    ? "Payment Successful"
                    : "Payment Failed"}
                </h3>
                <div
                  className={`mt-2 text-sm ${
                    paymentStatus === "success"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {paymentStatus === "success" ? (
                    <p>
                      Your payment has been processed successfully. Redirecting
                      to verification...
                    </p>
                  ) : (
                    <p>
                      There was a problem processing your payment. Please try
                      again.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Terms Acceptance */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={isTermsAccepted}
                  onChange={(e) => setIsTermsAccepted(e.target.checked)}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-medium text-gray-700 dark:text-gray-300"
                >
                  I agree to the
                  <a
                    href="/terms"
                    className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    href="/privacy"
                    className="text-blue-600 hover:underline dark:text-blue-400 ml-1"
                  >
                    Privacy Policy
                  </a>
                </label>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  By proceeding, you confirm all details are correct and consent
                  to digital processing of your agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between gap-3">
          <Button
            variant="outline"
            disabled={isLoading || paymentStatus === "success"}
            onClick={() => router.back()}
            className="flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Edit
          </Button>

          <Button
            onClick={handlePayment}
            disabled={
              isLoading || !isTermsAccepted || paymentStatus === "success"
            }
            className={`px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center ${
              isLoading ? "opacity-80" : ""
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : paymentStatus === "success" ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Payment Complete
              </>
            ) : (
              <>
                Confirm & Pay ₹
                {agreementDetails?.agreementType === "esign-only"
                  ? "249"
                  : "299"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AadhaarOTPVerification() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-medium text-center">
            Agreement Signing
          </span>
        </div>

        <div className="relative">
          <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200 dark:bg-gray-800">
            <div className="w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-600"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <div className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-300 mb-1"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Step 1
              </Badge>
              <span>Details</span>
            </div>
            <div className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-300 mb-1"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Step 2
              </Badge>
              <span>Agreement</span>
            </div>
            <div className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-300 mb-1"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Step 3
              </Badge>
              <span>Payment</span>
            </div>
            <div className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800/50 text-blue-800 dark:text-blue-300 mb-1"
              >
                <Lock className="w-3 h-3 mr-1" />
                Step 4
              </Badge>
              <span>eSign</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Digital Signature (eSign)</h1>
        <p className="text-muted-foreground">
          Both parties need to verify their identity with Aadhaar OTP to
          digitally sign the agreement
        </p>
      </div>

      {/* Owner Verification Section */}
      <Card className="mb-6 border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Owner Verification</CardTitle>
              <CardDescription>
                Rajesh Kumar needs to verify with Aadhaar
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/50"
            >
              Pending
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="owner-aadhaar" className="text-sm font-medium">
                Aadhaar Number <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Input
                    id="owner-aadhaar"
                    placeholder="XXXX XXXX XXXX"
                    className="pr-20"
                    maxLength={14}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <Button className="whitespace-nowrap">Send OTP</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Enter the Aadhaar number linked to your mobile phone
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <label htmlFor="owner-otp" className="text-sm font-medium">
                OTP Verification
              </label>
              <div className="flex space-x-2">
                <Input
                  id="owner-otp"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="flex-1"
                  disabled
                />
                <Button disabled>Verify</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                OTP will be sent to the mobile number registered with Aadhaar
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tenant Verification Section */}
      <Card className="mb-8 border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Tenant Verification</CardTitle>
              <CardDescription>
                Priya Sharma needs to verify with Aadhaar
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/50"
            >
              Pending
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="tenant-aadhaar" className="text-sm font-medium">
                Aadhaar Number <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Input
                    id="tenant-aadhaar"
                    placeholder="XXXX XXXX XXXX"
                    className="pr-20"
                    maxLength={14}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <Button className="whitespace-nowrap">Send OTP</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Enter the Aadhaar number linked to your mobile phone
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <label htmlFor="tenant-otp" className="text-sm font-medium">
                OTP Verification
              </label>
              <div className="flex space-x-2">
                <Input
                  id="tenant-otp"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="flex-1"
                  disabled
                />
                <Button disabled>Verify</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                OTP will be sent to the mobile number registered with Aadhaar
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-100 dark:border-blue-800/30">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-600 dark:text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <span className="font-medium">How eSign works:</span> We use
              DigiLocker and UIDAI's secure Aadhaar eSign service. Your data is
              encrypted and we only receive the digitally signed document, not
              your Aadhaar details.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <Button variant="outline" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
          Back
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
          disabled
        >
          Complete Agreement
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function AgreementSuccess() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Card className="w-full max-w-md border bg-card shadow-sm dark:bg-card">
          <CardContent className="pt-10 pb-8 px-8">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-full p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Your Agreement is Being Processed
            </h1>

            <div className="space-y-3 mb-8 text-muted-foreground">
              <p>
                Your rental agreement will be delivered to your email and
                WhatsApp within a few minutes.
              </p>
              <p>You'll also receive a copy in your dashboard.</p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center py-3 px-5 bg-muted/50 dark:bg-muted/40 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm">Rental_Agreement_June2025.pdf</span>
              </div>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white mt-2 w-full"
                variant="default"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Another Agreement
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            Questions? Contact{" "}
            <a
              href="mailto:support@instadraft.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@instadraft.com
            </a>
          </p>
          <p className="mt-1">
            Agreement processed on June 24, 2025 at 11:22 AM UTC
          </p>
        </div>
      </div>
    </div>
  );
}
