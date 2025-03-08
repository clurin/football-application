interface Country {
    name: string
    code: string
    flag: string
}

export interface CountriesApiResponse {
    get: string
    parameters: Record<string, string>
    errors: any[]
    results: number
    paging: {
        current: number
        total: number
    }
    response: Country[]
}