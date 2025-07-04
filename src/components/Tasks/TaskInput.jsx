import { Button } from "@chakra-ui/react";

export default function TaskInput({ taskList, setTaskList }) {
  const handleClick = () => {
    const updatedTasks = [
      ...taskList,
      { name: "New Task", completed: false, id: crypto.randomUUID() },
    ];

    setTaskList(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };

  return (
    <Button id="new-task" onClick={handleClick}>
      New Task
    </Button>
  );
}
