import { render, screen } from "@testing-library/react";
import { WildPokemon } from "../components/WildPokemon";
import { mockPokemon } from "../test/mocks/handlers";

describe("WildPokemon", async () => {
  it("displays pokemon name", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);
    const name = await screen.findByTestId("wild-pokemon-name");
    expect(name).toHaveTextContent(`Name: ${mockPokemon.name}`);
  });

  it("displays pokemon id", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);
    const theId = await screen.findByTestId("wild-pokemon-id");
    expect(theId).toHaveTextContent(`ID: ${mockPokemon.id}`)
  });

  it("displays the pokemon type", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);  
    const theType = await screen.findByTestId("wild-pokemon-type");
    expect(theType).toHaveTextContent(`Type: ${mockPokemon.types[0].type.name}`)
  });

  it("displays the pokemon sprite image", async () => {
    render(<WildPokemon pokemon={mockPokemon} />);
    screen.debug();
    const sprite = await screen.findByTestId("wild-pokemon-img");
    expect(sprite).toHaveAttribute("src", mockPokemon.sprites.front_default);
  });
});