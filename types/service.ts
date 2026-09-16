export type Price = {
  qualifier?: string;
  currency: "¥";
  amount: string;
  suffix: "〜";
};

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  items: readonly string[];
};

export type PricePlan = {
  title: string;
  price: Price;
  leadTime: string;
};

export type CaseStudy = {
  industry: string;
  title: string;
  description: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
