// todo: handle disabled with disabledReducer?
export function disableElements(disable: boolean) {
  var searchInput = document.querySelector<HTMLFormElement>("#entered-pokemon");
  var submitBtn = document.querySelector("#submit-search");
  var catchBtn = document.querySelector("#catch");
  var randomBtn = document.querySelector("#random");

  if (disable) {
    searchInput?.setAttribute("disabled", "disabled");
    submitBtn?.setAttribute("disabled", "disabled");
    catchBtn?.setAttribute("disabled", "disabled");
    randomBtn?.setAttribute("disabled", "disabled");
    searchInput?.focus();
  } else {
    searchInput?.removeAttribute("disabled");
    submitBtn?.removeAttribute("disabled");
    catchBtn?.removeAttribute("disabled");
    randomBtn?.removeAttribute("disabled");
    searchInput?.focus();
    
    if(searchInput) searchInput.value = '';
  }
}

export function randomPokemon() {
  return Math.floor(Math.random() * 1025 + 1);
}