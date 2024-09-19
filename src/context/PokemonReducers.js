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
  switch (action.type) {
    case "SET_DISABLED":
      return payload;
    default:
      return state
  }
}