import Task from "./Task";
import { Box, Heading } from "@chakra-ui/react";
import TaskInput from "../Tasks/TaskInput";

export default function TaskList({ taskList, setTaskList }) {
  const taskItems = taskList?.map((task) => (
    <Task
      task={task}
      taskList={taskList}
      setTaskList={setTaskList}
      key={task.id}
    />
  ));

  return (
    <Box>
      <Heading size="3xl" id="tasks-header">
        Tasks
      </Heading>
      <ul id="task-list">{taskItems}</ul>
      <TaskInput taskList={taskList} setTaskList={setTaskList} />
    </Box>
  );
}
