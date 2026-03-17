import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

function useCountUp(target: number, duration = 1400, inView = false) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

const stats = [
  {
    target: 62,
    label: "Меняли мнение",
    description: "под влиянием постов в социальных сетях",
    icon: "RefreshCw",
    cardClass: "border-primary/20 bg-primary/5 hover:bg-primary/10",
    iconClass: "bg-primary/20",
    valueClass: "text-primary",
    delay: 0,
  },
  {
    target: 17,
    label: "Доверяют официальным",
    description: "источникам информации о политике",
    icon: "ShieldCheck",
    cardClass: "border-accent/20 bg-accent/5 hover:bg-accent/10",
    iconClass: "bg-accent/20",
    valueClass: "text-accent",
    delay: 150,
  },
  {
    target: 40,
    label: "Верят блогерам",
    description: "больше, чем официальным источникам",
    icon: "Star",
    cardClass: "border-primary/20 bg-primary/5 hover:bg-primary/10",
    iconClass: "bg-primary/20",
    valueClass: "text-primary",
    delay: 300,
  },
]

function StatCard({ target, label, description, icon, cardClass, iconClass, valueClass, delay, inView }: {
  target: number
  label: string
  description: string
  icon: string
  cardClass: string
  iconClass: string
  valueClass: string
  delay: number
  inView: boolean
}) {
  const count = useCountUp(target, 1400, inView)

  return (
    <Card
      className={`${cardClass} transition-all duration-700`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <CardContent className="p-6 text-center">
        <div className={`w-20 h-20 rounded-2xl ${iconClass} flex flex-col items-center justify-center mx-auto mb-4 relative`}>
          <span className={`text-3xl font-extrabold ${valueClass} leading-none`}>{count}%</span>
        </div>
        <div className={`flex justify-center mb-3`}>
          <Icon name={icon} fallback="Circle" size={18} className={valueClass} />
        </div>
        <p className="font-semibold text-foreground mb-1">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  const { ref: sectionRef, inView } = useInView(0.2)
  const { ref: headerRef, inView: headerInView } = useInView(0.2)

  return (
    <section id="relevance" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="Lightbulb" size={16} />
            Актуальность
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Почему это{" "}
            <span className="text-primary relative">
              важно?
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 150 8" fill="none">
                <path d="M0 4C40 2 110 6 150 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            В современном цифровом обществе социальные сети стали главным источником информации для подростков.
            <strong className="text-foreground"> 62% опрошенных</strong> признают, что информация из соцсетей хотя бы
            раз заставляла их задуматься или изменить мнение. При этом только{" "}
            <strong className="text-foreground">17% доверяют официальным источникам</strong>, а{" "}
            <strong className="text-foreground">40% — популярным блогерам</strong>.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
