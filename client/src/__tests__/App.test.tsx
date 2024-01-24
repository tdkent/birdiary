// Imports
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// To Test
import App from "../App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const button = await screen.findByRole("button");

  // Initial State
  expect(button.innerHTML).toBe("count is 0");

  // User Actions
  await userEvent.click(button);
  await userEvent.click(button);

  // Result of User Actions
  expect(button.innerHTML).toBe("count is 2");
});
