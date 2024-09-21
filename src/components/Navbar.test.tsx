import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar"
import { render, screen } from "../utils/test-utils";

describe("Navbar", () => {
  it("displays page title", () => {
    render(<Router><Navbar /></Router>);
    const pagetitle = screen.getByText("Pokemon Party Builder");
    expect(pagetitle).toBeInTheDocument();
  })
})