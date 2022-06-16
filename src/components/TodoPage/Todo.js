import React from "react";
import { Row, Tag, Checkbox, Col, Button } from "antd";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleTodoStatus, editTodo } from "../../redux/todoSlice";
import { toggleTodoStatus, editTodo } from "../../react-redux/actions/todoActions";
import AddTodoForm from "./AddTodoForm";
import { connect } from "react-redux";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

function Todo(props) {
  const { name, priority, completed, id } = props;
  const { toggleTodoStatus, editTodo } = props;
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);

  // const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    const newTodo = { 
      id: id, 
      name: name, 
      priority: priority,
      completed: !completed
    }
    toggleTodoStatus(newTodo);
  };

  const handleEditClicked = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClicked = (todoItem) => {
    setIsEditing(!isEditing);
    editTodo(todoItem);
  }

  return (
    <Row
      justify='space-between'
      align='center'
      style={{
        marginTop: 1.5,
        marginBottom: 1.5,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {isEditing && <AddTodoForm btnClicked={handleSaveClicked} id={id} todoName={name} priority={priority} />}

      {!isEditing &&
        <Col span={16}>
          <Checkbox checked={checked} onChange={toggleCheckbox}>
            {name}
          </Checkbox>
        </Col>
      }
      {!isEditing &&
        <Col span={4}>
          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
        </Col>
      }
      {!isEditing &&
        <Col span={4} align='right' justify='center'>
          <Button type="primary" onClick={handleEditClicked} >Edit</Button>
        </Col>
      }
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  // console.log("Todo: mapDispatchToProps");
  return {
    toggleTodoStatus: (todoItem) => dispatch(toggleTodoStatus(todoItem)),
    editTodo: (todoItem) => dispatch(editTodo(todoItem)),
  }
}

export default connect(null, mapDispatchToProps)(Todo);

