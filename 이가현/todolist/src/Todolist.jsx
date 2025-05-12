import React, { useState, useRef } from "react";
import "./Todolist.css";

function TodoList() {
  const [list, setList] = useState([]);
  const input = useRef(null);

  const add = () => {
    const text = input.current.value;
    setList([...list, { text, done: false }]);
    input.current.value = "";
  };

  const done = (index) => {
    const newList = list.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setList(newList);
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <div className="input">
        <input
          type="text"
          ref={input}
          placeholder="투두리스트를 입력하세요."
          onKeyDown={(e) => {
            if (e.key === "Enter") add();
          }}
        />
        <button onClick={add}>등록</button>
      </div>
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            className="todo"
            style={{
              textDecoration: item.done ? "line-through" : "",
              color: item.done ? "gray" : "black",
            }}
          >
            {item.text}
            <button onClick={() => done(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
