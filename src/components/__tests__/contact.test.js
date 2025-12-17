import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should render submit button", () => {
    render(<Contact />);

    const button = screen.getByText("Page");

    //Assertion
    expect(button).toBeInTheDocument();
})