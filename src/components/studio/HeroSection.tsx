import Icon from "@/components/ui/icon";
import { LOGO_IMG, HERO_IMG, HAMMOCK_IMG, LOUNGE_IMG, advantages, formats } from "./constants";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-prime-beige/90 backdrop-blur-sm border-b border-prime-warm/30">
        <img src={LOGO_IMG} alt="Прайм Эра" className="h-14 w-auto object-contain" />
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-prime-brown/60 font-sans">
          <a href="#philosophy" className="hover:text-prime-copper transition-colors">Философия</a>
          <a href="#formats" className="hover:text-prime-copper transition-colors">Форматы</a>
          <a href="#schedule" className="hover:text-prime-copper transition-colors">Расписание</a>
          <a href="#prices" className="hover:text-prime-copper transition-colors">Цены</a>
          <a href="#contacts" className="hover:text-prime-copper transition-colors">Контакты</a>
        </div>
        <button onClick={onScrollToForm} className="prime-btn text-xs py-3 px-6">
          Записаться
        </button>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Интерьер студии" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-prime-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-prime-dark/80 via-prime-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-prime-warm/80 font-sans text-xs tracking-[0.4em] uppercase mb-8 animate-fade-in opacity-0" style={{ animationFillMode: "forwards" }}>
              Подольск · Кузнечики
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-prime-light leading-[1.1] font-light mb-6 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
              Войди<br />в свою<br /><em className="text-prime-warm not-italic">прайм-эру</em>
            </h1>
            <p className="font-sans text-prime-warm/80 text-lg font-light mb-10 leading-relaxed animate-fade-up-delay opacity-0" style={{ animationFillMode: "forwards" }}>
              Студия пилатеса на реформерах<br />и растяжки в гамаках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay2 opacity-0" style={{ animationFillMode: "forwards" }}>
              <button onClick={onScrollToForm} className="prime-btn text-center">
                Пробное за 700 ₽
              </button>
              <a href="#philosophy" className="prime-btn-outline text-center border-prime-warm/40 text-prime-warm hover:bg-prime-warm/20 hover:text-prime-light hover:border-prime-warm">
                Узнать больше
              </a>
            </div>
          </div>
        </div>

        <a href="#philosophy" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-prime-warm/50 hover:text-prime-warm transition-colors animate-fade-in opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <span className="text-xs tracking-widest uppercase font-sans">Листай</span>
          <Icon name="ChevronDown" size={16} />
        </a>
      </section>

      {/* ═══ PHILOSOPHY ═══ */}
      <section id="philosophy" className="py-32 bg-prime-brown relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-prime-copper/5 -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-16 max-w-4xl text-center relative z-10">
          <p className="section-label text-prime-warm/60 mb-12 reveal">Философия</p>
          <blockquote className="font-serif text-3xl md:text-5xl text-prime-light leading-[1.4] font-light italic reveal reveal-delay-1">
            «Твоя прайм-эра — это осознанный выбор зрелого тела. Она наступает, когда ты перестаёшь доказывать и начинаешь чувствовать»
          </blockquote>
          <div className="mt-12 w-px h-20 bg-prime-copper/40 mx-auto reveal reveal-delay-2" />
          <p className="mt-8 font-sans text-prime-warm/60 text-base font-light leading-relaxed max-w-xl mx-auto reveal reveal-delay-3">
            Когда тело становится не инструментом для чужих целей,<br />а домом для твоей души.
          </p>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="py-28 bg-prime-beige">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl">
          <div className="mb-16 reveal">
            <p className="section-label mb-4">Почему Prime Era</p>
            <div className="divider-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, i) => (
              <div key={i} className={`flex gap-5 group reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                <div className="flex-shrink-0 w-10 h-10 border border-prime-copper/30 flex items-center justify-center group-hover:bg-prime-copper/10 transition-colors">
                  <Icon name={item.icon} fallback="Star" size={18} className="text-prime-copper" />
                </div>
                <p className="font-sans text-prime-brown/80 text-sm leading-relaxed font-light pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMATS ═══ */}
      <section id="formats" className="py-28 bg-prime-cream">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl">
          <div className="mb-16 reveal">
            <p className="section-label mb-4">Форматы занятий</p>
            <h2 className="font-serif text-4xl md:text-5xl text-prime-brown font-light leading-tight">
              Найди своё<br /><em className="text-prime-copper">расписание</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-prime-warm/30">
            {formats.map((f, i) => (
              <div key={i} className="bg-prime-cream p-8 hover:bg-prime-beige transition-colors group reveal">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl text-prime-brown font-light group-hover:text-prime-copper transition-colors">{f.name}</h3>
                  <span className="text-prime-copper font-sans text-xs tracking-widest border border-prime-copper/30 px-2 py-1 flex-shrink-0 ml-2">{f.duration}</span>
                </div>
                <p className="font-sans text-prime-brown/60 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <p className="font-sans text-prime-brown/50 text-xs tracking-widest uppercase">Все форматы доступны для всех абонементов</p>
          </div>
        </div>
      </section>

      {/* ═══ PRIME TIME ═══ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HAMMOCK_IMG} alt="Вечерняя студия" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-prime-dark/75" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label text-prime-warm/60 mb-6 reveal">Специальный формат</p>
              <h2 className="font-serif text-5xl md:text-6xl text-prime-light font-light leading-tight mb-8 reveal reveal-delay-1">
                Prime<br /><em className="text-prime-warm">Time</em>
              </h2>
              <div className="divider-line mb-8 reveal reveal-delay-2" />
              <p className="font-sans text-prime-warm/70 text-base leading-relaxed font-light reveal reveal-delay-3">
                Каждую пятницу в 19:00. Приглушённый свет, джаз, а после тренировки — бокал безалкогольного игристого и полезные тарталетки в Prime Lounge.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="border border-prime-warm/20 p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="Calendar" size={20} className="text-prime-copper" />
                  <span className="font-sans text-prime-warm/80 text-sm tracking-widest uppercase">Каждую пятницу</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="Clock" size={20} className="text-prime-copper" />
                  <span className="font-sans text-prime-warm/80 text-sm tracking-widest uppercase">19:00 · 60 минут</span>
                </div>
                <div className="flex items-center gap-4 mb-10">
                  <Icon name="Music" size={20} className="text-prime-copper" />
                  <span className="font-sans text-prime-warm/80 text-sm tracking-widest uppercase">Джаз · Lounge · Бокал</span>
                </div>
                <p className="font-serif text-prime-warm text-xl italic font-light">
                  «Это не просто пилатес — это светское событие»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIME LOUNGE ═══ */}
      <section className="py-28 bg-prime-brown">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 reveal">
              <div className="relative">
                <img src={LOUNGE_IMG} alt="Prime Lounge" className="w-full h-[480px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-prime-brown/60 to-transparent" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="section-label text-prime-warm/60 mb-6 reveal">После тренировки</p>
              <h2 className="font-serif text-4xl md:text-5xl text-prime-light font-light leading-tight mb-8 reveal reveal-delay-1">
                Prime<br /><em className="text-prime-warm">Lounge</em>
              </h2>
              <p className="font-sans text-prime-warm/60 text-base leading-loose font-light mb-8 reveal reveal-delay-2">
                Твоя гостиная после тренировки. Мягкие кресла, свежая пресса, зарядки для гаджетов, вода с мятой, полезные перекусы и безалкогольное игристое — для держателей абонементов.
              </p>
              <div className="space-y-4 reveal reveal-delay-3">
                {["Мягкие кресла и приглушённый свет", "Безалкогольное игристое включено", "Зарядки, пресса, вода с мятой"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-prime-copper rounded-full flex-shrink-0" />
                    <span className="font-sans text-prime-warm/70 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
