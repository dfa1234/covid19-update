import {Country} from '../models/Country';

export const getRatio = (country: Country): number => {
    const ratio = parseFloat((country.deaths * 100 / country.cases).toFixed(2));
    return isNaN(ratio) ? 0 : ratio;
}


