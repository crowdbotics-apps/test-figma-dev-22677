import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const testconnectors_get_testid_read = createAsyncThunk(
  "testconnectors_response_get_TestIDS/testconnectors_get_testid_read",
  async payload => {
    const response = await apiService.testconnectors_get_testid_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testconnectors_response_get_TestIDSSlice = createSlice({
  name: "testconnectors_response_get_TestIDS",
  initialState,
  reducers: {},
  extraReducers: {
    [testconnectors_get_testid_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [testconnectors_get_testid_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [testconnectors_get_testid_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  testconnectors_get_testid_read,
  slice: testconnectors_response_get_TestIDSSlice
}
