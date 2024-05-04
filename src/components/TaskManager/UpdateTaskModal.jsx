import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTaskContext } from "../../context/taskContext";
import InputControl from "../common/InputControl";
import Button from "../common/Button";

const UpdateTaskModal = ({ task, onClose }) => {
  const [updatedText, setUpdatedText] = useState(task.text);
  const { editTask } = useTaskContext();

  const handleUpdateTask = () => {
    editTask(task.id, { text: updatedText });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-[9999] top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000001a] backdrop-blur-[1px]"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="bg-white p-4 flex flex-col gap-3 rounded-md w-[90%] sm:w-[40%] lg:w-[50%] xl:w-[20%]"
        >
          <div className="w-full ">
            <h3 className="text-[16px] sm:text-[18px] text-primary-500 font-[600]">
              Update Task
            </h3>
          </div>
          <InputControl
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />

          <div className="w-full grid grid-cols-2 gap-2">
            <Button onClick={handleUpdateTask}>Update</Button>
            <button
              className={` h-[40px] disabled:cursor-not-allowed disabled:opacity-50 rounded-[5px] text-primary-500 border border-primary-500 bg-white   font-medium  text-sm px-5 py-2.5 text-center`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UpdateTaskModal;
