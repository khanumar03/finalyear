import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Post from "./screens/Post";
import { Following } from "./screens/Following";
import Followers from "./screens/Followers";
import { useSelector } from "react-redux";
import { Instagram } from "lucide-react";

const Profile = () => {
  const { Userdb } = useSelector((state) => state);
  console.log(Userdb);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {Userdb?.role ? (
                <Link to="/dashboard/profile/allpost">
                  <div>
                    <p className="font-bold text-gray-700 text-xl">0</p>{" "}
                    <p className="text-gray-400">Posts</p>{" "}
                  </div>
                </Link>
              ) : null}
              <Link to="/dashboard/profile/followers">
                <div>
                  <p className="font-bold text-gray-700 text-xl">
                    {Userdb?.followers.length}
                  </p>{" "}
                  <p className="text-gray-400">Followers</p>{" "}
                </div>
              </Link>
              <Link to="/dashboard/profile/following">
                <div>
                  <p className="font-bold text-gray-700 text-xl">
                    {Userdb?.following.length}
                  </p>{" "}
                  <p className="text-gray-400">Following</p>{" "}
                </div>
              </Link>
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {Userdb?.role && <button className="text-white py-3 px-6 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className="relative w-8 text-gray-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </button>}

              <button className="text-white py-3 px-6 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                <Instagram size={30} color="#E4405F" />
              </button>
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {/* {session.user.name} */}
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">Mumbai, India</p>{" "}
            <p className="mt-8 text-gray-500">Architecturer</p>{" "}
            <p className="mt-2 text-gray-500">University of Computer Science</p>{" "}
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>{" "}
          </div>
          {
            <Routes>
              <Route path="/allpost" element={<Post />} />
              <Route path="/following" element={<Following />} />
              <Route path="/followers" element={<Followers />} />
            </Routes>
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
