import { useContext, useEffect, useState } from "react";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { PokemonContext } from "../context/PokemonContext";
import { IPokemon } from "../interfaces/IPokemon";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { StatsChart } from "./StatsChart";
import { IStats } from "../interfaces/IStats";
import { IChartData } from "../interfaces/IChartData";

Chart.register(CategoryScale);

export function Stats() {
  const { partyPokemon, alignment } = useContext(PokemonContext);
  const [statsForSinglePokemon, setStatsForSinglePokemon] = useState<Array<IStats>|undefined>();

  const [chartData, setChartData] = useState<IChartData>({
    labels: statsForSinglePokemon?.map((data) => data.statName), 
    datasets: [
      {
        label: "Users Gained ",
        data: statsForSinglePokemon?.map((data) => data.statValue),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


  // console.log("partyPokemon")
  // console.log(partyPokemon)

  useEffect(() => {
    setStatsForSinglePokemon([
      {statName: "hp", statValue: 115},
      {statName: "attack", statValue: 145},
      {statName: "defense", statValue: 92},
      {statName: "special-attack", statValue: 75},
      {statName: "special-defense", statValue: 86},
      {statName: "speed", statValue: 87},
    ]);
  }, [alignment === "stats"]);

  useEffect(() => {
    console.log("statsForSinglePokemon")
    console.log(statsForSinglePokemon)

    setChartData({
      labels: statsForSinglePokemon?.map((data) => data.statName), 
      datasets: [
        {
          label: "pokemon 1 ",
          data: statsForSinglePokemon?.map((data) => data.statValue),
          backgroundColor: [
            "white",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2
        }
      ]
    })
  }, [statsForSinglePokemon]);

  return <>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <StatsChart chartData={chartData}/>
        <Stack direction="row">
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
      </Stack>

    </Box>
  </>
}