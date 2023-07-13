import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img.jpg";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    createUser(email, password).then((result) => {
      if (result.user) {
        e.target.reset();
      }
    });
  };
  return (
    <>
      <div className=" flex bg-[#faf9ff] justify-center mt-[10px] items-center gap-16 shadow-xl h-[85vh] rounded-md">
        <div>
          <figure>
            <img className="w-[600px]" src={img} alt="Movie" />
          </figure>
        </div>
        <div className="">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Get started today!
              </h1>

              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              onSubmit={(e) => handleLogin(e)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm outline-none border border-gray-400"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Not a account?
                  <Link to="/login">Login</Link>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
