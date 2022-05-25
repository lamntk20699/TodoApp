import React from "react";
import { Row, Tag, Checkbox, Input, Col, Button, Select} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, editTodo } from "../../redux/todoSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, id }) {
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  const handleEditClicked = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Row
      style={{
        justify:"space-between",
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      {isEditing ? 
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            type="text"
            value={name}
            // onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
           defaultValue="Medium"
           value={priority}
           // onChange={(value) => setPriority(value)}
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
          <Button type="primary" onClick={handleEditClicked}>
            Save
          </Button>
        </Input.Group> : 
        <Col display="space-between" >
          <Checkbox checked={checked} onChange={toggleCheckbox}>
            {name}
          </Checkbox>
          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
          <Button type="primary" onClick={handleEditClicked} disabled={checked} >{isEditing ? 'Save' : 'Edit'}</Button>
        </Col>
      }
      
      
    </Row>
  );
}
