import { MouseEvent, useContext } from 'react';
import { PokemonContext } from "../context/PokemonContext"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export function Mode() {
  const { alignment, setAlignment } = useContext(PokemonContext);
  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
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
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' />
        </ToggleButton>
        <ToggleButton value="stats" >
          <ShowChartIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}