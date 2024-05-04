import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import TaskCard from "./TaskCard";
import Applayout from "../Layout/Applayout";
import { useAuth } from "../../context/authContext";
import { useTaskContext } from "../../context/taskContext";
import AddTaskForm from "./AddTaskForm";
import UpdateTaskModal from "./UpdateTaskModal";
import { motion, AnimatePresence } from "framer-motion";

const TaskManager = () => {
  const [editingTask, setEditingTask] = useState(null);
  const {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    changeFilter,
  } = useTaskContext();

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
  };
  return (
    <Applayout>
      <div className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
        <div className="w-full sm:w-[90%] lg:w-[60%] xl:w-[50%] mx-auto sm:shadow-md p-5 sm:rounded-xl sm:border flex flex-col gap-3">
          {/* filter / add task form  */}
          <div className="w-full flex flex-col  sm:flex-row sm:items-end justify-between mt-[25%] sm:mt-0 ">
            {/* filter  */}
            <select
              onChange={(e) => changeFilter(e.target.value)}
              class="h-[40px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] outline-none focus:ring-blue-500 focus:border-blue-500 block  p-2.5   "
            >
              <option selected value="All">
                All
              </option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>

            <AddTaskForm />
          </div>
          {/* task list  */}
          <div className="w-full flex flex-col gap-2 sm:max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
            {[...tasks].reverse().map((task) => {
              const { id, text, completed } = task;
              return (
                <div key={id}>
                  <TaskCard
                    text={text}
                    checked={completed}
                    onChange={() => toggleTaskCompletion(id)}
                    deleteTask={() => deleteTask(id)}
                    editTask={() => handleEditTask(task)}
                  />
                </div>
              );
            })}
            {tasks?.length < 1 && (
              <div className=" py-8 w-full h-full flex flex-col text-center gap-2 items-center justify-center">
                <div className="p-10 bg-red-50 rounded-full text-[2.5rem] text-red-400 ">
                  <span className="animate-pulse">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path>
                      <path d="M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path>
                    </svg>
                  </span>
                </div>
                <span className="text-gray-300 text-[20px] font-[400]">
                  Oops! No task
                </span>
              </div>
            )}
          </div>
        </div>

        {editingTask && (
          <UpdateTaskModal task={editingTask} onClose={handleCloseModal} />
        )}
      </div>
    </Applayout>
  );
};

export default TaskManager;
