import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TodoTable = ({todo,index,todos,setTodo}) => {

const {_id,name,email,status,startTime,work,endTime} = todo;
const [pathName,setPathName] = useState("");

const location = useLocation();



useEffect(()=>{
  setPathName(location.pathname)
},[])


  const handleDelete  = (id) => {
    axios.delete(`http://localhost:8800/todo/${id}`).then((result)=>{
      console.log(result.data);

      if(result.data){
        const newTodo = todos.filter((todo) => todo._id != id);
        console.log(newTodo);
        setTodo(newTodo)
      }
    })
  }

  return (
    <>
      <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{work}</td>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{status?"succeed":"pending"}</td>
        {
          pathName=="/my-todo"&& <td><button onClick={()=>handleDelete(_id)}>Delete</button></td>
        }
      </tr>
    </>
  );
};

export default TodoTable;
