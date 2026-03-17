import Icon from "@/components/ui/icon"

const checkItems = [
  { emoji: "✅", action: "ПРОВЕРЯЙ", detail: "источник информации перед тем, как ей доверять" },
  { emoji: "✅", action: "ИЩИ", detail: "разные мнения, не ограничивайся одним источником" },
  { emoji: "✅", action: "ДУМАЙ", detail: "прежде чем делиться — не распространяй непроверенное" },
  { emoji: "✅", action: "РАЗЛИЧАЙ", detail: "факты и эмоции — не дай манипуляторам играть на чувствах" },
  { emoji: "✅", action: "ДЕЙСТВУЙ", detail: "не только в сети — переводи интерес в реальные дела" },
]

export function TestimonialsSection() {
  return (
    <section id="checklist" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="CheckSquare" size={16} />
            Ежедневная практика
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Чек-лист{" "}
            <span className="text-primary">на каждый день</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Пять привычек осознанного пользователя социальных сетей
          </p>
        </div>

        <div className="space-y-4">
          {checkItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-xl font-extrabold text-primary tracking-wide">{item.action}</span>
                <span className="text-muted-foreground">{item.detail}</span>
              </div>
              <Icon name="ArrowRight" size={18} className="ml-auto text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border border-primary/20 text-center">
          <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-3" />
          <p className="font-semibold text-foreground mb-1">Сохрани себе этот чек-лист</p>
          <p className="text-sm text-muted-foreground">Распечатай или сохрани как картинку — и проверяй себя каждый день!</p>
        </div>
      </div>
    </section>
  )
}
