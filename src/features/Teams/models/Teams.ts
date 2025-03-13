export interface TeamsApiResponse {
    get: string;
    parameters: {
        id: string;
    };
    errors: any[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: TeamResponse[];
}

interface TeamResponse {
    team: Team;
    venue: Venue;
}

interface Team {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
}

interface Venue {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
}