import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { MatchApiResponce } from "./model/Match";

export const matchApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMatch: build.query<MatchApiResponce, string>({
            query: (fixtureId) => ({
                url: `${ENDPOINTS.GET.FIXTURES_STATISTICS}?fixture=${fixtureId}`,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetMatchQuery } = matchApi