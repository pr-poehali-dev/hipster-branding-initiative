import { useEffect, useRef, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Icon from "@/components/ui/icon"

const sourcesData = [
  { name: "Telegram", value: 48, color: "#3b82f6" },
  { name: "ВКонтакте", value: 30, color: "#0ea5e9" },
  { name: "YouTube", value: 15, color: "#ef4444" },
  { name: "Другие", value: 7, color: "#94a3b8" },
]

const trustData = [
  { name: "Блогеры", value: 40, color: "#6366f1" },
  { name: "Соцсети / знакомые", value: 43, color: "#0ea5e9" },
  { name: "Официальные СМИ", value: 17, color: "#3b82f6" },
]

const facts = [
  { icon: "Zap", color: "text-yellow-500 bg-yellow-500/10", text: "Telegram обогнал ВКонтакте как основной источник новостей для старшеклассников" },
  { icon: "AlertTriangle", color: "text-rose-500 bg-rose-500/10", text: "Лишь каждый шестой доверяет официальным СМИ — остальные ориентируются на блогеров и знакомых" },
  { icon: "TrendingUp", color: "text-emerald-500 bg-emerald-500/10", text: "62% уже меняли мнение под влиянием постов — медиаграмотность критически важна" },
]

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number }>
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-xl text-sm">
        <p className="font-bold text-foreground">{payload[0].name}</p>
        <p className="text-primary font-semibold">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

function useInView(threshold = 0.2) {
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

export function ChartsSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2)
  const { ref: chart1Ref, inView: chart1InView } = useInView(0.15)
  const { ref: chart2Ref, inView: chart2InView } = useInView(0.15)
  const { ref: factsRef, inView: factsInView } = useInView(0.1)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">

        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="PieChart" size={16} />
            Визуализация данных
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Данные в{" "}
            <span className="text-primary">цифрах</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Круговые диаграммы по результатам анкетирования 75 учащихся 9–11 классов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div
            ref={chart1Ref}
            className={`bg-card border border-border rounded-3xl p-6 shadow-lg transition-all duration-700 delay-100 ${chart1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-center font-bold text-lg mb-1 text-foreground">Какую соцсеть используют для новостей?</h3>
            <p className="text-center text-sm text-muted-foreground mb-4">Распределение источников новостей, % учащихся</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                  isAnimationActive={chart1InView}
                  animationBegin={200}
                  animationDuration={900}
                  animationEasing="ease-out"
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: "hsl(var(--foreground))", fontSize: "13px" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            ref={chart2Ref}
            className={`bg-card border border-border rounded-3xl p-6 shadow-lg transition-all duration-700 delay-200 ${chart2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-center font-bold text-lg mb-1 text-foreground">Кому доверяют подростки?</h3>
            <p className="text-center text-sm text-muted-foreground mb-4">Распределение источников доверия, % учащихся</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trustData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                  isAnimationActive={chart2InView}
                  animationBegin={300}
                  animationDuration={900}
                  animationEasing="ease-out"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                    const RADIAN = Math.PI / 180
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)
                    return (
                      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                        {value}%
                      </text>
                    )
                  }}
                  labelLine={false}
                >
                  {trustData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: "hsl(var(--foreground))", fontSize: "13px" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          ref={factsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${factsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {facts.map((fact, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card border border-border rounded-2xl p-4"
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${fact.color}`}>
                <Icon name={fact.icon} fallback="Circle" size={18} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
