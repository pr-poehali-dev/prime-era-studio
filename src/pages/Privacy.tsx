import { LOGO_IMG } from "@/components/studio/constants";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-prime-beige">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-prime-warm/30">
        <a href="/">
          <img src={LOGO_IMG} alt="Прайм Эра" className="h-14 w-auto object-contain" />
        </a>
        <a href="/" className="font-sans text-xs tracking-widest uppercase text-prime-brown/60 hover:text-prime-copper transition-colors">
          ← На главную
        </a>
      </nav>

      <div className="container mx-auto px-6 md:px-16 max-w-3xl py-24">
        <p className="section-label mb-6">Юридические документы</p>
        <h1 className="font-serif text-4xl md:text-5xl text-prime-brown font-light mb-16">
          Политика<br /><em className="text-prime-copper">конфиденциальности</em>
        </h1>

        <div className="font-sans text-prime-brown/70 text-base leading-loose font-light space-y-8">
          <div className="border border-prime-warm/40 bg-prime-cream p-10 text-center">
            <p className="font-serif text-prime-brown/40 text-xl italic font-light">
              Текст политики конфиденциальности будет добавлен в ближайшее время
            </p>
            <p className="mt-4 text-prime-brown/30 text-sm">
              По вопросам обработки персональных данных обращайтесь: +7 (919) 834-23-99
            </p>
          </div>
        </div>
      </div>

      <footer className="py-8 bg-prime-dark border-t border-prime-warm/10 text-center">
        <p className="font-sans text-prime-light/20 text-xs font-light">© 2024 Prime Era</p>
      </footer>
    </div>
  );
}
