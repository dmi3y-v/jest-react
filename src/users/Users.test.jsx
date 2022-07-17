import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";

jest.mock("axios");

describe("TEST Users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Clementine Bauch",
        },
        {
          id: 2,
          name: "Patricia Lebsack",
        },
      ],
    };
  });
  test("renders main App", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
