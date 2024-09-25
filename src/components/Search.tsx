import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { disableElements, randomPokemon } from "../modules/util";
import { WildPokemon } from "./WildPokemon"
import { Box, TextField, Button } from "@mui/material";

export function Search() {
  const { wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon } = useContext(PokemonContext);
  const [inputValue, setInputValue] = useState('');

  function handleRandom() {
    disableElements(true);
    fetchPokemon(randomPokemon());
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    disableElements(true);

    if (inputValue && (typeof inputValue === "string" || typeof inputValue === "number")) {
      console.log('fetch')
      fetchPokemon(inputValue);
    }

    setInputValue('');
  }

  function handleCatch() {
    if (partyPokemon.length < 6) {
      disableElements(true);
      dispatchPartyPokemon({
        type: "ADD_POKEMON",
        payload: wildPokemon
      })
      fetchPokemon(randomPokemon());
    }
  }

  return (
    <>
      {{ wildPokemon } &&
        <WildPokemon pokemon={wildPokemon} />
      }
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{mb: 3}}>
          <Button id="random" type="button" variant="outlined" onClick={handleRandom}>Random</Button>
          <Button id="catch" type="button" variant="contained" onClick={handleCatch} sx={{ marginLeft: "10px" }} color="secondary">Catch</Button>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            id="entered-pokemon"
            sx={{
              width: "188px",
              marginBottom: "10px"
            }}
            label="Pokemon name or ID"
            variant="outlined"
            required
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value.trim().toLowerCase())}}
          />
          <Button type="submit" variant="contained" sx={{ marginLeft: "10px", marginBottom: "10px" }}>
            Search
          </Button>
        </Box>
      </Box>
    </>
  )
}