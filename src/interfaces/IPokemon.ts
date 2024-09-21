export interface IPokemon {
  name: string;
  id: number;
  types: Array<Record<string, any>>;
  sprites: Record<string, any>;
  [key: string]: any;
}

export interface IPartyPokemon {
  partyMember: IPokemon,
  index: number
}