export interface IPokemon {
    id: string;
    name: string;
    sprite: string;
}

export interface IStats {
    baseStat: number;
    statName: string;
}

export interface IPokemonDetail {
    pokemon: IPokemon;
    stats: IStats[];    
}