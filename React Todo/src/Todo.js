import React, { useState, useEffect } from 'react';
import './index.css';

const todoStatus = {
    1: 'not_visited',
    2: 'visited',
    3: 'deleted'
}

function Todo() {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [noOfTodos, setNoOfTodos] = useState(0);

    const addTodo = () => {
        const newTodos = [...todoList, {
            name: value,
            status: 1
        }];
        setTodoList(newTodos);
        setValue("");
    }

    const handleTodoStatus = (e) => {
        const newTodoList = [...todoList]
        newTodoList[e.target.value].status++;
        setTodoList(newTodoList);
    }

    useEffect(() => {
        const noOfTodos = todoList.filter(todo => todo.status !== 3).length;
        setNoOfTodos(noOfTodos)
    }, [todoList]);

    return React.createElement("div", {
        className: "todo"
    }, React.createElement("h1", null, "TODOS PENDING ", noOfTodos),
        React.createElement("ul", null, todoList.map((todo, index) => {
            const todoClass = todoStatus[todo.status];
            return React.createElement("li", {
                className: todoClass,
                key: index,
                onClick: handleTodoStatus,
                value: index
            }, todo.name);
        })), React.createElement("input", {
            onChange: e => setValue(e.target.value),
            type: "text",
            value: value
        }), React.createElement("input", {
            type: "button",
            onClick: addTodo,
            value: "Add"
        }));
}

export default Todo;