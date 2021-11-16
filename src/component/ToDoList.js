import React from "react";
// import DeleteButton from '@bit/totalsoft_oss.react-mui.delete-button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Button } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToDoList = ({ todos, setTodos , setEditTodo }) => {
const handelDelete =({id}) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
}
const handelCompleteTodo = (todo) =>{
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id ){
                return {...item , completed : !item.completed}
            }
            return item ;
        })
    )
}

const handelEditTodo = ({ id }) => {
    const findTodo = todos.find ((todo) => todo.id ===id) ;
    setEditTodo(findTodo);
};

  return (
    <div>
         <br />
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
            
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
         

          <CheckCircleIcon className="button-complete task-button "
          onClick={()=> handelCompleteTodo(todo)}
          />
          <EditIcon className="button-edit task-button " onClick={()=>handelEditTodo(todo)} />
          <DeleteIcon className="button-delete task-button " onClick={()=>handelDelete(todo)} />
          {/* <button className="button-complete task-button">
                      <i className="fa fa-check-circle"></i>
                  </button> */}
          {/* <Button color="primary">Hello World</Button> */}
          {/* <button data-testid="DeleteIcon">
                      <i className="fa fa-trash"></i>
                  </button> */}
        </li>
      ))}
      {/* <DarkModeIcon /> */}
    </div>
  );
};

export default ToDoList;
