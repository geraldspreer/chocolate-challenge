export interface Chocolate {
  id: string;
  name: string;
  brand: string;
  currency: string;
  prices: Price[];
  nutrition: Nutrition;
}

interface Price {
  price: number;
  shop: string;
  link: string;
  unit: string;
  amount: number;
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
