import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "../features/Tasks.slice";
export const store = configureStore({
  reducer: {
    tasks: TasksSlice,
  },
});
