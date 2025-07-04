import { Box, Checkbox } from "@chakra-ui/react";

export default function Task({ task, taskList, setTaskList }) {
  function handleChange(field, value) {
    const updatedTasks = taskList.map((currentTask) =>
      currentTask.id === task.id
        ? { ...currentTask, [field]: value }
        : currentTask
    );

    setTaskList(updatedTasks);

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  }

  return (
    <Box id="task-container" display="flex" flexDir="row">
      <Checkbox.Root
        checked={task.completed}
        onChange={(event) => handleChange("completed", event.target.value)}
        colorPalette="yellow"
        borderWidth="10x"
      >
        <Checkbox.HiddenInput />

        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>

        <Checkbox.Label></Checkbox.Label>
      </Checkbox.Root>
      <input
        value={task.name}
        onChange={(event) => handleChange("name", event.target.value)}
      ></input>
    </Box>
  );
}
