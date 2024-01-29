// // Imports
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// // To Test
// import App from "../App";

// // Integration Tests

// describe("App", () => {
//   test("correctly adds a new todo", async () => {
//     // setup
//     render(<App />);
//     const user = userEvent.setup();
//     const inputEl = screen.getByRole("textbox");
//     const buttonEl = screen.getByRole("button");

//     // initial state
//     expect(inputEl.innerHTML).toBe("");

//     // user actions
//     await user.type(inputEl, "task 1");
//     await user.click(buttonEl);

//     // assertions
//     const divEl = screen.getByText("task 1");
//     expect(divEl).toBeInTheDocument();
//     expect(inputEl.innerHTML).toBe("");
//   });

//   test("correctly adds multiple new todos", async () => {
//     // setup
//     render(<App />);
//     const user = userEvent.setup();
//     const inputEl = screen.getByRole("textbox");
//     const buttonEl = screen.getByRole("button");

//     // user
//     await user.type(inputEl, "task 1");
//     await user.click(buttonEl);
//     await user.type(inputEl, "task 2");
//     await user.click(buttonEl);
//     await user.type(inputEl, "task 3");
//     await user.click(buttonEl);

//     // assert
//     const divs = screen.getAllByTitle("todo-div");
//     expect(divs.length).toBe(3);
//     expect(divs[0].innerHTML).toBe("task 1");
//     expect(divs[1].innerHTML).toBe("task 2");
//     expect(divs[2].innerHTML).toBe("task 3");
//   });
// });
