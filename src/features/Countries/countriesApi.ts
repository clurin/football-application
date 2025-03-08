import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { CountriesApiResponse } from "./models/Countries";

export const countriesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCountries: build.query<CountriesApiResponse, null>({
            query: () => ({
                url: ENDPOINTS.GET.COUNTRIES,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetCountriesQuery } = countriesApi