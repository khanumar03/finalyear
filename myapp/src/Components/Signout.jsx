import { useState } from "react";
import { Loader2 } from "lucide-react";
import { auth } from "../db/firebaseinit";
import { Icons } from "./Icons";
import { useDispatch } from "react-redux";

const Signout = () => {
  const [Loading, isLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    isLoading(true);
    try {
      auth.signOut()
      .then(() => {
        dispatch({
          type: "USER_DB",
          payload: null
        })
        console.log("logout");
        
      })
    } catch (error) {
      console.log(error);
    } finally {
      isLoading(false);
    }
  };
  return (
    <div
      className="flex items-center justify-center w-20 h-full p-1 cursor-pointer"
      onClick={logout}
    >
      {Loading ? (
        <Loader2 className="h-6 w-6 animate-spin text-emerald-300" />
      ) : (
        Icons.LogOut
      )}
    </div>
  );
};

export default Signout;
