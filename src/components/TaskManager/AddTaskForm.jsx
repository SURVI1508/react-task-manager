import React, { useState } from "react";
import Button from "../common/Button";
import InputControl from "../common/InputControl";
import { useTaskContext } from "../../context/taskContext";

const AddTask = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const { addTask } = useTaskContext();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() !== "") {
      addTask({ id: Date.now(), text: newTaskText, completed: false });
      setNewTaskText("");
    }
  };
  return (
    <form
      onSubmit={handleAddTask}
      className="flex flex-col sm:flex-row items-end gap-2"
    >
      <InputControl
        required
        type="text"
        placeholder="Enter task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />

      <Button customClass="w-full sm:w-auto" type="submit">
        Add task
      </Button>
    </form>
  );
};

export default AddTask;
