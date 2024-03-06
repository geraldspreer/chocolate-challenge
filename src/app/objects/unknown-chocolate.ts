import { ChocolateWithStats } from "../interfaces/chocolate-with-stats";

export const UnknownChocolate: ChocolateWithStats = {
    id: '',
    name: 'Unbekanntes Produkt',
    brand: 'Nicht bekannt',
    currency: '€',
    prices: [],
    nutrition: {
        fat: {
            total: 0,
            saturated: 0
        },
        carbohydrates: {
            total: 0,
            sugar: 0
        },
        protein: 0,
        salt: 0
    },
    averagePrice: 0
};

