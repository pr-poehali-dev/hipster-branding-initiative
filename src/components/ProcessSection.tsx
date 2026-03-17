import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const rules = [
  {
    number: "01",
    icon: "Search",
    title: "Проверяй источник",
    description: "Кто автор? Зачем он это пишет? Есть ли у него экспертиза? Прежде чем доверять информации, узнай, кто и с какой целью её публикует.",
    color: "border-blue-500/30 bg-blue-500/5",
    numColor: "text-blue-500",
  },
  {
    number: "02",
    icon: "GitBranch",
    title: "Ищи разные точки зрения",
    description: "Алгоритмы создают «информационный пузырь» — специально подписывайся на каналы с разными взглядами, чтобы видеть полную картину.",
    color: "border-sky-500/30 bg-sky-500/5",
    numColor: "text-sky-500",
  },
  {
    number: "03",
    icon: "Pause",
    title: "Остановись перед репостом",
    description: "Шокирующая новость? Задай себе три вопроса: «Это правда?», «Зачем это публикуют?», «Что будет, если я это распространю?»",
    color: "border-primary/30 bg-primary/5",
    numColor: "text-primary",
  },
  {
    number: "04",
    icon: "Scale",
    title: "Отличай факты от мнений",
    description: "Факт можно проверить в нескольких независимых источниках. Мнение — это чья-то оценка или интерпретация, которая может не совпадать с реальностью.",
    color: "border-violet-500/30 bg-violet-500/5",
    numColor: "text-violet-500",
  },
  {
    number: "05",
    icon: "Heart",
    title: "Не поддавайся эмоциям",
    description: "Если пост вызывает сильную злость или страх — возможно, это манипуляция. Дай себе время «остыть» и проанализируй информацию трезво.",
    color: "border-rose-500/30 bg-rose-500/5",
    numColor: "text-rose-500",
  },
]

export function ProcessSection() {
  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="Shield" size={16} />
            Практические советы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Как не попасть в ловушку{" "}
            <span className="text-primary">манипуляций</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Памятка «5 главных правил» для осознанного потребления информации в социальных сетях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, i) => (
            <Card key={i} className={`border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${rule.color} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-4xl font-extrabold ${rule.numColor} opacity-60`}>{rule.number}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${rule.color} border`}>
                    <Icon name={rule.icon} fallback="Circle" size={20} className={rule.numColor} />
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3 leading-snug">{rule.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
