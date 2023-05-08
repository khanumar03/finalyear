import { createReducer } from "@reduxjs/toolkit";
import { Icons } from "../Components/Icons";

const initialState = {
  User: null,
  Userdb: null,
  sidebarOptions: [
    {
      id: 1,
      name: "Home",
      href: "/dashboard/",
      Icon: Icons.Home,
      animate: false,
    },
    {
      id: 2,
      name: "Explore",
      href: "/dashboard/explore",
      Icon: Icons.Explore,
      animate: false,
    },
    {
      id: 3,
      name: "Search profile",
      href: "/dashboard/search",
      Icon: Icons.Search,
      animate: false,
    },
    {
      id: 4,
      name: "Notifications",
      href: "/dashboard/notifications",
      Icon: Icons.Notifications,
      animate: false,
    },
  ],
};

export const useReduxReducers = createReducer(initialState, (builder) => {
  builder.addCase("USER_STATE", (state, action) => {
    state.User = action.payload;
  });

  builder.addCase("OPTION_STATE", (state, action) => {
    state.sidebarOptions = action.payload;
  });

  builder.addCase("USER_DB",(state, action) => {
    state.Userdb  = action.payload
  })
});
