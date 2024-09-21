export interface IPokemon {
  name?: string;
  id?: number;
  [key: string]: any;
}

export interface IPartyPokemon {
  partyMember: IPokemon,
  index: number
}