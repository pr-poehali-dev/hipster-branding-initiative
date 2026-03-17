import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ top: "10%", left: "5%", animationDuration: "5s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "10%", animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[250px] h-[250px] rounded-full bg-primary/8 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 125}px`, top: `${mousePosition.y - 125}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[15%] left-[12%] animate-float" style={{ animationDelay: "0s" }}>
          <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">T</div>
        </div>
        <div className="absolute top-[20%] right-[18%] animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">ВК</div>
        </div>
        <div className="absolute bottom-[25%] left-[18%] animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">YT</div>
        </div>
        <div className="absolute bottom-[20%] right-[14%] animate-float" style={{ animationDelay: "2s" }}>
          <Icon name="Smartphone" size={36} className="text-primary/60" />
        </div>
        <div className="absolute top-[50%] left-[5%] animate-float" style={{ animationDelay: "3s" }}>
          <Icon name="MessageCircle" size={30} className="text-accent/60" />
        </div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
          <Icon name="GraduationCap" size={16} className="text-primary" />
          <span className="text-sm font-semibold text-primary">Научно-исследовательский проект · 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up leading-[1.1] text-balance">
          Влияние{" "}
          <span className="text-primary relative inline-block">
            социальных сетей
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none">
              <path d="M2 8C80 3 220 3 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
            </svg>
          </span>{" "}
          на формирование политических и гражданских взглядов подростков
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up animate-delay-100">
          <div className="bg-card/60 backdrop-blur border border-border rounded-2xl px-6 py-4 text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Автор проекта</p>
            <p className="font-semibold text-foreground">Сорокина Дарья</p>
            <p className="text-sm text-muted-foreground">ученица 10 класса</p>
          </div>
          <div className="bg-card/60 backdrop-blur border border-border rounded-2xl px-6 py-4 text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Руководитель</p>
            <p className="font-semibold text-foreground">Сирич Светлана Валерьевна</p>
          </div>
          <div className="bg-card/60 backdrop-blur border border-border rounded-2xl px-6 py-4 text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Школа</p>
            <p className="font-semibold text-foreground">МОУ «Разуменская СОШ №4»</p>
            <p className="text-sm text-muted-foreground">«Вектор Успеха», п. Разумное</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>75 участников опроса</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>9–11 классы</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Белгородский район, 2026</span>
          </div>
        </div>

        <div className="mt-10 animate-fade-in-up animate-delay-300">
          <a
            href="#relevance"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Изучить проект
            <Icon name="ChevronDown" size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}