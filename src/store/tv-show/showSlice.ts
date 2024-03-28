import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import IMovieShow from "../../interface/tv-show/IMovieShow";
import IShowEpisode from "../../interface/tv-show/IShowEpisode";

const baseUrl ="https://api.tvmaze.com";

interface ShowState {
  episodesData: {
    episodes: IShowEpisode[];
    error: string;
    isLoading: boolean;
  }
  showData: {
    show: IMovieShow;
    error: string;
    isLoading: boolean;
  };
}

const initialState: ShowState = {
  showData: {
    show: {name: "", id: "", summary: "", image:{medium: "", original: ""}},
    error: "",
    isLoading: false,
  },
  episodesData: {
    episodes: [],
    error: "",
    isLoading: false,
  }
}

const showSlice = createSlice({
    name: "tv-show",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase(fetchShow.pending, (state) => {
        state.showData.isLoading = true;
        console.log("fetching show loading")
      })
       .addCase(fetchShow.fulfilled, (state, action) => {
          state.showData.show = action.payload;
          state.showData.isLoading = false;
        })
       .addCase(fetchShow.rejected, (state, action) => {
        console.log("something went wrong",action.payload)
        state.showData.error = JSON.stringify(action.error);
      });

      builder
       .addCase(fetchEpisodes.pending, (state) => {
        state.episodesData.isLoading = true;
        console.log("fetching episodes loading")
      })
       .addCase(fetchEpisodes.fulfilled, (state, action) => {
          state.episodesData.episodes = action.payload;
          state.episodesData.isLoading = false;
        })
       .addCase(fetchEpisodes.rejected, (state, action) => {
        console.log("something went wrong",action.payload)
        state.episodesData.error = JSON.stringify(action.error);
      });
    },
});

export const fetchEpisodes = createAsyncThunk(
  "tv-show/fetchEpisodes",
  async (showId: number) => {
    const response = await fetch(`${baseUrl}/shows/${showId}/episodes`)
    const data = await response.json()
    return data
  }
)

export const fetchShow = createAsyncThunk(
  "tv-show/fetchShow",
  async (query: string) => {
    const response = await fetch(`${baseUrl}/singlesearch/shows?q=${query}`)
    const data = await response.json()
    return data
  }
);

export default showSlice.reducer;