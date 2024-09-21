export function disableElements(disable: boolean) {
  const inputs: { [key: string]: string } = {
    searchInput: "#entered-pokemon",
    submitBtn: "#submit-search",
    randomBtn: "#random",
    catchBtn: "#catch"
  }

  for (const input in inputs) {
    if (disable === true) {
      document.querySelector(inputs[input])?.setAttribute("disabled", "disabled");
    } else {
      document.querySelector(inputs[input])?.removeAttribute("disabled");
    }
  }
}

export function randomPokemon() {
  return Math.floor(Math.random() * 1025 + 1);
}