import React, { useState } from "react";
import { baseURL } from "../lib/axiosbase";
import { socket } from "../App";
import { useSelector } from "react-redux";

const AddProfile = () => {
  const [email, setEmail] = useState("");
  const { User } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await baseURL({
      method: "post",
      url: "/add",
      data: {
        email: email,
        currentuser: User.email,
      },
    })
      .then((saved) => {
        if(saved.status !== 200) {
          console.log("ok")
          return
        }
        socket.emit("getdata", { data: email });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="max-w-sm" onSubmit={(e) => handleSubmit(e)}>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add Profile by E-Mail
        </label>

        <div className="mt-2 flex gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          <button className="text-indigo-500 font-bold text-lg disabled:opacity-0">
            Add
          </button>
        </div>
        {/* <p className="mt-1 text-sm text-red-600 ">{errors.email?.message}</p>
        {showSuccessState ? (
          <p className="mt-1 text-sm text-green-600 ">request send!</p>
        ) : null} */}
      </form>
    </>
  );
};

export default AddProfile;
