import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
  });

  test("displays initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Clean the house")).toBeInTheDocument();
    expect(screen.getByText("Finish project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Buy groceries");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Buy groceries")).not.toBeInTheDocument();
  });
});
