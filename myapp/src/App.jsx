import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import { auth } from "./db/firebaseinit";
import { useDispatch, useSelector } from "react-redux";
import PageError from "./Auth/PageError";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import { baseURL } from "./lib/axiosbase";

export const socket = io("http://localhost:4000");
socket.emit("join", "room_one");

function App() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { User, Userdb, sidebarOptions } = useSelector((state) => state);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router("/auth");
        dispatch({
          type: "USER_STATE",
          payload: null,
        });
        return;
      }
      dispatch({
        type: "USER_STATE",
        payload: authUser,
      });
      router("/dashboard", { replace: true });
    });
  }, []);

  useEffect(() => {
    async function getCurrentUser() {
      await baseURL({
        method: "GET",
        url: `/currentuser?email=${localStorage.getItem("email")}`,
      })
        .then((saved) => {
          dispatch({
            type: "USER_DB",
            payload: saved.data.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCurrentUser();
  }, [User]);

  useEffect(() => {
    socket.on("getdata", (data) => {
      if (localStorage.getItem("email") === data.data.data) {
        toast.success("incoming request");
        const newData = sidebarOptions.map((option) =>
          option.name === "Notifications"
            ? {
                id: option.id,
                name: option.name,
                href: option.href,
                Icon: option.Icon,
                animate: true,
              }
            : option
        );
        dispatch({
          type: "OPTION_STATE",
          payload: newData,
        });
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index path="/auth" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;
