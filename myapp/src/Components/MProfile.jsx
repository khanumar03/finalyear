// import Signout from "./Signout";

import { useSelector } from "react-redux";
import { Icons } from "./Icons";
import Signout from "./Signout";
import { Link } from "react-router-dom";

const MProfile = () => {
  const { User } = useSelector((state) => state);


  return (
    <div className="flex w-full h-fit items-center justify-center mt-5 p-2 rounded-md  backdrop-blur-sm bg-custom1">
      <div className="flex w-80 h-full p-1 justify-between items-center truncate">
        <Link to="/dashboard/profile">
          <div className="rounded-full border-2 flex justify-center items-center cursor-pointer p-3 relative">
            {Icons.User}
          </div>
        </Link>
        <div className="flex flex-col pl-3">
          <span className="text-black ">{User?.displayName}</span>
          <span className="text-black -mt-1 ">{User?.email}</span>
        </div>
      </div>
      <Signout />
    </div>
  );
};

export default MProfile;
