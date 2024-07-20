import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  taskItems: [],
  completedTasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = {
        id: uuidv4(),
        name: action.payload.name,
      };
      state.taskItems.push(newItem);
      state.totalTasks += 1;
    },
    removeItems: (state, action) => {
      state.taskItems = state.taskItems.filter(
        item => item.id !== action.payload.id
      );
      state.totalTasks -= 1;
    },
    editItems: (state, action) => {},
    completedTask: (state, action) => {
      const itemIndex = state.taskItems.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        const completedItem = state.taskItems[itemIndex];
        state.taskItems.splice(itemIndex, 1);
        state.completedTasks.push(completedItem);
      }
    },
    removeCompletedItem: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addItems,
  removeItems,
  editItems,
  completedTask,
  removeCompletedItem,
} = todoSlice.actions;

export default todoSlice.reducer;
