export function partyPokemonReducer(state, action) {
  switch (action.type) {
    case "ADD_POKEMON":
      return [...state, action.payload]
    case "REMOVE_POKEMON":
      const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder"));

      localStorageData.splice(action.payload, 1);

      return localStorageData;
    default:
      return state;
  }
}

export function wildPokemonReducer(state, action) {
  switch (action.type) {
    case "SET_WILD_POKEMON":
      return action.payload;
    default:
      return state;
  }
}

export function disabledReducer(state, action) {
  const inputs = action.payload.inputs;
  const partyPokemon = action.payload.partyPokemon;

  switch (action.type) {
    case "DISABLE":
      for (const input in inputs) {
        // if (document.querySelector(inputs[input]) && input !== "catchBtn") {
        if (document.querySelector(inputs[input])) {
          console.log(`input: ${input}`)
          console.log(inputs[input])
          console.log("document.querySelector(inputs[input])")
          console.log(document.querySelector(inputs[input]))
          console.log(`partyPokemon`)
          console.log(partyPokemon)

          document.querySelector(inputs[input]).setAttribute("disabled", "disabled");

          // if (partyPokemon.length >= 6 && input === "catchBtn") {
          //   document.querySelector(inputs[input]).setAttribute("disabled", "disabled");
          // }
        }
      }

      return;
    case "ENABLE":
      for(const input in inputs) {
        if (document.querySelector(inputs[input]) && input !== "catchBtn") {
          document.querySelector(inputs[input]).removeAttribute("disabled");

          // if (partyPokemon.length >= 6 && input === "catchBtn") {
          //   document.querySelector(inputs[input]).setAttribute("disabled", "disabled");
          // }
        }
      }

      return;
    default:
      return state
  }
}