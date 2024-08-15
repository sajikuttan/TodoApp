import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";
import styled from "styled-components";

const ErrorMessage = styled.p`
color: #ff0000
`

const TodoForm = function ({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (title === "" || description === "") {
            setError("Please fill both the feilds");
        } else {
            addTodo({
                title: title,
                description: description,
                id: Date.now()
            });
            setTitle("");
            setDescription("");
            setError("");
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <Input name="todo-title" type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title} required={"true"} />
                <label>Description</label>
                <Input name="todo-description" type="text" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} value={description} required={"true"} />
                <Button type="submit" label="Submit" />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </form>
        </>
    )
}

export default TodoForm;