import { useState } from "react";
import { Box } from "@chakra-ui/react";
import TaskList from "../Tasks/TaskList";
import "./App.css";

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    const taskData = localStorage.getItem("taskList");
    return taskData ? JSON.parse(taskData) : [];
  });

  return (
    <Box id="container">
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </Box>
  );
}
