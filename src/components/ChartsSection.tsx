import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Icon from "@/components/ui/icon"

const data = [
  { name: "Telegram", value: 48, color: "#3b82f6" },
  { name: "Меняли мнение", value: 62, color: "#0ea5e9" },
  { name: "Доверяют блогерам", value: 40, color: "#6366f1" },
  { name: "Интерес к обществу", value: 35, color: "#10b981" },
  { name: "Реальные действия", value: 20, color: "#8b5cf6" },
]

const trustData = [
  { name: "Блогеры", value: 40, color: "#6366f1" },
  { name: "Соцсети/знакомые", value: 43, color: "#0ea5e9" },
  { name: "Официальные СМИ", value: 17, color: "#3b82f6" },
]

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { color: string } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-xl text-sm">
        <p className="font-bold text-foreground">{payload[0].name}</p>
        <p className="text-primary font-semibold">{payload[0].value}% учащихся</p>
      </div>
    )
  }
  return null
}

export function ChartsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="PieChart" size={16} />
            Визуализация данных
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Данные в{" "}
            <span className="text-primary">цифрах</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Круговые диаграммы по результатам анкетирования 75 учащихся
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">
            <h3 className="text-center font-bold text-lg mb-1 text-foreground">Ключевые показатели влияния</h3>
            <p className="text-center text-sm text-muted-foreground mb-6">% учащихся, ответивших утвердительно</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
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

          <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">
            <h3 className="text-center font-bold text-lg mb-1 text-foreground">Кому доверяют подростки?</h3>
            <p className="text-center text-sm text-muted-foreground mb-6">Распределение источников доверия</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trustData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
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
      </div>
    </section>
  )
}
