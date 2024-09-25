import { render, screen } from "@testing-library/react";
import { WildPokemon } from "../components/WildPokemon";
import { PartyPokemon } from "../components/PartyPokemon";
import { PokemonProvider } from "./PokemonContext";
import { mockPokemon } from "../test/mocks/handlers";
import { it } from "vitest";

describe("WildPokemon", async () => {
  it("displays pokemon name", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);

    const name = await screen.findByTestId("wild-pokemon-name");

    expect(name).toHaveTextContent(`A wild ${mockPokemon.name} appeared!`);
  });

  it("displays the pokemon sprite image", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);
    screen.debug();

    const sprite = await screen.findByTestId("wild-pokemon-img");

    expect(sprite).toHaveAttribute("src", mockPokemon.sprites.front_default);
  });
});

describe("Party Pokemon", async() => {
  it("displays the pokemon sprite", async () => {
    render(<PokemonProvider><PartyPokemon partyMember={mockPokemon} index={0}></PartyPokemon></PokemonProvider>);

    const name = await screen.findByTestId("party-pokemon-name");

    expect(name).toHaveTextContent(mockPokemon.name)
  });

  it("displays the pokemon id", async () => {
    render(<PokemonProvider><PartyPokemon partyMember={mockPokemon} index={0}/></PokemonProvider>);

    const theId = await screen.findByTestId("party-pokemon-id");

    expect(theId).toHaveTextContent(`ID: ${mockPokemon.id}`)
  });

  it("displays the pokemon type", async () => {
    render(<PokemonProvider><PartyPokemon partyMember={mockPokemon} index={0}></PartyPokemon></PokemonProvider>);

    const theType = await screen.findByTestId("party-pokemon-type");

    expect(theType).toHaveTextContent(`Type: ${mockPokemon.types[0].type.name}`)
  })
});
