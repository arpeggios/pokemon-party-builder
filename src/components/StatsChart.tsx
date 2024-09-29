import { Box } from "@mui/material"
import { Line } from "react-chartjs-2"

interface Props {
  chartData: any
}

const labelColor = "#d9d9d9"

export function StatsChart({ chartData }: Props) {
  return (
    <Box>
      <Line data={chartData} options={{
        plugins: {
          title: {
            display: true,
            text: "Stats"
          },
          legend: {
            labels: {
              color: labelColor
            }
          }
        },
        responsive: true,
        aspectRatio: (window.innerWidth > 700) ? 2 : 1,
        scales: {
          x: {
            ticks: {
              color: labelColor
            }
          },
          y: {
            ticks: {
              color: labelColor
            }
          }
        }
      }} />
    </Box>
  )
}