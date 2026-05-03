import Icon from "@/components/ui/icon";
import { prices, trainers, formats } from "./constants";

export default function OfferSection() {
  return (
    <>
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

      {/* ═══ SCHEDULE ═══ */}
      <section id="schedule" className="py-28 bg-prime-beige">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4 reveal">Расписание</p>
              <h2 className="font-serif text-4xl md:text-5xl text-prime-brown font-light leading-tight mb-6 reveal reveal-delay-1">
                Найди <em className="text-prime-copper">своё время</em>
              </h2>
              <p className="font-sans text-prime-brown/60 text-base font-light leading-relaxed mb-10 reveal reveal-delay-2">
                Актуальное расписание всех форматов — в нашем Telegram-канале. Там же можно записаться на занятие в пару кликов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
                <a href="https://t.me/primera_pd" target="_blank" rel="noopener noreferrer" className="prime-btn text-center flex items-center justify-center gap-3">
                  <Icon name="Send" size={16} />
                  Расписание в Telegram
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="border border-prime-warm/40 bg-prime-cream divide-y divide-prime-warm/30">
                {[
                  { day: "Понедельник", slots: ["8:00 Prime Express", "10:00 Prime Reformer", "19:00 Prime Back"] },
                  { day: "Вторник", slots: ["9:00 Prime Aero", "11:00 Prime Core", "20:00 Prime Relax"] },
                  { day: "Среда", slots: ["8:00 Prime Express", "10:00 Prime Sculpt", "19:00 Prime Mobility"] },
                  { day: "Четверг", slots: ["9:00 Prime Reformer", "11:00 Prime Back", "20:00 Prime Recovery"] },
                  { day: "Пятница", slots: ["8:00 Prime Express", "10:00 Prime Combo", "19:00 Prime Time ✦"] },
                  { day: "Суббота / Воскресенье", slots: ["10:00 Prime Aero", "12:00 Prime Relax"] },
                ].map((row) => (
                  <div key={row.day} className="flex gap-4 px-6 py-4 hover:bg-prime-beige transition-colors">
                    <span className="font-sans text-prime-copper text-xs tracking-widest uppercase w-28 flex-shrink-0 pt-0.5">{row.day}</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {row.slots.map((s) => (
                        <span key={s} className="font-sans text-prime-brown/70 text-xs font-light">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="px-6 py-3 bg-prime-warm/20">
                  <p className="font-sans text-prime-brown/40 text-xs font-light italic">Расписание примерное — актуальное в Telegram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews" className="py-28 bg-prime-brown">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="mb-16 text-center reveal">
            <p className="section-label text-prime-warm/60 mb-4">Отзывы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-prime-light font-light">
              Говорят <em className="text-prime-warm">наши клиенты</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Анастасия К.", age: "34 года", text: "Ваш отзыв появится здесь совсем скоро", avatar: "А" },
              { name: "Елена М.", age: "41 год", text: "Ваш отзыв появится здесь совсем скоро", avatar: "Е" },
              { name: "Ольга Р.", age: "29 лет", text: "Ваш отзыв появится здесь совсем скоро", avatar: "О" },
            ].map((r, i) => (
              <div key={i} className={`border border-prime-warm/15 p-8 hover:border-prime-copper/40 transition-colors reveal reveal-delay-${i + 1}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-prime-copper/20 border border-prime-copper/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-prime-warm text-lg font-light">{r.avatar}</span>
                  </div>
                  <div>
                    <p className="font-sans text-prime-warm/90 text-sm font-medium">{r.name}</p>
                    <p className="font-sans text-prime-warm/40 text-xs">{r.age}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-prime-copper text-sm">★</span>
                  ))}
                </div>
                <p className="font-serif text-prime-warm/50 text-base italic font-light leading-relaxed">
                  «{r.text}»
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center reveal">
            <p className="font-sans text-prime-warm/30 text-xs tracking-widest uppercase">Скоро здесь появятся настоящие отзывы наших клиентов</p>
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
    </>
  );
}

export { formats };
