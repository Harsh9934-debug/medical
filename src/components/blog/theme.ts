import {
  Handshake,
  Factory,
  FlaskConical,
  Globe2,
  TrendingUp,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export const CATEGORY_THEME: Record<
  string,
  { icon: LucideIcon; tile: string; pill: string }
> = {
  "PCD Franchise": { icon: Handshake, tile: "text-[#0b5bd3]", pill: "bg-[#eaf1fd] text-[#0b5bd3]" },
  "Contract Manufacturing": { icon: Factory, tile: "text-emerald-600", pill: "bg-emerald-50 text-emerald-700" },
  "R&D & Science": { icon: FlaskConical, tile: "text-violet-600", pill: "bg-violet-100/70 text-violet-700" },
  "Global Exports": { icon: Globe2, tile: "text-sky-600", pill: "bg-sky-50 text-sky-700" },
  "Market Insights": { icon: TrendingUp, tile: "text-orange-600", pill: "bg-orange-100/70 text-orange-700" },
  "Regulatory Updates": { icon: ScrollText, tile: "text-teal-600", pill: "bg-teal-50 text-teal-700" },
};

export const getTheme = (category: string) =>
  CATEGORY_THEME[category] ?? CATEGORY_THEME["PCD Franchise"];
