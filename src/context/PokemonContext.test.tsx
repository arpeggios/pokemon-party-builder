import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { MemoryRouter } from "react-router-dom";
import { PokemonProvider } from "./PokemonContext";
import { WildPokemon } from "../components/WildPokemon";
import { Search } from "../components/Search";
import { act } from "react";
import { IPokemon } from "../interfaces/IPokemon";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
const mockJson: IPokemon = {
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
    return HttpResponse.json(mockJson)
  })
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("WildPokemon", async () => {
  // await act(async () => {
  // render(
  //   // <MemoryRouter>
  //   // <PokemonProvider>
  //   //   <Search>
  //   <WildPokemon pokemon={mockJson} />
  //   //   </Search>
  //   // </PokemonProvider>
  //   // </MemoryRouter>
  // );
  // });

  // display the wild pokemon elements


  // await pause();
  // console.log("mockJson");
  // console.log(mockJson);
  // screen.debug();

  it("displays pokemon name", async () => {
    render(<WildPokemon pokemon={mockJson} />);
    const name = await screen.findByTestId("wild-pokemon-name");
    expect(name).toHaveTextContent(`Name: ${mockJson.name}`);
  });

  it("displays pokemon id", async () => {
    render(<WildPokemon pokemon={mockJson} />);
    const theId = await screen.findByTestId("wild-pokemon-id");
    expect(theId).toHaveTextContent(`ID: ${mockJson.id}`)
  });

  it("displays the pokemon type", async () => {
    render(<WildPokemon pokemon={mockJson} />);  
    const theType = await screen.findByTestId("wild-pokemon-type");
    expect(theType).toHaveTextContent(`Type: ${mockJson.types[0].type.name}`)
  });

  it("displays the pokemon sprite image", async () => {
    render(<WildPokemon pokemon={mockJson} />);
    screen.debug();

    const sprite = await screen.findByTestId("wild-pokemon-img");

    // expect(screen.findByTestId("wild-pokemon-img"))
    expect(sprite).toHaveAttribute("src", mockJson.sprites.front_default);
  });
});

// const pause = () => new Promise(resolve => {
//   setTimeout(resolve, 1000);
// })