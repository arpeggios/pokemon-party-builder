import { http, HttpResponse } from "msw";
import { IPokemon } from "../../interfaces/IPokemon";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
export const mockPokemon: IPokemon = {
  "name": "pikachu",
  "id": 25,
  "types": [
    {
      "type": {
        "name": "electric"
      }
    }
  ],
  "sprites": {
    "front_default": "../test/assets/25.png"
  }
}

export const handlers = [
  http.get(`https://pokeapi.co/api/v2/pokemon${/[0-9]+/}`, () => {
    return HttpResponse.json(mockPokemon)
  })
];