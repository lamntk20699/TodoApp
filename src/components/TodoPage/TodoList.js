import React, { useEffect } from "react";
import { Col, Row, Button, Divider } from "antd";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo } from "../../redux/todoSlice";
// import { todoSearchSelector } from "../../redux/selector";
import { addTodo, deleteTodo, fetchTodoList, setTodos } from "../../react-redux/actions/todoActions";
import { connect } from "react-redux";
import todoApi from "../../api/todoApi";
// import axios from "axios";

function TodoList(props) {

  // const dispatch = useDispatch();
  // const todoLists = useSelector(todoSearchSelector);

  const todoLists = props.todoLists;
  const { addTodo, deleteTodo, fetchTodoList, setTodos } = props;

  useEffect(() => {
    // fetchTodoList();
    setTodos();
  }, []);

  // axios({
  //   method: 'get',
  //   url: 'https://627c783ebf2deb7174db0631.mockapi.io/todo/data/accounts/1/todoList',
  //   data: null,
  //   responseType: 'stream'
  // }).then(res => {
  //   console.log(res.data);
  // }).catch(err => {
  //   console.log(err);
  // })

  const handleDeleteClicked = () => {
    console.log('Deleted');
    deleteTodo();
  }

  return (
    <Row style={{ height: "calc(100% - 90px)" }}>
      <Col span={24} style={{ height: "20px" }}>
        <Button type="primary" onClick={handleDeleteClicked}>Clear All Completed</Button>
      </Col>
      <Divider />
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
      <AddTodoForm btnClicked={addTodo} />
    </Row>
  );
}

//mapStateToProps
const mapStateToProps = (state) => {
  const dataSource = state.todos.dataSource;
  const { searchText, status, priorities } = state.filters;

  const todoLists = dataSource.filter((todo) => {
    if (status === "All") {
      return todo.name.includes(searchText) && (priorities.length ? priorities.includes(todo.priority) : true);
    }
    return todo.name.includes(searchText) &&
      (status === "Completed" ? todo.completed : !todo.completed) &&
      (priorities.length ? priorities.includes(todo.priority) : true)
  })

  return { todoLists: todoLists }
}

//mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapDispatchToProps");
  return {
    addTodo: (todoItem) => dispatch(addTodo(todoItem)),
    deleteTodo: () => dispatch(deleteTodo()),
    fetchTodoList: async () => {
      // console.log("FETCH");
      const response = await todoApi.get(1);
      // console.log(response);
      dispatch(fetchTodoList(response));
    },
    setTodos: () => dispatch(setTodos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);