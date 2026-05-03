import { useRef, useState } from "react";
import { useReveal } from "@/components/studio/constants";
import HeroSection from "@/components/studio/HeroSection";
import OfferSection from "@/components/studio/OfferSection";
import ContactSection from "@/components/studio/ContactSection";

export default function Index() {
  useReveal();
  const [formData, setFormData] = useState({ name: "", phone: "", format: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-prime-beige overflow-x-hidden">
      <HeroSection onScrollToForm={scrollToForm} />
      <OfferSection />
      <ContactSection
        formRef={formRef}
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
