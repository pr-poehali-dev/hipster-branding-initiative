import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-base font-bold mb-3 text-foreground">О проекте</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Научно-исследовательская работа по теме влияния социальных сетей на политические и гражданские взгляды подростков
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Разделы</h4>
            <ul className="space-y-2">
              {[
                { href: "#relevance", label: "Актуальность" },
                { href: "#results", label: "Результаты анкетирования" },
                { href: "#rules", label: "Памятка «5 правил»" },
                { href: "#checklist", label: "Чек-лист" },
                { href: "#conclusion", label: "Заключение" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Данные</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="User" size={14} className="text-primary flex-shrink-0" />
                <span>Сорокина Дарья, 10 класс</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="GraduationCap" size={14} className="text-primary flex-shrink-0" />
                <span>Руководитель: Сирич С.В.</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-primary flex-shrink-0" />
                <span>МОУ СОШ №4 «Вектор Успеха», п. Разумное</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={14} className="text-primary flex-shrink-0" />
                <span>2026 год</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 · МОУ «Разуменская СОШ №4 «Вектор Успеха» · Белгородский район, п. Разумное
        </div>
      </div>
    </footer>
  )
}