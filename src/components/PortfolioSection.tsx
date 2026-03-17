import Icon from "@/components/ui/icon"

export function PortfolioSection() {
  return (
    <section id="conclusion" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Icon name="BookOpen" size={16} />
            Итоги исследования
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">Заключение</span>
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon name="Globe" size={40} className="text-primary" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-8 font-medium">
            Социальные сети — мощный инструмент, который может как{" "}
            <span className="text-primary font-bold">развивать интерес к общественной жизни</span>, так и{" "}
            <span className="text-rose-500 font-bold">манипулировать сознанием</span>. Главный риск — разрыв между
            онлайн-активностью и реальными действиями.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed text-center mb-10">
            Важно научиться пользоваться соцсетями осознанно, и это задача не только подростков,
            но и педагогов, и родителей.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={22} className="text-primary" />
              </div>
              <p className="font-bold text-foreground">Подростки</p>
              <p className="text-sm text-muted-foreground mt-1">учатся критическому мышлению</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="GraduationCap" size={22} className="text-accent" />
              </div>
              <p className="font-bold text-foreground">Педагоги</p>
              <p className="text-sm text-muted-foreground mt-1">включают медиаграмотность в обучение</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Home" size={22} className="text-primary" />
              </div>
              <p className="font-bold text-foreground">Родители</p>
              <p className="text-sm text-muted-foreground mt-1">ведут открытый диалог с детьми</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
