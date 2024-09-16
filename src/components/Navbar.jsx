import { Link } from "react-router-dom";

export function Navbar() {
  const css = `
    nav {
      display: inline-flex;
      width: 100%;
      align-items: center;
    }

    nav a {
      text-decoration: none;
      padding: 10px;
    }

    .nav-title {
      font-weight: 800;
      font-size: 24px;
    }

    .nav-links {
      margin-left: auto;
      font-weight: 600;
    }
  `

  return (
    <>
      <style>{css}</style>
      <nav>
        <div className="nav-title">
          <Link to="/">
            Pokemon Party Builder
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">
            Catch
          </Link>
          <Link to="about">
            About
          </Link>
        </div>
      </nav>
    </>
  )
}