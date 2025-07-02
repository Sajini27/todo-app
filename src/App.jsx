import React from 'react'
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <main className="bg-gradient-to-br from-slate-900 to-gray-800 min-h-screen py-10 px-4">
      <TaskBoard />
    </main>
  );
};

export default App;
