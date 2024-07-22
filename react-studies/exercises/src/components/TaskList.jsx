import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  return (
    <>
      <h3>Adicione uma atividade</h3>
      <input
        type="text"
        id="task-description"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>

      <h4>Lista de Tarefas</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
