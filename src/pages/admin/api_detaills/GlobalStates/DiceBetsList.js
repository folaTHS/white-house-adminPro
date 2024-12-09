import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return data.responseBody; // Extract the relevant data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const DiceBetsSlice = createSlice({
  name: "DiceBetsList",
  initialState: {
    data: {
      id: '',
      bet_id: '',
      user_id: '',
      game: "",
      amount_staked: "",
      players_in_game: '',
      status:"",
      Winners: "",
      timestamp: "",
      action: "",
      createdAt: "2024-12-05T14:16:52.000Z",
      updatedAt: "2024-12-05T14:16:52.000Z",
    },

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiceBetList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDiceBetList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDiceBetList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default DiceBetsSlice.reducer;
