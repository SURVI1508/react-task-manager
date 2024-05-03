import React, { useEffect } from "react";
import Button from "../common/Button";
import TaskCard from "./TaskCard";
import Applayout from "../Layout/Applayout";
import { useAuth } from "../../context/authContext";
import { useTaskContext } from "../../context/taskContext";
import AddTask from "./AddTaskModal";

const TaskManager = () => {
  const { isModal } = useTaskContext();
  const {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    changeFilter,
  } = useTaskContext();
  return (
    <Applayout>
      <div className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
        <div className="w-full sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto sm:shadow-md p-5 sm:rounded-xl border flex flex-col gap-3">
          {/* filter / add button  */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            {/* filter  */}
            <div className="flex flex-row items-center gap-2">
              <button
                onClick={() => changeFilter("All")}
                className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
              >
                All
              </button>
              <button
                onClick={() => changeFilter("Completed")}
                className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
              >
                Compleated
              </button>
              <button
                onClick={() => changeFilter("Incomplete")}
                className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
              >
                Incompleate
              </button>
            </div>

            <AddTask />
          </div>
          {/* task list  */}
          <div className="w-full flex flex-col gap-2 sm:max-h-[50vh] overflow-y-auto pr-2">
            {tasks.map((task) => (
              <div key={task.id}>
                <TaskCard
                  text={task.text}
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  deleteTask={() => deleteTask(task.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Applayout>
  );
};

export default TaskManager;
