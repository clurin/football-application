import { api } from "../../app/api";
import { ENDPOINTS } from "../../app/endpoints";
import { key } from "../../app/key";
import { PlayersApiResponse } from "./models/Players";
import { PlayerStatsApiResponse } from "./models/PlayerStats";


export const playersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPlayers: build.query<PlayersApiResponse, number>({
            query: (team_id) => ({
                url: `${ENDPOINTS.GET.PLAYERS}?team=${team_id}`,
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        }),
        getPlayerStats: build.query<PlayerStatsApiResponse, number>({
            query: (player_id) => ({
                url: ENDPOINTS.GET.PLAYER_STATS,
                params: { id: player_id, season: 2023 },
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": key
                }
            })
        })
    })
})

export const { useGetPlayersQuery, useGetPlayerStatsQuery } = playersApi