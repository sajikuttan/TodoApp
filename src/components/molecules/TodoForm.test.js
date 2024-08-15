import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from './TodoForm';


describe("Todo Form Content", () => {
    const addTodoList = jest.fn();
    beforeEach(() => {
        render(<TodoForm addTodo={addTodoList} />);
    });

    test("renders from the input feilds and buttons", () => {
        const titleInput = screen.getByPlaceholderText("Enter Title");
        const titleDescriptionInput = screen.getByPlaceholderText("Enter Description");
        const submitButton = screen.getByRole("button");

        expect(titleInput).toBeInTheDocument();
        expect(titleDescriptionInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test("allow user to input text into the feilds", ()=>{
        const titleInput = screen.getByPlaceholderText("Enter Title");
        const titleDescriptionInput = screen.getByPlaceholderText("Enter Description");

        fireEvent.change(titleInput, {target:{value: "New Task"}});
        fireEvent.change(titleDescriptionInput, {target:{value:"New Description"}});

        expect(titleInput.value).toBe("New Task");
        expect(titleDescriptionInput.value).toBe("New Description");
    });

    test("allow user to enter inputs and submit the data", ()=>{
        const titleInput = screen.getByPlaceholderText("Enter Title");
        const titleDescriptionInput = screen.getByPlaceholderText("Enter Description");
        const submitButton = screen.getByRole("button");

        fireEvent.change(titleInput, {target:{value: "New Task"}});
        fireEvent.change(titleDescriptionInput, {target:{value:"New Description"}});
        fireEvent.click(submitButton);

        expect(addTodoList).toHaveBeenCalledWith({
            title: "New Task",
            description: "New Description",
        });

        expect(addToDoList).toHaveBeenCalledTimes(1);
    });

    test("display an error message while feilds are empty", ()=> {
        const titleInput = screen.getByPlaceholderText("Enter Title");
        const titleDescriptionInput = screen.getByPlaceholderText("Enter Description");
        const submitButton = screen.getByRole("button");
        

        fireEvent.click(submitButton);
        const errorMessage = screen.getByText("Please fill both the feilds");

        expect(errorMessage).toBeInTheDocument();

    })
});

