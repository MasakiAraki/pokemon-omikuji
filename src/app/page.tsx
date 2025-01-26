import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <Card className="w-[400px] h-[400px] flex flex-col items-center justify-center gap-4">
      <Badge variant="outline">バッジ</Badge>
      <Progress className="h-2" max={100} value={50} />
      <Button>ボタン</Button>
    </Card>
  );
}