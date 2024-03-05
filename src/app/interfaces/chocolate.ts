import { Price } from "./price";

export interface Chocolate {
  id: string;
  name: string;
  brand: string;
  currency: string;
  prices: Price[];
  nutrition: Nutrition;
}

interface Nutrition {
  fat: {
    total: number;
    saturated: number;
  };
  carbohydrates: {
    total: number;
    sugar: number;
  };
  protein: number;
  salt: number;
}
