import { useState } from "react";
import TaskList from "../Tasks/TaskList";
import TaskInput from "../Tasks/TaskInput";
import "./App.css";

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem("taskList");
    return data ? JSON.parse(data) : [];
  });

  return (
    <div id="container">
      <h1 id="tasks-header">Tasks</h1>
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <TaskInput taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
