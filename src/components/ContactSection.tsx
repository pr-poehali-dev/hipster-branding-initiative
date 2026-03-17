import Icon from "@/components/ui/icon"

export function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-500/30">T</div>
            <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-sky-500/30">ВК</div>
            <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-red-500/30">YT</div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Социальные сети — с умом!</h3>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Каждый из нас ежедневно сталкивается с информацией в Telegram, ВКонтакте и YouTube.
            Главное — сохранять критическое мышление и медиаграмотность.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary font-medium">
            <Icon name="BookOpen" size={16} />
            <span>Исследование выполнено в рамках школьной научно-практической конференции 2026 г.</span>
          </div>
        </div>
      </div>
    </section>
  )
}