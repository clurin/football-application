interface Team {
    id: number;
    name: string;
    logo: string;
}

interface Player {
    id: number;
    name: string;
    age: number;
    number: number | null;
    position: string;
    photo: string;
}

interface SquadResponse {
    team: Team;
    players: Player[];
}

export interface PlayersApiResponse {
    get: string;
    parameters: {
        team: string;
    };
    errors: any[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: SquadResponse[];
}