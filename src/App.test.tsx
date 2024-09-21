import { render, screen } from "./utils/test-utils"
import App from "./App";

describe("App", () => {
  it("contains main tag", () => {
    render(<App />);
    const main = screen.queryByRole("main")
    expect(main).toBeInTheDocument;
  })
})