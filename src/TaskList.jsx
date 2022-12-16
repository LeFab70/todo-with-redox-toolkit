import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
const TaskList = () => {
    const tasks=useSelector((state)=>state.tasks.tasks)
    console.log(tasks)
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
         
        />
      ))}



{/* {props.tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          toogleTask={props.toogleTask}
          deleteTask={props.deleteTask}
        />
      ))} */}
    </>
  );
};

export default TaskList;
