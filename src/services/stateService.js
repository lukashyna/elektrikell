import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates";

const initialMainState = {
  activePrice: DEFAULT_ACTIVE_BUTTON,
  activeHour: 1,
  errorMessage: null,
  bestInterval: [],
  showSideBar: false,
  isLoading: true,
};

const initialDateState = {
  from: getDefaultFrom(),
  until: getDefaultUntil(),
};

export const setActivePrice = createAction("setActivePrice");
export const setActiveHour = createAction("setActiveHour");
export const setErrorMessage = createAction("setErrorMessage");
export const setBestInterval = createAction("setBestInterval");
export const setShowSideBar = createAction("setShowSideBar");
export const setIsLoading = createAction("setIsLoading");

const main = createReducer(initialMainState, (builder) => {
  builder
    .addCase(setActivePrice, (state, action) => {
      state.activePrice = action.payload;
    })
    .addCase(setActiveHour, (state, action) => {
      state.activeHour = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })
    .addCase(setBestInterval, (state, action) => {
      state.bestInterval = action.payload;
    })
    .addCase(setShowSideBar, (state, action) => {
      state.showSideBar = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

const dateSlice = createSlice({
  name: "date",
  initialState: initialDateState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setUntil: (state, action) => {
      state.until = action.payload;
    },
  },
});

export const { setFrom, setUntil } = dateSlice.actions;
export const store = configureStore({
  reducer: {
    main,
    date: dateSlice.reducer,
  },
});
