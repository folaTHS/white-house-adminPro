import { configureStore } from "@reduxjs/toolkit";
import diceSummaryReducer from "../src/pages/admin/api_detaills/GlobalStates/diceSummarySlice";
import NigerianUsersReducer from "./pages/admin/api_detaills/GlobalStates/NigerianUsersSlice";
import OnlineUsersReducers from "./pages/admin/api_detaills/GlobalStates/onlineUsers";
import DiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/DiceBetsList";
const store = configureStore({
  reducer: {
    diceSummary: diceSummaryReducer,
    NigerianUsers: NigerianUsersReducer,
    OnlineUser: OnlineUsersReducers,
    DiceBetsList: DiceBetsListReducer,

  },
});

export default store;
