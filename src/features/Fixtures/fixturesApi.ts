import { api } from "../../app/api"
import { ENDPOINTS } from "../../app/endpoints"
import { key } from "../../app/key"
import { ApiResponse, Fixture } from "./models/Matches"

export const fixturesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getFixtures: build.query<ApiResponse<Fixture[]>, string>({
            query: () => ({
                url: `${ENDPOINTS.GET.FIXTURES}?league=39&season=2023`,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetFixturesQuery } = fixturesApi