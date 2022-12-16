import React from "react";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi2";
import { toggleTask, deleteTask } from "./features/Tasks.slice";
const TaskItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <>
      <label className="flex items-center justify-between px-1 py-1 w-11/12 mx-auto">
        <div className=" flex items-center space-x-2">
          <input
            checked={task.done}
            type="checkbox"
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <p>{task.title}</p>
        </div>
        <span onClick={() => dispatch(deleteTask(task.id))}>
          <HiOutlineTrash className=" fill-red-300 hover:fill-red-200 cursor-pointer " />
        </span>
      </label>
    </>
  );
};

export default TaskItem;
