import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import TaskList from "../Tasks/TaskList";
import TaskInput from "../Tasks/TaskInput";
import "./App.css";

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem("taskList");
    return data ? JSON.parse(data) : [];
  });

  return (
    <Box id="container">
      <Heading size="3xl" id="tasks-header">
        Tasks
      </Heading>
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <TaskInput taskList={taskList} setTaskList={setTaskList} />
    </Box>
  );
}
