import {useEffect, useState} from 'react';
import {ApiResult} from '../models/ApiResult';
import {getRatio} from '../utils/getRatio';

//const BASE_URL = `https://covid19-update-api.herokuapp.com/api/v1/world`;
const BASE_URL = 'https://api.jsonbin.io/b/60dd8bfe55b7245a20d2e743';

export const useCovidApi = () => {

    const [data, setData] = useState<ApiResult>(new ApiResult());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(BASE_URL);
                const json: ApiResult = await result.json();
                json.countries = json.countries.map(country => {
                    country.ratio = getRatio(country);
                    return country;
                })
                setData(json);

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [data, isLoading, isError] as [ApiResult, boolean, boolean];
};
