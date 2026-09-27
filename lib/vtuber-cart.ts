export type ShopProduct = {
  id: string;
  name: string;
  price: number;
  category: "apparel" | "acrylic" | "digital";
};

export type CartLine = ShopProduct & { quantity: number };

export function updateCart(lines: CartLine[], product: ShopProduct, delta: number): CartLine[] {
  const current = lines.find((line) => line.id === product.id);
  const nextQuantity = (current?.quantity ?? 0) + delta;

  if (nextQuantity <= 0) return lines.filter((line) => line.id !== product.id);
  if (current) return lines.map((line) => line.id === product.id ? { ...line, quantity: nextQuantity } : line);
  return [...lines, { ...product, quantity: nextQuantity }];
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.price * line.quantity, 0);
}

export function cartItemCount(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.quantity, 0);
}

