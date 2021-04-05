import { customRender, fireEvent, screen } from "./test-utils";
import App from "./App";
import { name2KebabWithId } from "../Task/Task";
import { State } from "../../redux/reducers";

const appInitialState: State = {
  tasks: [
    {
      name: "Complete online JavaScript course",
      id: 0,
      completed: false,
    },
    {
      name: "Add linter to the project",
      id: 1,
      completed: true,
    },
  ],
  activeFilter: "all",
};

it("should change task checkbox state on click", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const checkbox = screen.getByRole("checkbox", {
    name: "Complete online JavaScript course",
  });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

it("should add a new task", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const addTask = screen.getByPlaceholderText(/Create a new todo/i);
  fireEvent.change(addTask, {
    target: { value: "Add a test for AddTask" },
  });
  expect(addTask).toHaveValue("Add a test for AddTask");
  fireEvent.submit(addTask);
  const addedTask = screen.getByRole("checkbox", {
    name: "Add a test for AddTask",
  });
  expect(addedTask).toBeInTheDocument();
});

it("should remove a task", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const completedTask = screen.getByRole("checkbox", {
    name: "Add linter to the project",
  });
  const removeBtn = screen.getByTestId(
    name2KebabWithId("Add linter to the project", 1)
  );
  fireEvent.click(removeBtn);
  expect(completedTask).not.toBeInTheDocument();
});

it("should show active tasks", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const activeTask = screen.getByRole("checkbox", {
    name: "Complete online JavaScript course",
  });
  const completedTask = screen.getByRole("checkbox", {
    name: "Add linter to the project",
  });
  const showActive = screen.getByRole("button", { name: "Active" });
  fireEvent.click(showActive);
  expect(activeTask).toBeInTheDocument();
  expect(completedTask).not.toBeInTheDocument();
});

it("should show completed tasks", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const activeTask = screen.getByRole("checkbox", {
    name: "Complete online JavaScript course",
  });
  const completedTask = screen.getByRole("checkbox", {
    name: "Add linter to the project",
  });
  const showCompleted = screen.getByRole("button", { name: "Completed" });
  fireEvent.click(showCompleted);
  expect(activeTask).not.toBeInTheDocument();
  expect(completedTask).toBeInTheDocument();
});

it("should show all tasks", () => {
  customRender(<App />, { initialState: { ...appInitialState } });
  const activeTask = screen.getByRole("checkbox", {
    name: "Complete online JavaScript course",
  });
  const completedTask = screen.getByRole("checkbox", {
    name: "Add linter to the project",
  });
  const showAll = screen.getByRole("button", { name: "All" });
  fireEvent.click(showAll);
  expect(activeTask).toBeInTheDocument();
  expect(completedTask).toBeInTheDocument();
});
