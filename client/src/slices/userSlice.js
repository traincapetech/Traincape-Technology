import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      //   return {response.data};
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/register",
        {
          email,
          password,
          username,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;

        state.token = action.payload.token;
        console.log(state);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg || "Login failed";
      })
      // Handle signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg || "Signup failed";
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
