import {Country} from '../models/Country';

export const getTotal = (countries: Country[]): Country => {
    return {
        name: 'TOTAL',
        cases: countries.reduce((previous: number, current: Country) => previous + current.cases, 0),
        deaths: countries.reduce((previous: number, current: Country) => previous + current.deaths, 0),
        continent: ''
    }
}
