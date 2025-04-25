export interface ApiResponse<T> {
    get: string
    parameters: { live: string }
    errors: any[]
    results: number
    paging: { current: number; total: number }
    response: T
}

interface FixtureDetail {
    id: number
    referee: string | null
    timezone: string
    date: string
    timestamp: number
    periods: { first: number; second: number | null }
    venue: Record<string, any>
    status: Record<string, any>
}

interface Team {
    id: number
    name: string
    logo: string
    winner: boolean
}

interface Goals {
    home: number
    away: number
}

export interface Fixture {
    fixture: FixtureDetail
    league: Record<string, any>
    teams: { home: Team; away: Team }
    goals: Goals
    score: Record<string, any>
}