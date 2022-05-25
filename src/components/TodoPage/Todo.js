import React from "react";
import { Row, Tag, Checkbox, Input, Col, Button, Select} from "antd";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleTodoStatus, editTodo } from "../../redux/todoSlice";
import { toggleTodoStatus, editTodo } from "../../react-redux/actions/todoActions";
import { connect } from "react-redux";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

function Todo(props) {
  const { name, priority, completed, id } = props;
  const {toggleTodoStatus, editTodo } = props;
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false)

  // const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    toggleTodoStatus(id);
  };

  const handleEditClicked = () => {
    setIsEditing(!isEditing);
  };

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
      <Col span={16}>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
      </Col>
      <Col span={4}>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
      </Col>
      <Col span={4} align='right' justify='center'>
        <Button type="primary" onClick={handleEditClicked} disabled={checked} >{isEditing ? 'Save' : 'Edit'}</Button>
      </Col>    
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoStatus: (todoID) => dispatch(toggleTodoStatus(todoID)),
    editTodo: () => dispatch(editTodo())
  }
}

export default connect(null, mapDispatchToProps)(Todo);

{/* {isEditing ? 
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
        </Input.Group> :  */}

        {/* <Col display="space-between" > */}
          
          {/*  */}
        {/* </Col> */}
      {/* } */}