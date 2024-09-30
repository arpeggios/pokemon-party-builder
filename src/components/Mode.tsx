import { MouseEvent, useContext } from 'react';
import { PokemonContext } from "../context/PokemonContext"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import pokeball from "../images/poke-ball.png"

export function Mode() {
  const { alignment, setAlignment } = useContext(PokemonContext);
  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    newAlignment ? setAlignment(newAlignment) : null;
  };

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      margin: "10px 0 20px 0"

    }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="discover">
          <img src={pokeball} />
        </ToggleButton>
        <ToggleButton value="stats">
          <ShowChartIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}