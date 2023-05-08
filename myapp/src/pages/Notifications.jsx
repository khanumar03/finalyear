import React from "react";
import NotifyC from "../Components/NotifyC";
import { useSelector } from "react-redux";
import { baseURL } from "../lib/axiosbase";

const Notifications = () => {
  const { Userdb } = useSelector((state) => state);

  const acceptrequest = async (requestemail) => {
    await baseURL({
      method: "GET",
      url: `/acceptrequest?email1=${Userdb.email}&email2=${requestemail}`,
    })
      .then((saved) => {
        console.log(saved);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="w-full h-screen p-8">
      <h1 className="font-bold text-slate-900 text-5xl mb-5">Notifications</h1>
      <div className="flex text-white flex-col w-80 max-h-128 overflow-auto scroll-smooth p-2">
        <ul role="list">
          {Userdb?.request.length > 0
            ? Userdb.request.map((req, index) => (
                <li key={index} className="flex items-center justify-center">
                  <NotifyC email={req} action={acceptrequest} />
                </li>
              ))
            : (
              <li className="font-bold text-lg text-black">No Notifications</li>
            )}
        </ul>
      </div>
    </main>
  );
};

export default Notifications;
