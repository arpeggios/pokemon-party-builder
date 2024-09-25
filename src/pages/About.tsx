import { Typography, Link } from "@mui/material"

export function About() {
  return (
    <>
      <Typography variant="h1">
        About
      </Typography>
      <Typography>
        Hi, I'm Jason, and this is an app I'm building in my spare time that was started on September 10, 2024. It's made with React, Material UI, and the <Link href="https://pokeapi.co/" target="_blank" rel="noopener">Pokeapi</Link>, and it uses local storage to save your party automatically.
      </Typography>
    </>
  )
}