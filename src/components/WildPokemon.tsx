import { Typography } from "@mui/material"
import { IPokemon } from "../interfaces/IPokemon"
import { Box } from "@mui/material"

type Props = {
  pokemon: IPokemon
}

export function WildPokemon({ pokemon }: Props) {
  if (pokemon) {
    return (
      <Box sx={{textAlign: "center"}}>
        <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }} data-testid="wild-pokemon-name" >{pokemon.name}</Typography>
        <Typography data-testid="wild-pokemon-id">ID: {pokemon.id}</Typography>
        <Typography sx={{ textTransform: "capitalize" }} data-testid="wild-pokemon-type">Type: {pokemon.types[0].type.name} </Typography>
        <Box component="img" src={pokemon.sprites.front_default} alt={pokemon.name} data-testid="wild-pokemon-img" />
      </Box>
    )
  }
}