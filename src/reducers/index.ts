import { combineReducers } from "redux";

import fibonacci from "./fibonacci";

export const rootReducer = combineReducers({
  fibonacci,
});

export type IRootState = ReturnType<typeof rootReducer>;
