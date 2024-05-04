import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    changeFilter("All");
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

  // retrieving data from localStorage
  useEffect(() => {
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Setting tasks in localStorage when change task state
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
        toggleTaskCompletion,
        filteredTasks,
        changeFilter,
        filter,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
