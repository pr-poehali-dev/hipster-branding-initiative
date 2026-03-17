import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section id="relevance" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-extrabold text-primary">62%</span>
              </div>
              <p className="font-semibold text-foreground mb-2">Меняли мнение</p>
              <p className="text-sm text-muted-foreground">под влиянием постов в социальных сетях</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-extrabold text-accent">17%</span>
              </div>
              <p className="font-semibold text-foreground mb-2">Доверяют официальным</p>
              <p className="text-sm text-muted-foreground">источникам информации о политике</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-extrabold text-primary">40%</span>
              </div>
              <p className="font-semibold text-foreground mb-2">Верят блогерам</p>
              <p className="text-sm text-muted-foreground">больше, чем официальным источникам</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
