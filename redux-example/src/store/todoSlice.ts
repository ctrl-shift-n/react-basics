import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export type todoType = {
  id: string;
  title: string;
};

type initialDataType = {
  data: todoType[];
};

const initialState: initialDataType = { data: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const uid = uuid();
      state.data.push({ id: uid, title: action.payload.title });
    },

    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter(
        (task: todoType) => task.id !== action.payload.id
      );
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
