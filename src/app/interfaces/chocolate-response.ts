import { Chocolate } from "./chocolate";

export interface ChocolateResponse {
  pagination: {
    offset: number;
    limit: number;
    total: number;
  };
  data: Chocolate[];
}
