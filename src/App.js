//import { useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "faire les courses",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Menage",
  //     done: true,
  //   },
  // ]);

  // const addTask = (title) => {
  //   const newTask = {
  //     title,
  //     id: Date.now(),
  //     done: false,
  //   };
  //   setTasks([...tasks, newTask]);
  //   console.log(tasks)
  // };
  // const deleteTask = (id) => {
  //   const filteredTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(filteredTasks);
  // };
  // const toogleTask = (id) => {
  //   const realTask = tasks.find((task) => task.id === id);
  //   //console.log(realTask)
  //   const index = tasks.findIndex((task) => task.id === id);
  //   const taskCopy = { ...realTask };
  //  //console.log('copy:',taskCopy)
  //   const tasksListCopy = [...tasks];
  //   //console.log(tasksListCopy)
  //   taskCopy.done = !taskCopy.done;
  //   tasksListCopy[index] = taskCopy;
  //   setTasks(tasksListCopy);
  // };
  return (
    <>
      <article>
        {/* <TaskHeader tasks={tasks} /> */}
        <TaskHeader />
        <TaskList />
        {/* <TaskList
          tasks={tasks}
          toogleTask={toogleTask}
          deleteTask={deleteTask}
        /> */}
        <footer className=" mt-6">
          {/* <TaskForm addTask={addTask} /> */}
          <TaskForm />
        </footer>
      </article>
    </>
  );
}

export default App;
