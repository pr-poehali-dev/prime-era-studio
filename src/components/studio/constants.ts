import { useEffect } from "react";

export const LOGO_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/bucket/67a3230b-e118-4d97-8ddd-a10ac067198a.png";
export const HERO_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/dc81565d-1d8d-45bf-b747-554266a5e350.jpg";
export const HAMMOCK_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/3b67dcb1-bbdd-4d11-bfba-3a582830505e.jpg";
export const LOUNGE_IMG = "https://cdn.poehali.dev/projects/32385402-917f-4a98-bde4-4a738e45c91f/files/b52f03f7-d154-4a84-9940-a71843cfb6bc.jpg";

export const advantages = [
  { icon: "Award", text: "Единственная студия в Кузнечиках с реформерами и гамаками" },
  { icon: "Users", text: "Мини-группы до 5 человек — внимание каждому" },
  { icon: "Clock", text: "Тренировки 25–50 минут: эффективно, без потери времени" },
  { icon: "Wine", text: "Prime Lounge с бокалом безалкогольного игристого после занятий" },
  { icon: "Gem", text: "Премиум-дизайн: тёмное дерево, латунь, мягкий бархат" },
  { icon: "Sparkles", text: "Сертифицированные тренеры с опытом от 3 лет" },
];

export const formats = [
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

export const prices = [
  { name: "Prime Check", subtitle: "Пробное", count: "1 занятие", price: "700 ₽", perClass: null, validity: "14 дней", featured: false },
  { name: "Prime Light", subtitle: "", count: "4 занятия", price: "5 400 ₽", perClass: "1 350 ₽ / занятие", validity: "1 месяц", featured: false },
  { name: "Prime Access", subtitle: "", count: "8 занятий", price: "9 900 ₽", perClass: "1 238 ₽ / занятие", validity: "2 месяца", featured: true },
  { name: "Prime VIP", subtitle: "", count: "12 занятий", price: "13 900 ₽", perClass: "1 158 ₽ / занятие", validity: "3 месяца", featured: false },
  { name: "Prime Personal", subtitle: "Индивидуально", count: "1 занятие", price: "2 500 ₽", perClass: null, validity: "по записи", featured: false },
];

export const trainers = [
  { name: "Анна", role: "Реформер · Мобильность", exp: "5 лет" },
  { name: "Мария", role: "Гамаки · Для беременных", exp: "4 года" },
  { name: "Екатерина", role: "Восстановление · Core", exp: "3 года" },
];

export function useReveal() {
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
