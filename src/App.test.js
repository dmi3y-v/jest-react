import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("renders main App", () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  test("renders main App", async () => {
    render(<App />);
    // const helloWorldElement = screen.queryByText(/hello2/i);
    // expect(helloWorldElement).toBeNull();
    screen.debug();
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    screen.debug();
  });
});
