import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoTable from "../../components/TodoTable"

const AllTodo = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/todo").then((result) => {
      setTodo(result.data);
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
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
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo,index) => <TodoTable key={todo._id} todo={todo} index={index}></TodoTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTodo;
