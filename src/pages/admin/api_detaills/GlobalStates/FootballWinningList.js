
export const fetchFootballWinningDiceBet = createAsyncThunk(
  "FootballWinningBets/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/games/sports/football/football-winning-bets`;

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });
        
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const footballWinningData = await response.json();
      return footballWinningData.responseBody;
    } catch (error) {
      console.log("Fetch Football Winning Bets Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const FootballWinningBetsSlice = createSlice({
  name: "footballWinningBets",
  initialState: {
    FootballWinningdata: [],
    FootballWinningLoading: false,
    FootballWinningError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballWinningDiceBet.pending, (state) => {
        state.FootballWinningLoading = true;
        state.FootballWinningError = null;
      })
      .addCase(fetchFootballWinningDiceBet.fulfilled, (state, action) => {
        state.FootballWinningLoading = false;
        state.FootballWinningdata = action.payload;
      })
      .addCase(fetchFootballWinningDiceBet.rejected, (state, action) => {
        state.FootballWinningLoading = false;
        state.FootballWinningError = action.payload;
      });
  },
});

export default FootballWinningBetsSlice.reducer;
