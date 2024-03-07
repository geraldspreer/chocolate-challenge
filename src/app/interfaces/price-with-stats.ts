import { Price } from "./price";

export interface PriceWithStats extends Price {
  isCheapest: boolean;
  priceFor100g: number;
}
