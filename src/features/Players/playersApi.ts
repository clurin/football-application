import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { PlayersApiResponse } from "./models/Players";


export const playersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPlayers: build.query<PlayersApiResponse, number>({
            query: (team) => ({
                url: `${ENDPOINTS.GET.PLAYERS}/squads?team=${team}`,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetPlayersQuery } = playersApi