import React from "react";
import Button from "../common/Button";
import TaskCard from "./TaskCard";

const TaskManager = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 items-center justify-center">
      <div className="w-full sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto sm:shadow-md p-5 sm:rounded-xl border flex flex-col gap-3">
        {/* filter / add button  */}
        <div className="w-full flex flex-row items-center justify-between">
          {/* filter  */}
          <div className="flex flex-row items-center gap-2">
            <button
              className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
            >
              All
            </button>
            <button
              className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
            >
              Compleated
            </button>
            <button
              className={`rounded-[4px] text-primary-500 bg-primary-100 px-2 py-1 text-[13px] font-[500]`}
            >
              Incompleate
            </button>
          </div>

          <Button>Add Task</Button>
        </div>
        {/* task list  */}
        <div className="w-full flex flex-col gap-2 sm:max-h-[70vh] overflow-y-auto pr-2">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard /> <TaskCard />
          <TaskCard />
          <TaskCard /> <TaskCard />
          <TaskCard />
          <TaskCard /> <TaskCard />
          <TaskCard />
          <TaskCard /> <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
