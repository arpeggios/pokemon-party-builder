export function disableElements(disable: boolean, partyLength: number) {
  const inputs: {[key: string]: string} = {
    searchInput: "#entered-pokemon",
    submitBtn: "#submit-search",
    randomBtn: "#random",
    catchBtn: "#catch"
  }

  // var searchInput = document.querySelector<HTMLFormElement>("#entered-pokemon");
  // var submitBtn = document.querySelector("#submit-search");
  // var catchBtn = document.querySelector("#catch");
  // var randomBtn = document.querySelector("#random");

  for (const input in inputs) {
    // if (document.querySelector(inputs[input]) && input !== "catchBtn") {
    if (document.querySelector(inputs[input]) && disable === true) {
      // console.log(`input: ${input}`)
      // console.log(inputs[input])
      // console.log("document.querySelector(inputs[input])")
      // console.log(document.querySelector(inputs[input]))
      // console.log(`partyPokemon`)
      // console.log(partyPokemon)

      document.querySelector(inputs[input])?.setAttribute("disabled", "disabled");

      // if (partyPokemon.length >= 6 && input === "catchBtn") {
      //   document.querySelector(inputs[input]).setAttribute("disabled", "disabled");
      // }
    } else if (document.querySelector(inputs[input]) && disable === false) {
      if (input !== "catchBtn" || (input === "catchBtn" && partyLength < 6)) {
        document.querySelector(inputs[input])?.removeAttribute("disabled");

        console.log(partyLength)

        console.log('if (input !== "catchBtn" || (input === "catchBtn" && partyLength < 6))')
      }
    }
  }

  // if (disable) {
  //   searchInput?.setAttribute("disabled", "disabled");
  //   submitBtn?.setAttribute("disabled", "disabled");
  //   catchBtn?.setAttribute("disabled", "disabled");
  //   randomBtn?.setAttribute("disabled", "disabled");
  //   searchInput?.focus();
  // } else {
  //   searchInput?.removeAttribute("disabled");
  //   submitBtn?.removeAttribute("disabled");
  //   catchBtn?.removeAttribute("disabled");
  //   randomBtn?.removeAttribute("disabled");
  //   searchInput?.focus();
    
  //   if(searchInput) searchInput.value = '';
  // }
}

export function randomPokemon() {
  return Math.floor(Math.random() * 1025 + 1);
}