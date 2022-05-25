import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag, Divider } from "antd";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/todoSlice";
import { todoSearchSelector } from "../../redux/selector";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();
  const todoLists = useSelector(todoSearchSelector);

  axios({
    method: 'get',
    url: 'https://627c783ebf2deb7174db0631.mockapi.io/todo/data/accounts/1/todoList',
    data: null,
    responseType: 'stream'
  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })

  const handleAddClicked = () => {
    const addedData = {
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: priority,
    };

    dispatch(addTodo(addedData));
    setTodoName("");
    setPriority("Medium");
  };

  const handleDeleteClicked =() => {
    console.log('Deleted');
    dispatch(deleteTodo());
  }

  return (
    <Row style={{ height: "calc(100% - 90px)" }}>
      <Col span={24} style={{ height: "20px"}}>
        <Button type="primary" onClick={handleDeleteClicked}>Delete</Button>
      </Col>
      <Divider/>
      <Col span={24} style={{ height: "calc(100% - 90px)", overflowY: "auto" }}>
        {todoLists.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddClicked}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
