import { Typography, Link, List, ListItem } from "@mui/material"

export function About() {
  return (
    <>
      <Typography variant="h1">
        What is this app?
      </Typography>
      <Typography sx={{ mb: 2 }}>
        This app lets you build a party of up to 6 Pokemon, so you can gaze upon their pixely goodness at any time.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Your Pokemon are your friends, and don't want to leave you. They will stay in your browser's local storage unless you remove them through the app or clear your local storage. They will be sad to leave you, but, who knows, maybe your paths will cross again some day.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        A random wild Pokemon will appear when the home page loads, or when you click the Random button. Or, you can type in the name or National Pokedex ID number (1-1025) to see a specific Pokemon.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Pokemon Party Builder is built with React, Material UI, and the <Link href="https://pokeapi.co/" target="_blank" rel="noopener">Pokeapi</Link>.
      </Typography>
      <Typography><Link href="https://github.com/arpeggios/pokemon-party-builder">GitHub</Link></Typography>
      <Typography variant="h1">
        Who built it?
      </Typography>
      <Typography>
        My name is Jason. I'm just some guy who likes Nintendo games. I've been workiing as a professional front-end developer since 2015, and have been building this app in my spare time since September 10, 2024.
      </Typography>
      <Typography variant="h1">
        Gimme some fun facts?
      </Typography>
      <Typography>
        That's not technically a question, but okay!
      </Typography>
      <List>
        <ListItem>• There is a trash bag Pokemon named Trubbish (#568). If Trubbish befriends you, it will stop stinking.</ListItem>
        <ListItem>• The first Pokemon games released were Red and Green. Green was only released in Japan. Later a special edition, Blue, was released, and it changed many of the Pokemon sprites. These are the sprites that are in the international versions of Pokemon Red and Blue.</ListItem>
        <ListItem>• GameFreak, the company that created Pokemon, started out as a DIY handwritten zine about arcade games.</ListItem>
        <ListItem>• The creator of Game Freak, Satoshi Tajiri, had a childhood hobby of collecting insects. He later studied Famicom (NES) programming and game design, but when he saw how Game Boys could communicate through a link cable, he decided that would be the best platform for a game about collecting and trading creatures.</ListItem>
      </List>
    </>
  )
}