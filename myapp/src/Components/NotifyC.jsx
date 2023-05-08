import React from "react";
import { Icons } from "./Icons";
import Button from "./Button";

const NotifyC = ({email,action}) => {

  return (
    <div className="flex w-full h-full items-center justify-center p-3 rounded-md  backdrop-blur-sm bg-custom1 mb-4 shadow-md">
      <div className="flex flex-col truncate">
        <span className="text-black font-semibold">{email}</span>
      </div>
      <Button email={email} text={""} action={action} style={1} icons={"success"} />
      <Button email={email} text={""} action={action} style={2} icons={"decline"} />
    </div>
  );
};

export default NotifyC;
