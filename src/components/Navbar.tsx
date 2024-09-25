import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button, Box } from "@mui/material"
// todo: use AppBar
// import AppBar from "@mui/material/AppBar"

export function Navbar() {
  return (
    <>
      <nav style={{ marginTop: "16px", display: "inline-flex", width: "100%", alignItems: "center" }}>
        <Link component={RouterLink} to="/" sx={{ fontSize: "20px", textDecoration: "none", fontWeight: "bold" }}>
          Pokemon Party Builder
        </Link>
        <Typography sx={{marginLeft: "auto"}}>
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
      </nav >
    </>
  )
}