import React, { useState } from "react";

const UseStateObject = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="h-screen flex bg-teal-700 text-center">
      <div className="border flex flex-col justify-center items-center md:w-[50%] w-[100%] m-auto bg-gray-300 p-8 rounded-xl shadow-xl hover:shadow-2xl ">
      <h2 className="text-5xl font-bold text-blue-900">UseState Object</h2>
      <h2 className="text-4xl font-bold text-blue-800">Registration Form</h2>
        <form className="flex flex-col gap-3  w-[100%] p-8 ">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Name"
            className="outline-none p-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="outline-none p-2"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete=""
            placeholder="Password"
            className="outline-none p-2"
          />
          <input
            type="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="outline-none p-2"
          />
        </form>
        <p>
          {formData.userName && `My name is ${formData.userName}`}
          {formData.email && `and my email is ${formData.email}`}
        </p>
      </div>
    </div>
  );
};

export default UseStateObject;
