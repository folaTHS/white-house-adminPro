import { configureStore } from "@reduxjs/toolkit";
import diceSummaryReducer from "../src/pages/admin/api_detaills/GlobalStates/diceSummarySlice";
import NigerianUsersReducer from "./pages/admin/api_detaills/GlobalStates/NigerianUsersSlice";
import OnlineUsersReducers from "./pages/admin/api_detaills/GlobalStates/onlineUsers";
import DiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/DiceBetsList";
import LoosingDiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/LoosingDiceBetsListSlice";
import WinningDiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/WinningDiceBetListSlice";


const store = configureStore({
  reducer: {
    diceSummary: diceSummaryReducer,
    NigerianUsers: NigerianUsersReducer,
    OnlineUser: OnlineUsersReducers,
    DiceBetsList: DiceBetsListReducer,
    WinningDiceBetsList: WinningDiceBetsListReducer,
    LoosingDiceBetsList: LoosingDiceBetsListReducer,

  },
});

export default store;
