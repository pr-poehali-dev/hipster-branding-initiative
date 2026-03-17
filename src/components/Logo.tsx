export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white text-sm font-bold">ВС</span>
        </div>
        <span className="text-base font-bold tracking-tight leading-tight">
          <span className="text-primary">Вектор</span> Успеха
        </span>
      </div>
    </div>
  )
}
