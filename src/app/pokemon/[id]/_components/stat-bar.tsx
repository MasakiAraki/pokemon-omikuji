import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { LuckyParamValue } from "@/types";

interface StatBarProps {
  label: LuckyParamValue;
  value: number;
}

// stat bar for the lucky params
const StatBar = ({ label, value }: StatBarProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">{value}</span>
    </div>
    <Progress
      value={value}
      max={100}
      className={cn("h-2", 99 <= value && "bg-yellow-300 animate-pulse")}
    />
  </div>
);

export default StatBar;