import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

import img from "../../assets/img.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password).then((result) => {
      if (result.user) {
        e.target.reset();
        navigate(from, { replace: true });
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
                <label className="sr-only">Email</label>

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
                  No account?
                  <Link to="/register"> Sign up</Link>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
