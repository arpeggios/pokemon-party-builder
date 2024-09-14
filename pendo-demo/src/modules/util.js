export function disableElements(disable) {
  var searchInput = document.querySelector("#entered-pokemon");
  var submitBtn = document.querySelector("#submit-search");

  if (disable) {
    searchInput.setAttribute("disabled", "disabled");
    submitBtn.setAttribute("disabled", "disabled");
    searchInput.focus();
  } else {
    searchInput.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    searchInput.focus();
    searchInput.value = '';
  }
}

export function randomPokemon() {
  return Math.floor(Math.random() * 1025 + 1);
}