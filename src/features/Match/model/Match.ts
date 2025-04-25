export type Team = {
    id: number
    name: string
    logo: string
    winner: boolean | null
}
type Match = {
    team: {
        id: number
        name: string
        logo: string
    }
    statistics: {
        type: string
        value: number | string | null
    }[]
}

export type MatchApiResponce = {
    response: Match[]
}
