import { disableElements, randomPokemon } from "../modules/util";
import { DisplayPokemon } from "./DisplayPokemon"

export function SearchForm({ data, getPokemon }) {
  function handleRandom() {
    getPokemon(randomPokemon());
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    disableElements(true);

    const val = document.querySelector("#entered-pokemon").value.trim().toLowerCase();

    if (val && (typeof val === "string" || typeof val === "number")) {
      getPokemon(val);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="entered-pokemon"
          type="text"
          placeholder="Enter Pokemon name or ID"
          style={{ width: "200px" }}
          required
        />
        <div>
          <button type="button" onClick={handleRandom}>Random</button>
          <button id="submit-search" type="submit">Submit</button>
        </div>
      </form>
      {{ data } &&
        <DisplayPokemon pokemon={data} />
      }
    </>
  )
}