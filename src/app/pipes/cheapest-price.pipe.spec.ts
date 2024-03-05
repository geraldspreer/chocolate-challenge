import { chocolateData } from "../../data/chocolate-data";
import { CheapestPricePipe } from "./cheapest-price.pipe";

fdescribe('CheapestPricePipe', () => {
  let pipe = new CheapestPricePipe();
  const pricesWithGrams = chocolateData.data[0].prices;

  it('provides the cheapest price', () => {
    expect(pipe.transform(pricesWithGrams)).toBe('' as any);
  });
});
