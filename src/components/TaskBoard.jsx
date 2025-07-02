import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/todo_icon.png";
import TaskItem from "./TaskItem";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskList");
    return saved ? JSON.parse(saved) : [];
  });

  const inputRef = useRef();

  const handleAddTask = () => {
    const taskText = inputRef.current.value.trim();
    if (!taskText) return;

    const newTask = {
      id: crypto.randomUUID(),
      description: taskText,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    inputRef.current.value = "";
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="bg-white shadow-lg rounded-xl max-w-lg mx-auto p-6">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <img src={logo} alt="TaskBoard" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-gray-800">TaskBoard</h2>
      </header>

      {/* Input */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="What's your next move?"
          className="flex-1 bg-transparent outline-none text-gray-700"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg ml-3 font-semibold"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={toggleStatus}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default TaskBoard;
