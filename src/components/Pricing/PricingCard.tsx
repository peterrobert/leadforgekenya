import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all duration-300 rounded-2xl shadow-sm border-forge-navy/10",
        popular
          ? "border-forge-orange shadow-lg lg:scale-105 z-10 bg-white"
          : "hover:shadow-md bg-white/50 backdrop-blur-sm"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <Badge className="bg-forge-orange text-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-forge-orange">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="pt-8 px-6 pb-2">
        <CardTitle className="font-display text-2xl font-bold text-forge-navy">
          {title}
        </CardTitle>
        <CardDescription className="text-forge-gray mt-2 min-h-[40px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-4 flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold text-forge-navy tracking-tight">
            {price}
          </span>
          {price.includes("KSh") && (
            <span className="text-forge-gray text-sm font-normal ml-1">
              / project
            </span>
          )}
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-forge-navy/80">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forge-orange/10 text-forge-orange">
                <Check className="h-3 w-3" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-8 pt-2">
        <Button
          asChild
          className={cn(
            "w-full rounded-full font-bold",
            popular
              ? "bg-forge-orange text-white hover:bg-forge-orange/90"
              : "bg-forge-navy text-white hover:bg-forge-navy/90"
          )}
          size="lg"
        >
          <Link to="/contact">{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};