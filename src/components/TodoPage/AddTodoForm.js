import React, { useState } from 'react';
import { Col, Input, Select, Tag, Button } from "antd";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = (props) => {
    const [todoName, setTodoName] = useState(props.todoName || "");
    const [priority, setPriority] = useState(props.priority || "Medium");

    const handleAddClicked = () => {
        const addedData = {
            name: todoName,
            completed: false,
            priority: priority,
            id: props.id || uuidv4(),
            accountId: '1',
        };

        props.btnClicked(addedData);
        setTodoName("");
        setPriority("Medium");
    };

    return (
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
                    {props.priority ? 'Save' : 'Add'}
                </Button>
            </Input.Group>
        </Col>
    )
}


export default AddTodoForm; 