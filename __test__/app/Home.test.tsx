import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
//page
import Home from "@/app/page";

describe("Home Page", () => {
  it("Should render main element & contain Movie List", () => {
    render(<Home />);

    const heading = screen.getByRole("main");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Movie List");
  });
});
