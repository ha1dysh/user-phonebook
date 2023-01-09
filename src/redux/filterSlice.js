import { useSelector, useDispatch } from "react-redux"
import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => (state = action.payload),
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer

const getFilter = (state) => state.filter

export const useFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  const handleSetFilter = (value) => dispatch(setFilter(value))

  return { filter, setFilter: handleSetFilter }
}
