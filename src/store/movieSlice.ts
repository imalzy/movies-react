import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../services";
import { IMovieResponseModel, Result } from "../models";

interface IDataState {
  data: Result[];
  loading: boolean;
  error: string | null;
  page?: number;
  total_pages?: number;
  total_results?: number;
}

const initialState: IDataState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  total_pages: 1,
  total_results: 1,
};

export const fetchData = createAsyncThunk(
  "movie/fetchData",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (page: number = 1): Promise<any> => {
    try {
      const response = await getMovie(page);
      if (!response || !response.page || !response.results) {
        throw new Error("Error fetching data");
      }
      return response;
    } catch (error) {
      throw new Error("Error fetching data: " + error || "Unknown error");
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<IMovieResponseModel<Result[]>>) => {
          state.loading = false;
          state.data = action.payload?.results || [];
          state.page = action.payload?.page || 1;
          state.total_pages = action.payload?.total_pages || 1;
          state.total_results = action.payload?.total_results || 1;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});

export const { setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;
