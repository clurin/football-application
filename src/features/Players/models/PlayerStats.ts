interface BirthInfo {
    date: string;
    place: string;
    country: string;
}

interface Player {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: BirthInfo;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
}

interface Team {
    id: number;
    name: string;
    logo: string;
}

interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
}

interface Games {
    appearences: number;
    lineups: number;
    minutes: number;
    number: number | null;
    position: string;
    rating: string;
    captain: boolean;
}

interface Substitutes {
    in: number;
    out: number;
    bench: number;
}

interface Shots {
    total: number;
    on: number;
}

interface Goals {
    total: number;
    conceded: number | null;
    assists: number;
    saves: number | null;
}

interface Passes {
    total: number;
    key: number;
    accuracy: number;
}

interface Tackles {
    total: number;
    blocks: number;
    interceptions: number;
}

interface Duels {
    total: number | null;
    won: number | null;
}

interface Dribbles {
    attempts: number;
    success: number;
    past: number | null;
}

interface Fouls {
    drawn: number;
    committed: number;
}

interface Cards {
    yellow: number;
    yellowred: number;
    red: number;
}

interface Penalty {
    won: number | null;
    commited: number | null;
    scored: number;
    missed: number;
    saved: number | null;
}

interface Statistics {
    team: Team;
    league: League;
    games: Games;
    substitutes: Substitutes;
    shots: Shots;
    goals: Goals;
    passes: Passes;
    tackles: Tackles;
    duels: Duels;
    dribbles: Dribbles;
    fouls: Fouls;
    cards: Cards;
    penalty: Penalty;
}

interface PlayerResponse {
    player: Player;
    statistics: Statistics[];
}

export interface PlayerStatsApiResponse {
    get: string;
    parameters: {
        id: string;
        season: string;
    };
    errors: any[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: PlayerResponse[];
}