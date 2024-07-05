import {
  getHomeDiscountData,
  getHomeGoodPriceDate,
  getHomeHighScoreData,
  getHomeHotRecomendData,
  getHomeLongforData,
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchHomeDateAction = createAsyncThunk("fetchData", async () => {
//   return await getHomeGoodPriceDate();
// });

export const fetchHomeDateAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getHomeGoodPriceDate().then((res) => {
      dispatch(changeGoodPriceAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountAction(res));
    });
    getHomeHotRecomendData().then((res) => {
      dispatch(changeRecommendAction(res));
    });
    getHomeLongforData().then((res) => {
      dispatch(changeLongforAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
    reCommendInfo: {},
    longforInfo: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.disCountInfo = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.reCommendInfo = payload;
    },
    changeLongforAction(state, { payload }) {
      state.longforInfo = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDateAction.fulfilled, (state, { payload }) => {
    //   state.goodPriceInfo = payload;
    // });
  },
});
export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeRecommendAction,
  changeLongforAction,
} = homeSlice.actions;
export default homeSlice.reducer;
