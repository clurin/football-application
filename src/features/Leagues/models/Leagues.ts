interface League {
    id: number
    name: string
    type: string
    logo: string
}

interface Country {
    name: string
    code: string
    flag: string
}

interface FixturesCoverage {
    events: boolean
    lineups: boolean
    statistics_fixtures: boolean
    statistics_players: boolean
}

interface Coverage {
    fixtures: FixturesCoverage
    standings: boolean
    players: boolean
    top_scorers: boolean
    top_assists: boolean
    top_cards: boolean
    injuries: boolean
    predictions: boolean
    odds: boolean
}

interface Season {
    year: number
    start: string
    end: string
    current: boolean
    coverage: Coverage
}

interface LeagueResponse {
    league: League
    country: Country
    seasons: Season[]
}

export interface LeaguesApiResponse {
    get: string
    parameters: Record<string, string>
    errors: any[]
    results: number
    paging: {
        current: number
        total: number
    }
    response: LeagueResponse[]
}
