import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import TodoTable from "../../components/TodoTable";
import { AuthContext } from "../../provider/AuthContext";

const MyTodo = () => {

  const {user} = useContext(AuthContext)

  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8800/todo/${user?.email}`).then((result) => {
      setTodo(result.data);
    });
  }, []);
  return (
    <div>
      <table className="table table-zebra">
        {/* head */}
        <thead className="mt-10">
          <tr className="mt-10">
            <th></th>
            <th className="text-[17px]">name</th>
            <th className="text-[17px]">email</th>
            <th className="text-[17px]">work</th>
            <th className="text-[17px]">start-time</th>
            <th className="text-[17px]">end-time</th>
            <th className="text-[17px]">work-status</th>
            <th className="text-[17px]">Edit</th>
            <th className="text-[17px]">updated status</th>
          </tr>
        </thead>
        <tbody>
        {
              todos.map((todo,index) => <TodoTable key={todo._id} todo={todo} index={index} todos={todos} setTodo={setTodo}></TodoTable>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default MyTodo;
