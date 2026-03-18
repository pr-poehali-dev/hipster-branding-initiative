import Icon from "@/components/ui/icon"

export function PricingSection() {
  return (
    <section id="contacts" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="Award" size={16} />
            Финальный экран
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-balance">
            Спасибо за{" "}
            <span className="text-primary">внимание!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Будьте осознанными пользователями — это ваша главная защита в эпоху информации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Автор проекта</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Сорокина Дарья</p>
                <p className="text-sm text-muted-foreground">ученица 10 класса</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">МОУ «Разуменская СОШ №4 «Вектор Успеха»</p>
            <p className="text-sm text-muted-foreground">п. Разумное, Белгородский район</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Научный руководитель</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="GraduationCap" size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-bold text-foreground">Сирич Светлана Валерьевна</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">МОУ «Разуменская СОШ №4 «Вектор Успеха»</p>
            <p className="text-sm text-muted-foreground">п. Разумное, Белгородский район</p>
          </div>
        </div>


      </div>
    </section>
  )
}