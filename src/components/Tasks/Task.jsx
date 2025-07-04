import TaskList from "./TaskList";

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
    <div id="task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      ></input>
      <label>{task.name}</label>
    </div>
  );
}
