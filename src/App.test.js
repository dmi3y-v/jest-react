import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(helloWorldElement).toHaveClass("myDiv");
    screen.debug();
  });
  test("click event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    //fireEvent.click(btn);
    userEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("input event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    //fireEvent.input(input, { target: { value: "123123" } });
    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
