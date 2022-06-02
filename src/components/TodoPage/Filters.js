import React, { useState } from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
// import { useDispatch } from "react-redux";
// import {
//   searchFilterChanged,
//   statusFilterChanged,
//   prioritiesFilterChanged,
// } from "../../redux/filterSlice";

import { searchFilterChanged, statusFilterChanged, prioritiesFilterChanged } from "../../react-redux/actions/filterActions";
import { connect } from "react-redux";

const { Search } = Input;

function Filters(props) {
  const { searchFilterChanged, statusFilterChanged, prioritiesFilterChanged } = props;
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState([]);

  // const dispatch = useDispatch();

  const handleSearchTextChanged = (e) => {
    // console.log({e});
    setSearchText(e.target.value);
    searchFilterChanged(e.target.value);
  };

  const handleStatusChanged = (e) => {
    // console.log({e});
    setFilterStatus(e.target.value);
    statusFilterChanged(e.target.value);
  };

  const handlePriorityChanged = (value) => {
    // console.log({value});
    setFilterPriority(value);
    prioritiesFilterChanged(value);
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="Input search text"
          value={searchText}
          onChange={handleSearchTextChanged}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChanged}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriority}
          onChange={handlePriorityChanged}
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
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  // console.log("Filter: mapDispatchToProps");
  return {
    searchFilterChanged: (searchText) => dispatch(searchFilterChanged(searchText)),
    statusFilterChanged: (status) => dispatch(statusFilterChanged(status)),
    prioritiesFilterChanged: (priorities) => dispatch(prioritiesFilterChanged(priorities))
  }
}

export default connect(null, mapDispatchToProps)(Filters);
