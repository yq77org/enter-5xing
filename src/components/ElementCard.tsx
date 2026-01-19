import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ElementCardProps {
  name: string;
  chineseName: string;
  color: string;
  glowColor: string;
  icon: LucideIcon;
  season: string;
  direction: string;
  characteristics: string[];
  delay?: number;
}

export const ElementCard = ({
  name,
  chineseName,
  color,
  glowColor,
  icon: Icon,
  season,
  direction,
  characteristics,
  delay = 0,
}: ElementCardProps) => {
  return (
    <Card
      className="element-card group relative overflow-hidden border-2 backdrop-blur-sm"
      style={{
        borderColor: color,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative z-10 p-6 space-y-4">
        {/* 图标和标题 */}
        <div className="flex items-center gap-4">
          <div
            className="p-4 rounded-full transition-all duration-500 group-hover:scale-110 pulse-glow"
            style={{
              backgroundColor: `${color}20`,
              boxShadow: `0 0 20px ${color}40`,
            }}
          >
            <Icon
              className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
              style={{ color }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground">{chineseName}</h3>
            <p className="text-lg text-muted-foreground">{name}</p>
          </div>
        </div>

        {/* 信息 */}
        <div className="space-y-2 pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">季节</span>
            <span className="text-sm font-medium text-foreground">{season}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">方位</span>
            <span className="text-sm font-medium text-foreground">{direction}</span>
          </div>
        </div>

        {/* 特性 */}
        <div className="space-y-2 pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">特性</h4>
          <div className="flex flex-wrap gap-2">
            {characteristics.map((char, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${color}20`,
                  color: glowColor,
                  border: `1px solid ${color}40`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 光晕效果 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${color}15, transparent 70%)`,
        }}
      />
    </Card>
  );
};
