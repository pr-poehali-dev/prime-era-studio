import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/components/studio/constants";
import HeroSection from "@/components/studio/HeroSection";
import OfferSection from "@/components/studio/OfferSection";
import ContactSection from "@/components/studio/ContactSection";

// TODO: Замените на реальный ID пикселя ВКонтакте, когда получите его
// const VK_PIXEL_ID = "VK-RTRG-XXXXXXX-XXXXX";

export default function Index() {
  useReveal();
  const [formData, setFormData] = useState({ name: "", phone: "", format: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLElement>(null);

  // TODO: Раскомментировать после получения ID пикселя ВК
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.innerHTML = `
  //     !function(){var t=document.createElement("script");t.type="text/javascript",
  //     t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){
  //     VK.Retargeting.Init("${VK_PIXEL_ID}"),VK.Retargeting.Hit()},
  //     document.head.appendChild(t)}();
  //   `;
  //   document.head.appendChild(script);
  // }, []);

  const scrollToForm = (utmContent?: string) => {
    if (utmContent) {
      const url = new URL(window.location.href);
      const existing = url.searchParams.get("utm_content");
      if (!existing) url.searchParams.set("utm_content", utmContent);
      window.history.replaceState(null, "", url.toString());
    }
    formRef.current?.scrollIntoView({ behavior: "smooth" });
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
        setSubmitted={setSubmitted}
      />
    </div>
  );
}
