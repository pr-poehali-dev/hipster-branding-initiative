import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const results = [
  {
    percent: "48%",
    icon: "Send",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    badgeColor: "text-blue-500",
    title: "Telegram — главный источник новостей",
    description: "Почти половина опрошенных подростков получают новости именно через Telegram-каналы",
  },
  {
    percent: "40%",
    icon: "Star",
    color: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    badgeColor: "text-sky-500",
    title: "Доверяют блогерам больше официальных",
    description: "Мнение популярных блогеров воспринимается как более достоверное, чем государственные СМИ",
  },
  {
    percent: "62%",
    icon: "RefreshCw",
    color: "bg-primary/10 text-primary border-primary/20",
    badgeColor: "text-primary",
    title: "Хотя бы раз меняли мнение",
    description: "Посты в социальных сетях реально влияют на взгляды большинства опрошенных подростков",
  },
  {
    percent: "35%",
    icon: "TrendingUp",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    badgeColor: "text-emerald-500",
    title: "Стали интересоваться общественной жизнью",
    description: "Социальные сети пробудили интерес к общественным событиям и гражданской позиции",
  },
  {
    percent: "20%",
    icon: "Users",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    badgeColor: "text-violet-500",
    title: "Участвовали в реальных делах",
    description: "После онлайн-обсуждений перешли к реальным гражданским действиям в офлайн-жизни",
  },
]

export function ServicesSection() {
  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="BarChart2" size={16} />
            Что показало исследование
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Результаты{" "}
            <span className="text-primary">анкетирования</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            75 учащихся 9–11 классов МОУ «Разуменская СОШ №4 «Вектор Успеха»
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item, i) => (
            <Card key={i} className={`border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${item.color}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <Icon name={item.icon} fallback="Circle" size={22} />
                  </div>
                  <span className={`text-4xl font-extrabold ${item.badgeColor}`}>{item.percent}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 md:col-span-2 lg:col-span-1 flex items-center">
            <CardContent className="p-6 text-center w-full">
              <Icon name="FileSearch" size={40} className="text-primary mx-auto mb-4" />
              <p className="text-lg font-bold text-foreground mb-2">Анкетирование</p>
              <p className="text-sm text-muted-foreground">Исследование проведено в МОУ «Разуменская СОШ №4» среди учащихся старших классов в 2026 году</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}