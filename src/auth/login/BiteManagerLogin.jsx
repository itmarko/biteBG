import React from "react";
import "../../styles/BiteManagerLogin.css"; // Import your CSS here

const BiteManagerLogin = () => {
  return (
    <section className="bg-gray-800 h-screen  relative flex items-center justify-center">
      <div className="top-blue w-62.5 h-62.5 bg-blue-500 rounded-full absolute top-[10%] left-[50%] "></div>
      <div className="bottom-pink w-70 h-70 rounded-full absolute top-[50%] left-[12%] lg:left-[30%]"></div>
      <div className="top-orange w-75 h-75 rounded-full absolute top-[5%] left-[5%] md:left-[23%] lg:left-[30%]"></div>

      <div className="container w-[350px] sm:w-[350px] m-auto text-center p-8 text-white z-10">
        <img
          id="passport"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
          alt=""
          className="mx-auto"
        />
        <p>
          <span className="text-xl sm:text-2xl">Login Here</span>
        </p>

        <hr />

        <form method="POST">
          <input
            type="text"
            id="username"
            placeholder="Username..."
            className="w-full mx-auto text-base sm:text-lg"
          />
          <input
            type="password"
            id="password"
            placeholder="Password..."
            className="w-full mx-auto text-base sm:text-lg"
          />
          <button
            type="submit"
            className="p-2 sm:text-lg bg-blue-500 rounded-2xl m-8 w-36 mx-auto sm:w-48 hover:bg-linear-to-r hover:from-orange-500 hover:via-pink-500 hover:to-pink-700"
          >
            Login
          </button>
        </form>

        <p>
          If you're new here, click to{" "}
          <a href="#" className="underline hover:text-pink-300">
            SignUp
          </a>
        </p>
      </div>
    </section>
  );
};

export default BiteManagerLogin;
