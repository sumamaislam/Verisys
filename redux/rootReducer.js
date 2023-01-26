import { combineReducers } from "@reduxjs/toolkit";
import home from "./home"

export const combinedReducer = () =>
  combineReducers({
    home,
  });
