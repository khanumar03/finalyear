import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import { auth } from "../db/firebaseinit";
import { useDispatch, useSelector } from "react-redux";
import MProfile from "../Components/MProfile";
import Search from "./Search";
import Home from "./Home";
import Notifications from "./Notifications";
import Explore from "./Explore";

const Dashboard = () => {
  const { User, sidebarOptions } = useSelector((state) => state);
  const dispatch = useDispatch();

  const logout = () => {
    const newData = sidebarOptions.map((option) =>
      option.name === "Notifications"
        ? {
            id: option.id,
            name: option.name,
            href: option.href,
            Icon: option.Icon,
            animate: !option.animate,
          }
        : option
    );
    dispatch({
      type: "OPTION_STATE",
      payload: newData,
    });
  };
  return (
    <div className="w-full flex h-screen">
      <div className="hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-2">
        <MProfile />
        <div className="flex flex-col w-full h-full px-2">
          <nav className="flex flex-1 felx-col">
            <ul role="list" className="-mx-2 mt-2 w-full space-y-3">
              {sidebarOptions.map((option) => (
                <Link
                  key={option.id}
                  to={option.href}
                  className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex  gap-3 rounded-md p-2.5 text-sm leading-6 font-semibold"
                >
                  <li
                    key={option.id}
                    className="flex items-center justify-center"
                  >
                    {option.Icon}
                    <span className="pl-3 text-sm">{option.name}</span>
                  </li>
                  {option.animate ? (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                  ) : null}
                </Link>
              ))}
            </ul>
          </nav>
          <button onClick={logout}>click</button>
        </div>
      </div>
      {
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/explore/*" element={<Explore />} />
        </Routes>
      }
    </div>
  );
};

export default Dashboard;
