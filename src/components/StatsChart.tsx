import { Box } from "@mui/material"
import { Pie } from "react-chartjs-2"
import { Line } from "react-chartjs-2"
import { IStats } from "../interfaces/IStats"
import { IChartData } from "../interfaces/IChartData"

interface Props {
  // chartData: Array<IStats>
  // chartData: IChartData
  chartData: any
}

export function StatsChart({ chartData }: Props) {
  return (
    <Box>
      <Line data={chartData} options={{
        plugins: {
          title: {
            display: true,
            text: "Pokemon Stats"
          }
        }
      }} />
    </Box>
  )
}