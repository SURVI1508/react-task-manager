import React from "react";

const TaskCard = ({ text, deleteTask, checked, onChange, editTask }) => {
  return (
    <div className="w-full flex flex-row justify-between bg-gray-100 rounded-lg p-3">
      <div className="flex flex-row items-center gap-2">
        {/* mark as completed   */}
        <button
          onClick={onChange}
          className={`${
            checked
              ? "border-primary-500 bg-primary-500 text-white"
              : "border-primary-500 text-white bg-white"
          } border h-[18px] w-[18px] rounded-[3px] flex items-center justify-center transition-all duration-150`}
        >
          <span className="text-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
            </svg>
          </span>
        </button>
        <div className="flex flex-col">
          <h3
            style={{ textDecoration: checked ? "line-through" : "none" }}
            className="font-[500] text-[16px] text-primary-500 first-letter:capitalize "
          >
            {text}
          </h3>
        </div>
      </div>

      {/* action buttons  */}
      <div className="flex flex-row items-center gap-1">
        <button
          onClick={editTask}
          className="text-xl p-2 text-primary-500 hover:bg-gray-200 transition-all duration-200 rounded-md"
        >
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
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </button>
        <button
          onClick={deleteTask}
          className="text-xl p-2 text-primary-500 hover:bg-gray-200 transition-all duration-200 rounded-md"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#D9D9D9" d="M292.7 840h438.6l24.2-512h-487z"></path>
            <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
