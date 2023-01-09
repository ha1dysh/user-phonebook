import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ""
  },
}

export const singUp = createAsyncThunk("/auth/signup", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials)
    token.set(data.token)
    return data
  } catch (error) {
    console.log(error)
  }
})

const logIn = createAsyncThunk("/auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials)
    token.set(data.token)
    return data
  } catch (error) {
    console.log(error)
  }
})

const logOut = createAsyncThunk("/auth/logout", async () => {
  try {
    await axios.post("/users/logout")
    token.unset()
  } catch (error) {
    console.log(error)
  }
})

const fetchCurrentUser = createAsyncThunk(
  "/auth/current",

  async (localToken, thunkAPI) => {
    if (!localToken) {
      return thunkAPI.rejectWithValue({ name: null, email: null })
    }

    token.set(localToken)

    try {
      const { data } = await axios.get("/users/current")
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const authOperations = {
  singUp,
  logOut,
  logIn,
  fetchCurrentUser,
}

export default authOperations
