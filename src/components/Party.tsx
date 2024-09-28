import { useContext } from "react";
import { PartyPokemon } from "./PartyPokemon";
import { PokemonContext } from "../context/PokemonContext";
import { IPokemon } from "../interfaces/IPokemon";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"

export function Party() {
  const { partyPokemon } = useContext(PokemonContext);

  return (
    <>
      <Box sx={{
        flexGrow: 1,
        justifyContent: "center",
        border: "2px solid white",
        padding: "15px 25px 15px",
        borderRadius: "15px",
        display: partyPokemon.length === 0 ? "none" : "flex"
      }}>
        <Stack>
          <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Your Party ({partyPokemon.length !== 6 ? partyPokemon.length : "max"})</Typography>
          <Grid container spacing={3}>
            {partyPokemon.length > 0 ?
              (partyPokemon.map((item: IPokemon, index: number) => {
                return (<PartyPokemon key={Math.floor(Math.random() * 1000000000)} partyMember={item} index={index} />)
              })) : null}
          </Grid>
        </Stack>
      </Box>
    </>
  )
}