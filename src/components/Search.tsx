import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { disableElements, randomPokemon } from "../modules/util";
import { WildPokemon } from "./WildPokemon"
import { Box, TextField, Button } from "@mui/material";

export function Search() {
  const { wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon } = useContext(PokemonContext);

  function handleRandom() {
    disableElements(true);
    fetchPokemon(randomPokemon());
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    disableElements(true);

    const val: string = (document.querySelector("#entered-pokemon") as HTMLInputElement).value.trim().toLowerCase();

    if (val && (typeof val === "string" || typeof val === "number")) {
      fetchPokemon(val);
    }
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
        <Box sx={{mb: 2}}>
          <Button id="random" type="button" variant="outlined" onClick={handleRandom}>Random</Button>
          <Button id="catch" type="button" variant="contained" onClick={handleCatch} sx={{ marginLeft: "10px" }} color="secondary">Catch</Button>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            multiline={true}
            rows={1}
            id="entered-pokemon"
            sx={{
              width: "188px",
              marginBottom: "10px"
            }}
            label="Pokemon name or ID"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" sx={{ marginLeft: "10px", marginBottom: "10px" }}>
            Search
          </Button>
        </Box>
      </Box>
    </>
  )
}