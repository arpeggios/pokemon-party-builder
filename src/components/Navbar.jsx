export function Navbar() {
  const css = `
    nav {
      display: inline-flex;
      width: 100%;
    }

    .nav-links {
      margin-left: auto;
    }
  `

  return (
    <>
      <style>{css}</style>
      <nav>
        <div className="nav-title">
          Pokemon Party Builder
        </div>
        <div className="nav-links">
          Catch
          About
        </div>
      </nav>
    </>
  )
}