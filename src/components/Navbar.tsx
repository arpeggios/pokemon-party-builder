import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button, Box } from "@mui/material"
// todo: use AppBar
// import AppBar from "@mui/material/AppBar"

export function Navbar() {
  return (
    <>
      <Box component={"nav"} sx={{ marginTop: "16px", display: "flex", width: "100%", alignItems: "center", flexDirection: {xs: "column", sm: "row"}} }>
        <Link component={RouterLink} to="/" sx={{ fontSize: "20px", textDecoration: "none", fontWeight: "bold" }}>
          Pokemon Party Builder
        </Link>
        <Typography sx={{marginLeft: {sm: "auto"}}}>
          <Link component={RouterLink} to="/" sx={{padding: "10px"}}>
            <Button>
              Home
            </Button>
          </Link>
        </Typography>
        <Typography>
          <Link component={RouterLink} to="about" sx={{padding: "10px"}}>
            <Button>
              About
            </Button>
          </Link>
        </Typography>
      </Box >
    </>
  )
}