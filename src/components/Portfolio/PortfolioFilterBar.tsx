import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PortfolioFilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PortfolioFilterBar({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "rounded-full px-6 py-2 h-auto text-sm font-medium transition-all duration-300",
            activeCategory === category
              ? "bg-forge-navy text-white hover:bg-forge-navy/90"
              : "bg-transparent border-forge-navy/10 text-forge-navy hover:bg-forge-navy/5"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}