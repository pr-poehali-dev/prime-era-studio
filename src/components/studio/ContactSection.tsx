import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_IMG, formats } from "./constants";

const BOOKING_URL = "https://functions.poehali.dev/27bf4af4-7131-4557-9f57-931d049c7024";

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    content: params.get("utm_content") || "",
  };
}

interface ContactSectionProps {
  formRef: React.RefObject<HTMLElement>;
  formData: { name: string; phone: string; format: string };
  setFormData: (data: { name: string; phone: string; format: string }) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}

export default function ContactSection({ formRef, formData, setFormData, submitted, setSubmitted }: ContactSectionProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(BOOKING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, utm: getUtmParams() }),
      });
      if (!res.ok) throw new Error("server error");
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Позвоните нам: +7 (919) 834-23-99");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-28 bg-prime-brown">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="section-label text-prime-warm/60 mb-6 reveal">Контакты</p>
              <h2 className="font-serif text-4xl text-prime-light font-light mb-10 reveal reveal-delay-1">
                Найди нас<br />в <em className="text-prime-warm">Кузнечиках</em>
              </h2>
              <div className="space-y-6 reveal reveal-delay-2">
                <div className="flex gap-4 items-start">
                  <Icon name="MapPin" size={18} className="text-prime-copper flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-prime-warm/80 text-sm font-light">Подольск, мкр. Кузнечики,</p>
                    <p className="font-sans text-prime-warm/80 text-sm font-light">ул. Генерала Варенникова, д.4</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="Clock" size={18} className="text-prime-copper flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-prime-warm/80 text-sm font-light">Ежедневно с 7:00 до 22:00</p>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="Phone" size={18} className="text-prime-copper flex-shrink-0 mt-0.5" />
                  <a href="tel:+79198342399" className="font-sans text-prime-warm/80 text-sm font-light hover:text-prime-copper transition-colors">+7 (919) 834-23-99</a>
                </div>
              </div>
              <div className="flex gap-4 mt-10 reveal reveal-delay-3">
                <a
                  href="https://t.me/primera_pd"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram @primera_pd"
                  className="w-10 h-10 border border-prime-warm/20 flex items-center justify-center hover:border-prime-copper hover:text-prime-copper text-prime-warm/50 transition-colors"
                >
                  <Icon name="Send" size={16} />
                </a>
                <a
                  href="https://www.instagram.com/primera_pd"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram @primera_pd"
                  className="w-10 h-10 border border-prime-warm/20 flex items-center justify-center hover:border-prime-copper hover:text-prime-copper text-prime-warm/50 transition-colors"
                >
                  <Icon name="Instagram" size={16} />
                </a>
              </div>
            </div>

            {/* Яндекс.Карта */}
            <div className="reveal reveal-delay-2">
              <div className="h-80 overflow-hidden">
                <iframe
                  title="Студия Prime Era на карте"
                  src="https://yandex.ru/map-widget/v1/?ll=37.528000%2C55.428000&z=16&pt=37.528000%2C55.428000%2Cpm2rdm&text=%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C+%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%87%D0%B8%D0%BA%D0%B8%2C+%D1%83%D0%BB.+%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D0%B0+%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0+4"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING FORM ═══ */}
      <section ref={formRef} id="booking" className="py-28 bg-prime-beige">
        <div className="container mx-auto px-6 md:px-16 max-w-2xl">
          <div className="text-center mb-12 reveal">
            <p className="section-label mb-4">Первый шаг</p>
            <h2 className="font-serif text-4xl md:text-5xl text-prime-brown font-light">
              Запись на<br /><em className="text-prime-copper">пробное занятие</em>
            </h2>
            <p className="mt-4 font-sans text-prime-brown/50 text-sm font-light">Всего 700 ₽ — начни свою прайм-эру сегодня</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 reveal reveal-delay-1">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-prime-cream border border-prime-warm/40 text-prime-brown placeholder-prime-brown/30 font-sans text-sm font-light focus:outline-none focus:border-prime-copper transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-prime-cream border border-prime-warm/40 text-prime-brown placeholder-prime-brown/30 font-sans text-sm font-light focus:outline-none focus:border-prime-copper transition-colors"
              />
              <select
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full px-6 py-4 bg-prime-cream border border-prime-warm/40 text-prime-brown font-sans text-sm font-light focus:outline-none focus:border-prime-copper transition-colors appearance-none"
              >
                <option value="" disabled>Выберите формат</option>
                {formats.map((f) => (
                  <option key={f.name} value={f.name}>{f.name} · {f.duration}</option>
                ))}
              </select>
              {error && (
                <p className="text-red-500 font-sans text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                data-utm-content="form-submit"
                className="w-full prime-btn text-center py-5 text-sm tracking-widest disabled:opacity-60"
              >
                {loading ? "Отправляем..." : "Записаться за 700 ₽"}
              </button>
              <p className="text-center font-sans text-prime-brown/30 text-xs font-light leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="underline hover:text-prime-copper transition-colors">обработкой персональных данных</a>
              </p>
            </form>
          ) : (
            <div className="text-center py-16 border border-prime-warm/30 bg-prime-cream reveal">
              <Icon name="CheckCircle" size={40} className="text-prime-copper mx-auto mb-6" />
              <h3 className="font-serif text-3xl text-prime-brown font-light mb-3">Спасибо!</h3>
              <p className="font-sans text-prime-brown/60 text-sm font-light">
                Мы свяжемся с вами в течение часа
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 bg-prime-dark border-t border-prime-warm/10">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <img src={LOGO_IMG} alt="Прайм Эра" className="h-14 w-auto object-contain brightness-0 invert opacity-80" />
            <div className="flex flex-wrap justify-center gap-6 text-prime-light/30 font-sans text-xs tracking-widest uppercase">
              <a href="#philosophy" className="hover:text-prime-warm transition-colors">Философия</a>
              <a href="#formats" className="hover:text-prime-warm transition-colors">Форматы</a>
              <a href="#prices" className="hover:text-prime-warm transition-colors">Абонементы</a>
              <a href="#contacts" className="hover:text-prime-warm transition-colors">Контакты</a>
              <a href="/privacy" className="hover:text-prime-warm transition-colors">Политика конфиденциальности</a>
              <a href="/rules" className="hover:text-prime-warm transition-colors">Правила посещения</a>
            </div>
            <p className="font-sans text-prime-light/20 text-xs font-light">© 2024 Prime Era</p>
          </div>
        </div>
      </footer>
    </>
  );
}
