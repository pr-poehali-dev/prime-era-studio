import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/bucket/67a3230b-e118-4d97-8ddd-a10ac067198a.png";
const HERO_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/dc81565d-1d8d-45bf-b747-554266a5e350.jpg";
const HAMMOCK_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/3b67dcb1-bbdd-4d11-bfba-3a582830505e.jpg";
const LOUNGE_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/b52f03f7-d154-4a84-9940-a71843cfb6bc.jpg";

const advantages = [
  { icon: "Award", text: "Единственная студия в Кузнечиках с реформерами и гамаками" },
  { icon: "Users", text: "Мини-группы до 5 человек — внимание каждому" },
  { icon: "Clock", text: "Тренировки 25–50 минут: эффективно, без потери времени" },
  { icon: "Wine", text: "Prime Lounge с бокалом безалкогольного игристого после занятий" },
  { icon: "Gem", text: "Премиум-дизайн: тёмное дерево, латунь, мягкий бархат" },
  { icon: "Sparkles", text: "Сертифицированные тренеры с опытом от 3 лет" },
];

const formats = [
  { name: "Prime Reformer", duration: "45 мин", desc: "Интенсивный пилатес на реформере для всего тела" },
  { name: "Prime Aero", duration: "45 мин", desc: "Сила и растяжка в гамаках, разгрузка позвоночника" },
  { name: "Prime Back", duration: "40 мин", desc: "Для здоровой спины и осанки — хит для офисных" },
  { name: "Prime Sculpt", duration: "40 мин", desc: "Силовой пилатес с бодибарами: рельеф без перекачки" },
  { name: "Prime Relax", duration: "30 мин", desc: "Мягкая растяжка в гамаках, глубокое расслабление" },
  { name: "Prime Express", duration: "25 мин", desc: "Утренний блиц: разбудить тело и мозг" },
  { name: "Prime Mobility", duration: "50 мин", desc: "Мобильность суставов и дыхание" },
  { name: "Prime Core", duration: "25 мин", desc: "Экспресс для кора: пресс, спина, тазовое дно" },
  { name: "Prime Recovery", duration: "35 мин", desc: "Миофасциальное расслабление на валиках" },
  { name: "Prime Time", duration: "60 мин", desc: "Вечерний прайм-тайм по пятницам в 19:00 — джаз, бокал в Lounge" },
  { name: "Prime Mama", duration: "45 мин", desc: "Пилатес для беременных: безопасно и эффективно" },
  { name: "Prime Postnatal", duration: "45 мин", desc: "Восстановление после родов, укрепление тазового дна" },
  { name: "Prime Combo", duration: "50 мин", desc: "Реформер + коврик: два в одном за одно занятие" },
];

const prices = [
  { name: "Prime Check", subtitle: "Пробное", count: "1 занятие", price: "700 ₽", perClass: null, validity: "14 дней", featured: false },
  { name: "Prime Light", subtitle: "", count: "4 занятия", price: "5 400 ₽", perClass: "1 350 ₽ / занятие", validity: "1 месяц", featured: false },
  { name: "Prime Access", subtitle: "", count: "8 занятий", price: "9 900 ₽", perClass: "1 238 ₽ / занятие", validity: "2 месяца", featured: true },
  { name: "Prime VIP", subtitle: "", count: "12 занятий", price: "13 900 ₽", perClass: "1 158 ₽ / занятие", validity: "3 месяца", featured: false },
  { name: "Prime Personal", subtitle: "Индивидуально", count: "1 занятие", price: "2 500 ₽", perClass: null, validity: "по записи", featured: false },
];

const trainers = [
  { name: "Анна", role: "Реформер · Мобильность", exp: "5 лет" },
  { name: "Мария", role: "Гамаки · Для беременных", exp: "4 года" },
  { name: "Екатерина", role: "Восстановление · Core", exp: "3 года" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

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
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-prime-beige/90 backdrop-blur-sm border-b border-prime-warm/30">
        <img src={LOGO_IMG} alt="Прайм Эра" className="h-14 w-auto object-contain" />
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-prime-brown/60 font-sans">
          <a href="#philosophy" className="hover:text-prime-copper transition-colors">Философия</a>
          <a href="#formats" className="hover:text-prime-copper transition-colors">Форматы</a>
          <a href="#prices" className="hover:text-prime-copper transition-colors">Цены</a>
          <a href="#contacts" className="hover:text-prime-copper transition-colors">Контакты</a>
        </div>
        <button onClick={scrollToForm} className="prime-btn text-xs py-3 px-6">
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
              <button onClick={scrollToForm} className="prime-btn text-center">
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

      {/* ═══ PRICES ═══ */}
      <section id="prices" className="py-28 bg-prime-beige">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="mb-16 text-center reveal">
            <p className="section-label mb-4">Абонементы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-prime-brown font-light">
              Выбери свой <em className="text-prime-copper">формат</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {prices.slice(0, 3).map((p, i) => (
              <div key={i} className={`relative p-8 border reveal reveal-delay-${i + 1} ${p.featured ? "border-prime-copper bg-prime-brown text-prime-light" : "border-prime-warm/40 bg-prime-cream"}`}>
                {p.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-prime-copper px-4 py-1">
                    <span className="font-sans text-prime-light text-xs tracking-widest uppercase">Популярный</span>
                  </div>
                )}
                <p className={`font-sans text-xs tracking-widest uppercase mb-1 ${p.featured ? "text-prime-warm/60" : "text-prime-copper"}`}>{p.subtitle || p.count}</p>
                <h3 className={`font-serif text-2xl font-light mb-4 ${p.featured ? "text-prime-light" : "text-prime-brown"}`}>{p.name}</h3>
                <div className={`text-4xl font-serif font-light mb-2 ${p.featured ? "text-prime-warm" : "text-prime-brown"}`}>{p.price}</div>
                {p.perClass && <p className={`font-sans text-xs font-light mb-6 ${p.featured ? "text-prime-warm/50" : "text-prime-brown/50"}`}>{p.perClass}</p>}
                {!p.perClass && <div className="mb-6" />}
                <div className={`flex items-center gap-2 pt-4 border-t ${p.featured ? "border-prime-warm/20" : "border-prime-warm/30"}`}>
                  <Icon name="Clock" size={14} className={p.featured ? "text-prime-warm/50" : "text-prime-copper/60"} />
                  <span className={`font-sans text-xs font-light ${p.featured ? "text-prime-warm/50" : "text-prime-brown/50"}`}>{p.validity}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {prices.slice(3).map((p, i) => (
              <div key={i} className="p-8 border border-prime-warm/40 bg-prime-cream reveal">
                <p className="font-sans text-xs tracking-widest uppercase mb-1 text-prime-copper">{p.subtitle || p.count}</p>
                <h3 className="font-serif text-2xl text-prime-brown font-light mb-4">{p.name}</h3>
                <div className="text-4xl font-serif text-prime-brown font-light mb-2">{p.price}</div>
                {p.perClass && <p className="font-sans text-xs text-prime-brown/50 font-light mb-6">{p.perClass}</p>}
                {!p.perClass && <div className="mb-6" />}
                <div className="flex items-center gap-2 pt-4 border-t border-prime-warm/30">
                  <Icon name="Clock" size={14} className="text-prime-copper/60" />
                  <span className="font-sans text-xs text-prime-brown/50 font-light">{p.validity}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-prime-cream border border-prime-warm/30 p-8 reveal">
            <p className="section-label mb-4">Важно знать</p>
            <div className="grid md:grid-cols-3 gap-6 text-sm font-sans text-prime-brown/60 font-light leading-relaxed">
              <div className="flex gap-3">
                <Icon name="Snowflake" size={16} className="text-prime-copper flex-shrink-0 mt-0.5" />
                <span>Заморозка до 14 дней для Prime VIP</span>
              </div>
              <div className="flex gap-3">
                <Icon name="Bell" size={16} className="text-prime-copper flex-shrink-0 mt-0.5" />
                <span>Отмена занятия не позднее чем за 6 часов</span>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle" size={16} className="text-prime-copper flex-shrink-0 mt-0.5" />
                <span>Все абонементы действуют на все групповые классы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="py-28 bg-prime-cream">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="mb-16 reveal">
            <p className="section-label mb-4">Команда</p>
            <h2 className="font-serif text-4xl md:text-5xl text-prime-brown font-light leading-tight">
              Тренеры,<br />которым <em className="text-prime-copper">доверяют</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <div className="aspect-[3/4] bg-prime-warm/30 mb-6 flex items-end justify-start p-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="User" size={64} className="text-prime-warm/40" />
                  </div>
                  <div className="relative z-10 border border-prime-copper/30 px-3 py-1 bg-prime-beige/80">
                    <span className="font-sans text-prime-copper text-xs tracking-widest uppercase">Опыт {t.exp}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-prime-brown font-light mb-1">{t.name}</h3>
                <p className="font-sans text-prime-brown/50 text-xs tracking-widest uppercase">{t.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-sans text-prime-brown/50 text-sm text-center font-light reveal">
            Все тренеры имеют профильные сертификаты и опыт работы от 3 лет
          </p>
        </div>
      </section>

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
                    <p className="font-sans text-prime-warm/80 text-sm font-light">Подольск, мкр. Кузнечики</p>
                    <p className="font-sans text-prime-warm/50 text-xs mt-0.5">Уточните адрес при записи</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="Clock" size={18} className="text-prime-copper flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-prime-warm/80 text-sm font-light">Ежедневно с 7:00 до 22:00</p>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="Phone" size={18} className="text-prime-copper flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-prime-warm/80 text-sm font-light">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              <div className="flex gap-4 mt-10 reveal reveal-delay-3">
                <a href="#" className="w-10 h-10 border border-prime-warm/20 flex items-center justify-center hover:border-prime-copper hover:text-prime-copper text-prime-warm/50 transition-colors">
                  <Icon name="MessageCircle" size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-prime-warm/20 flex items-center justify-center hover:border-prime-copper hover:text-prime-copper text-prime-warm/50 transition-colors">
                  <Icon name="Send" size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-prime-warm/20 flex items-center justify-center hover:border-prime-copper hover:text-prime-copper text-prime-warm/50 transition-colors">
                  <Icon name="Instagram" size={16} />
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="h-80 bg-prime-dark/40 border border-prime-warm/10 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={40} className="text-prime-warm/20 mx-auto mb-3" />
                  <p className="font-sans text-prime-warm/30 text-xs tracking-widest uppercase">Карта появится здесь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING FORM ═══ */}
      <section ref={formRef as React.RefObject<HTMLElement>} id="booking" className="py-28 bg-prime-beige">
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
              <button type="submit" className="w-full prime-btn text-center py-5 text-sm tracking-widest">
                Записаться за 700 ₽
              </button>
              <p className="text-center font-sans text-prime-brown/30 text-xs font-light leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          ) : (
            <div className="text-center py-16 border border-prime-warm/30 bg-prime-cream reveal">
              <Icon name="CheckCircle" size={40} className="text-prime-copper mx-auto mb-6" />
              <h3 className="font-serif text-3xl text-prime-brown font-light mb-3">Заявка принята</h3>
              <p className="font-sans text-prime-brown/60 text-sm font-light">
                Мы свяжемся с вами в ближайшее время
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
              <a href="#" className="hover:text-prime-warm transition-colors">Политика конфиденциальности</a>
            </div>
            <p className="font-sans text-prime-light/20 text-xs font-light">© 2024 Prime Era</p>
          </div>
        </div>
      </footer>
    </div>
  );
}