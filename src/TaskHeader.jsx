import React from "react";
import { useSelector } from "react-redux";
const TaskHeader = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const numberOfTaskDone = tasks.filter((task) => !task.done).length;
  //console.log(taskDoneNumber)
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-center uppercase mt-2 bg-gray-700 text-white/90 font-semibold p-3 text-2xl">
        Taches a faire : {numberOfTaskDone}
      </p>
    </div>
  );
};

export default TaskHeader;
