import type { Price } from "@/types/service";

export function formatPriceLabel(price: Price): string {
  const main = `${price.currency}${price.amount}${price.suffix}`;
  return price.qualifier ? `${price.qualifier} ${main}` : main;
}
