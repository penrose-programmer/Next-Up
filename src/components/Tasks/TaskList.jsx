import Task from "./Task";

export default function TaskList({ taskList, setTaskList }) {
  const taskItems = taskList?.map((task) => (
    <Task
      task={task}
      taskList={taskList}
      setTaskList={setTaskList}
      key={task.id}
    />
  ));

  return <ul id="task-list">{taskItems}</ul>;
}
