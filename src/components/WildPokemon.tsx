import { Typography } from "@mui/material"
import { IPokemon } from "../interfaces/IPokemon"
import { Box } from "@mui/material"

type Props = {
  pokemon: IPokemon
}

export function WildPokemon({ pokemon }: Props) {
  if (pokemon) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography display="block" data-testid="wild-pokemon-name">A wild <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }} component={"span"} >{pokemon.name}</Typography> appeared!</Typography>
        <Box component="img" src={pokemon.sprites.front_default} alt={pokemon.name} data-testid="wild-pokemon-img" />
      </Box>
    )
  }
}