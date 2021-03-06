import React from "react";
import { Typography, Divider } from "antd";
import TodoList from "./TodoList";
import Filters from "./Filters";

const { Title } = Typography;

function TodoApp() {
  return (
    <div
      style={{
        width: 800,
        margin: "auto" ,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 10,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default TodoApp;
