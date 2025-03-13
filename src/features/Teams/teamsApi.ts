import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { TeamsApiResponse } from "./models/Teams";

export const teamsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTeams: build.query<TeamsApiResponse, number>({
            query: (id) => ({
                url: `${ENDPOINTS.GET.TEAMS}?league=${id}&season=2021`,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetTeamsQuery } = teamsApi