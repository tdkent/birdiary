// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const button = await screen.findByRole("button");

  // Pre Expecations
  expect(button.innerHTML).toBe("count is 0");

  // Init
  // user actions go here

  // Post Expectations
  // result of user actions go here
  expect(true).toBeTruthy();
});
