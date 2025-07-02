import React from 'react'
import checked from "../assets/ttick.png";
import unchecked from "../assets/not_tick.png";
import trash from "../assets/delete.png";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div
        onClick={() => onToggle(task.id)}
        className="flex items-center cursor-pointer flex-1"
      >
        <img
          src={task.completed ? checked : unchecked}
          alt="status"
          className="w-6 h-6"
        />
        <span
          className={`ml-4 text-lg ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800 font-medium"
          }`}
        >
          {task.description}
        </span>
      </div>
      <img
        src={trash}
        alt="Delete"
        onClick={() => onDelete(task.id)}
        className="w-4 h-4 cursor-pointer hover:opacity-70"
      />
    </div>
  );
};

export default TaskItem;
