import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";

it("Should load the Header Component with loging button", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByText("Cart");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByText("Login");

  fireEvent.click(loginButton);

  const logoutButton = screen.getByText("Logout");


  //Assertion
  expect(loginButton).toBeInTheDocument();
});
