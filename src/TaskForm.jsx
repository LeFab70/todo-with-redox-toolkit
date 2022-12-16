import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "./features/Tasks.slice";
const TaskForm = () => {
  const dispatch = useDispatch();
  const {
    mode: onChange, //onBlur,
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();
  //console.log(props);
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data.inputTodo));

  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-x-3 flex justify-center items-center w-11/12 mx-auto py-5"
      >
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="text"
          placeholder="votre tache ici"
          {...register("inputTodo", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "vous devez entrer au moins 5 caracteres",
            },
          })}
          className=" text-black rounded-sm border border-gray-300 w-2/3 px-2 py-1"
        />
        {/* errors will return when field validation fails  */}
        {errors.inputTodo && (
          <span className="text-sm text-red-800">
            {errors.inputTodo.message}
          </span>
        )}

        <input
          className=" disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer w-1/3 bg-green-900 text-white rounded-md hover:bg-green-700 transition duration-150 ease-in-out px-4 py-1  "
          type="submit"
          disabled={!isValid}
        />
      </form>
    </>
  );
};

export default TaskForm;
