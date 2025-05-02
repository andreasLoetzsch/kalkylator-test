import { afterAll, afterEach, beforeAll, describe } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Calcultaor } from "../components/Calculator";

import App from "../App";

describe("Calculator test", async () => {
  it("testing addition", async () => {
    render(<Calcultaor />);
    const buttonOne = screen.getByRole("button", { name: "1" });
    const buttonTwo = screen.getByRole("button", { name: "2" });
    const buttonPlus = screen.getByRole("button", { name: "+" });
    const buttonEquals = screen.getByRole("button", { name: "=" });
    const buttonAC = screen.getByRole("button", { name: "AC" });

    fireEvent.click(buttonOne);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonEquals);

    await waitFor(() => {
      expect(screen.getByText("3", { selector: "p" })).toBeInTheDocument();
    });

    fireEvent.click(buttonAC);
  });
});
