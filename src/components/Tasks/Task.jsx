import { Box, Input } from "@chakra-ui/react";

export default function Task({ task, taskList, setTaskList }) {
  function handleChange(event) {
    const updatedTasks = taskList.map((currentTask) =>
      currentTask.id === task.id
        ? { ...currentTask, completed: event.target.checked }
        : currentTask
    );

    setTaskList(updatedTasks);

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  }

  return (
    <Box id="task-container">
      <Input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      ></Input>
      <label>{task.name}</label>
    </Box>
  );
}
