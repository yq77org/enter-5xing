import { ElementCard } from "@/components/ElementCard";
import { Leaf, Flame, Mountain, Gem, Droplets } from "lucide-react";
const Index = () => {
  const elements = [{
    name: "Wood",
    chineseName: "木",
    color: "hsl(142, 76%, 36%)",
    glowColor: "hsl(142, 76%, 46%)",
    icon: Leaf,
    season: "春季",
    direction: "东方",
    characteristics: ["生长", "发育", "条达", "舒畅"]
  }, {
    name: "Fire",
    chineseName: "火",
    color: "hsl(0, 84%, 60%)",
    glowColor: "hsl(14, 100%, 60%)",
    icon: Flame,
    season: "夏季",
    direction: "南方",
    characteristics: ["炎热", "向上", "光明", "温暖"]
  }, {
    name: "Earth",
    chineseName: "土",
    color: "hsl(43, 74%, 49%)",
    glowColor: "hsl(43, 74%, 59%)",
    icon: Mountain,
    season: "长夏",
    direction: "中央",
    characteristics: ["生化", "承载", "受纳", "厚重"]
  }, {
    name: "Metal",
    chineseName: "金",
    color: "hsl(0, 0%, 80%)",
    glowColor: "hsl(0, 0%, 95%)",
    icon: Gem,
    season: "秋季",
    direction: "西方",
    characteristics: ["收敛", "清洁", "肃降", "坚硬"]
  }, {
    name: "Water",
    chineseName: "水",
    color: "hsl(211, 100%, 50%)",
    glowColor: "hsl(199, 89%, 48%)",
    icon: Droplets,
    season: "冬季",
    direction: "北方",
    characteristics: ["寒冷", "滋润", "向下", "流动"]
  }];
  return <div className="min-h-screen w-full bg-background overflow-auto">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-wood/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fire/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-water/5 rounded-full blur-3xl" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">
        {/* 标题 */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">五行9090</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            中国古代哲学的五种基本元素 — 木、火、土、金、水
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="h-1 w-20 bg-wood rounded-full" />
            <div className="h-1 w-20 bg-fire rounded-full" />
            <div className="h-1 w-20 bg-earth rounded-full" />
            <div className="h-1 w-20 bg-metal rounded-full" />
            <div className="h-1 w-20 bg-water rounded-full" />
          </div>
        </div>

        {/* 五行卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {elements.map((element, index) => <ElementCard key={element.name} {...element} delay={index * 100} />)}
        </div>

        {/* 五行相生相克说明 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-card/50 rounded-2xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              五行相生相克
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground mb-4">相生</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-wood font-medium">木</span>生
                  <span className="text-fire font-medium">火</span>，
                  <span className="text-fire font-medium">火</span>生
                  <span className="text-earth font-medium">土</span>，
                  <span className="text-earth font-medium">土</span>生
                  <span className="text-metal font-medium">金</span>，
                  <span className="text-metal font-medium">金</span>生
                  <span className="text-water font-medium">水</span>，
                  <span className="text-water font-medium">水</span>生
                  <span className="text-wood font-medium">木</span>
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground mb-4">相克</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-wood font-medium">木</span>克
                  <span className="text-earth font-medium">土</span>，
                  <span className="text-earth font-medium">土</span>克
                  <span className="text-water font-medium">水</span>，
                  <span className="text-water font-medium">水</span>克
                  <span className="text-fire font-medium">火</span>，
                  <span className="text-fire font-medium">火</span>克
                  <span className="text-metal font-medium">金</span>，
                  <span className="text-metal font-medium">金</span>克
                  <span className="text-wood font-medium">木</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;