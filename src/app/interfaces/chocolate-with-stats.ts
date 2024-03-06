import { Chocolate } from "./chocolate";
import { PriceWithStats } from "./price-with-stats";

export interface ChocolateWithStats extends Chocolate {
  averagePrice: number;
  prices: PriceWithStats[];
}

