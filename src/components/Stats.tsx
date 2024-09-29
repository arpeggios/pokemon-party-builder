import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { PokemonContext } from "../context/PokemonContext";
import { IPokemon } from "../interfaces/IPokemon";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { StatsChart } from "./StatsChart";
import { IChartData } from "../interfaces/IChartData";

Chart.register(CategoryScale);

export function Stats() {
  const { partyPokemon, alignment, setAlignment } = useContext(PokemonContext);
  const colors = ["#8931EF", "#f2eb19", "#FF00BD", "#0057E9", "#87E911", "#E11845"];
  const [chartData, setChartData] = useState<IChartData>(getChartData);

  function getChartData() {
    return {
      labels: partyPokemon[0].stats.map((data:any) => data.stat.name.toUpperCase()), // stats
      datasets: partyPokemon.map((item:IPokemon, index:number) => {
        return {
          label: item.name.toUpperCase(), // pokemon name
          data: item.stats.map((stat:any) => {
            return stat.base_stat
          }),
          backgroundColor: [
            colors[index]
          ],
          borderColor: colors[index],
          borderWidth: 2
        }
      })
    }
  }

  useEffect(() => {
    partyPokemon.length === 0 ? setAlignment("discover") : setChartData(getChartData);
  }, [alignment === "stats", partyPokemon]);

  return <>
    <Box sx={{ display: "block", justifyContent: "center" }}>
      <StatsChart chartData={chartData} />
    </Box>
  </>
}