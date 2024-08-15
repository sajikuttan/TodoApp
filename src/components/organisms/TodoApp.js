import TodoForm from "../molecules/TodoForm";
import { useState, useEffect } from "react";

const TodoApp = function () {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{

        setTodos([])
    }, [])

    const addTodoList = async (todoData) => {
        // setTodos([...todos, { ...todoData }]);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(todoData)
            });

            if(!response.ok) {
                throw new Error("Bad Request! Something went wrong");
            }

            const createdTodos = await response.json();
            setTodos([...todos, createdTodos]);
        } catch (err) {
            console.log("Error!!:- " , err);
        }
    }

    return (
        <div>
            <TodoForm addTodo={addTodoList} />
            <ul>
                {todos.map((item) => {
                    return (<li key={item.id}>{item.title} - {item.description}</li>)
                })}
            </ul>
        </div>
    )
}

export default TodoApp;