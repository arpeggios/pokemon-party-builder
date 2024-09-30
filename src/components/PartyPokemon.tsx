import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { IPartyPokemon } from "../interfaces/IPokemon";
import { Box, Button, Typography } from "@mui/material"

export function PartyPokemon({ partyMember, index }: IPartyPokemon) {
  const { dispatchPartyPokemon, setDisabled } = useContext(PokemonContext);

  function handleRemove(partyIndex: number) {
    dispatchPartyPokemon({
      type: "REMOVE_POKEMON",
      payload: partyIndex
    });

    setDisabled(false);
  }

  return (
    <>
      <Box className="this-pokemon" sx={{ textAlign: "center", textTransform: "capitalize", maxWidth: "100px" }}>
        <Box component="img" src={partyMember.sprites.front_default} alt={partyMember.name} />
        <Typography sx={{fontWeight: "bold"}} data-testid="party-pokemon-name">{partyMember.name}</Typography>
        <Typography data-testid="party-pokemon-id">ID: {partyMember.id}</Typography>
        <Typography sx={{ textTransform: "capitalize" }} data-testid="party-pokemon-type">Type: {partyMember.types[0].type.name} </Typography>
        <Button type="button" size="small" onClick={() => { handleRemove(index) }}>Remove</Button>
      </Box>
    </>
  )
}