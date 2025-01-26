import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Scroll, Sparkles } from "lucide-react";

type FortuneButtonProps = {
  isDrawing: boolean;
  drawFortune: () => void;
};

export default function FortuneButton(props: FortuneButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "px-8 py-6 text-xl bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700",
        "transform transition-all hover:scale-105 active:scale-95",
        "shadow-lg hover:shadow-xl",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
      disabled={props.isDrawing}
      onClick={props.drawFortune}
    >
      {props.isDrawing ? (
        <Scroll className="mr-2 h-6 w-6 animate-spin" />
      ) : (
        <Sparkles className="mr-2 h-6 w-6" />
      )}
      Draw Fortune
    </Button>
  );
}