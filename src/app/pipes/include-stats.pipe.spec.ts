import { chocolateData } from '../../fixtures/chocolate-data';
import { IncludeStatsPipe } from './include-stats.pipe';

describe('IncludeStatsPipe', () => {
  const onlyGrams = chocolateData.data[0];
  const mixedUnits = chocolateData.data[1];

  it('create an instance', () => {
    const pipe = new IncludeStatsPipe();
    expect(pipe).toBeTruthy();
  });

  // TODO: Refactor these tests to make them more readable
  // * use spearking names for the price objects to be tested
  // like "Edeka 100g" instead of "prices[0]"
  //
  // * also use only one expect per test - this is a general rule
  // broken here for the sake of speed and simplicity

  it('should return chocolate with stats', () => {
    const pipe = new IncludeStatsPipe();
    const result = pipe.transform([onlyGrams]);
    expect(result[0].averagePrice).toBeDefined();
    expect(result[0].prices[0].isCheapest).toBeDefined();
    expect(result[0].prices[0].priceFor100g).toBeDefined();
  });

  describe('converts the correct price for 100g', () => {
    it('for prices with only grams', () => {
      const pipe = new IncludeStatsPipe();
      const result = pipe.transform([onlyGrams]);
      expect(result[0].prices[0].priceFor100g).toBe(2.09);
      expect(result[0].prices[1].priceFor100g).toBe(1.99);
      expect(result[0].prices[2].priceFor100g).toBe(1.75);
    });

    it('finds the correct average', () => {
      const pipe = new IncludeStatsPipe();
      const result = pipe.transform([onlyGrams]);
      expect(result[0].averagePrice).toBe(1.94);
    });

    it('finds the cheapest price', () => {
      const pipe = new IncludeStatsPipe();
      const result = pipe.transform([onlyGrams]);
      expect(result[0].averagePrice).toBe(1.94);
    });

    it('for prices with mixed units', () => {
      const pipe = new IncludeStatsPipe();
      const result = pipe.transform([mixedUnits]);
      expect(result[0].prices[0].priceFor100g).toBe(1.19);
      expect(result[0].prices[1].priceFor100g).toBe(1.19);
      expect(result[0].prices[2].priceFor100g).toBe(1.09);
      expect(result[0].prices[3].priceFor100g).withContext('with 0.2 kg').toBe(1.0);
    });
  });
});
