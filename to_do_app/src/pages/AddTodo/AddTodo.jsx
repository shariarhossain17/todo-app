import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthContext";

const AddTodo = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const todoData = { ...data, email: user?.email, status: false };
    axios.post("http://localhost:8800/todo", todoData).then((result) => {
      console.log(result.data);
    });
  };

  return (
    <>
      <div className="card w-[500px] mx-auto mt-10 shadow-lg px-6 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="">Name</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("name")}
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label className="">Email</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                readOnly
                placeholder={user?.email}
              />
            </div>
          </div>
          <div>
            <label className="">work</label>
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                {...register("work")}
                placeholder="work"
              />
            </div>
          </div>
          <div>
            <label className="">start-time</label>
            <div className="relative">
              <select
                className="border border-gray-400 w-full outline-none py-4 px-2 rounded-md"
                {...register("startTime")}
              >
                <option value="Morning">Morning</option>
                <option value="Evening">evening</option>
                <option value="Night">night</option>
              </select>
            </div>
          </div>
          <div>
            <label className="">End-time</label>
            <div className="relative">
              <select
                className="border border-gray-400 w-full outline-none py-4 px-2 rounded-md"
                {...register("endTime")}
              >
                <option value="Morning">Morning</option>
                <option value="Evening">evening</option>
                <option value="Night">night</option>
              </select>
            </div>
          </div>
          <input
            className="bg-purple-600 mt-5 px-4 py-2 text-white rounded-md w-full"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddTodo;
