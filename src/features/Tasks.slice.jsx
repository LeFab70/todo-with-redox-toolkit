import { createSlice } from "@reduxjs/toolkit";
const TasksSlice = createSlice({
  name: "Tasks", //c nom precedera le nom des differentes actions ou reducers
  initialState: {
    tasks: [
      {
        id: 1,
        title: "faire les courses",
        done: false,
      },
      {
        id: 2,
        title: " faire le Menage",
        done: true,
      },
    ],
  },
  reducers: {
    //payload est la donnee en entree qui permettra de modifier le state
    // le state est automatiquement copie pas besoin de faire une copei a nouveau
    addTask: (state, { payload }) => {
      const newTask = {
        id: Date.now(),
        done: false,
        title: payload,
      };
      state.tasks.push(newTask);
    },

    // une action ici cet nameslice/nameaction exemple: Tasks/addTask
    toggleTask: (state, { payload }) => {
      //chercher la tache correspondant a id entree soit payload
      const task = state.tasks.find((todo) => todo.id === payload);
      task.done = !task.done;
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = TasksSlice.actions;

export default TasksSlice.reducer;
