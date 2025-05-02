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
  it("testing subtraction", async () => {
    render(<Calcultaor />);

    const buttonNine = screen.getByRole("button", { name: "9" });
    const buttonThree = screen.getByRole("button", { name: "3" });
    const buttonMinus = screen.getByRole("button", { name: "-" });
    const buttonEquals = screen.getByRole("button", { name: "=" });
    const buttonAC = screen.getByRole("button", { name: "AC" });

    fireEvent.click(buttonNine);
    fireEvent.click(buttonMinus);
    fireEvent.click(buttonThree);
    fireEvent.click(buttonEquals);

    await waitFor(() => {
      expect(screen.getByText("6", { selector: "p" })).toBeInTheDocument();
    });
    fireEvent.click(buttonAC);
  });
  it("testing multiplication", async () => {
    render(<Calcultaor />);

    const buttonFive = screen.getByRole("button", { name: "5" });
    const buttonThree = screen.getByRole("button", { name: "3" });
    const buttonMultiplication = screen.getByRole("button", { name: "*" });
    const buttonEquals = screen.getByRole("button", { name: "=" });
    const buttonAC = screen.getByRole("button", { name: "AC" });

    fireEvent.click(buttonFive);
    fireEvent.click(buttonMultiplication);
    fireEvent.click(buttonThree);
    fireEvent.click(buttonEquals);

    await waitFor(() => {
      expect(screen.getByText("15", { selector: "p" })).toBeInTheDocument();
    });
    fireEvent.click(buttonAC);
  });
  it("testing division", async () => {
    render(<Calcultaor />);

    const buttonSix = screen.getByRole("button", { name: "6" });
    const buttonThree = screen.getByRole("button", { name: "3" });
    const buttonDivision = screen.getByRole("button", { name: "/" });
    const buttonEquals = screen.getByRole("button", { name: "=" });
    const buttonAC = screen.getByRole("button", { name: "AC" });

    fireEvent.click(buttonSix);
    fireEvent.click(buttonDivision);
    fireEvent.click(buttonThree);
    fireEvent.click(buttonEquals);

    await waitFor(() => {
      expect(screen.getByText("2", { selector: "p" })).toBeInTheDocument();
    });
    fireEvent.click(buttonAC);
  });
});
