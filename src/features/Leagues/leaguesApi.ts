import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { LeaguesApiResponse } from "./models/Leagues";

export const leaguesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getLeagues: build.query<LeaguesApiResponse, null>({
            query: () => ({
                url: ENDPOINTS.GET.LEAGUES,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetLeaguesQuery } = leaguesApi