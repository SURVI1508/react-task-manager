import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        editTask,
        deleteTask,
        isModal,
        setIsModal,
        toggleTaskCompletion,
        filteredTasks,
        changeFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
