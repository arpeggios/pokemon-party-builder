import { useContext } from "react";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { PokemonContext } from "../context/PokemonContext";
import { IPokemon } from "../interfaces/IPokemon";

export function Stats() {
  const { partyPokemon } = useContext(PokemonContext);

  console.log("partyPokemon")
  console.log(partyPokemon)

  return <>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        {partyPokemon.map((partyMember: IPokemon) => {
          return (
            <Box key={Math.floor(Math.random() * 1000000000)}>
              <Typography>{partyMember.name}</Typography>
              <List>
                {partyMember.stats.map((memberStat: Record<string, any>) => {
                  return <ListItem key={Math.floor(Math.random() * 1000000000)}>{memberStat.stat.name}: {memberStat.base_stat}</ListItem>
                })}
              </List>
            </Box>
          )
        })}
      </Stack>
    </Box>
  </>
}