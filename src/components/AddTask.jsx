import React, { useState } from "react";
import Button from "./Button";
import "../css/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
    setError(false); // Limpa o estado de erro ao digitar no input
  };

  const handleAddTaskClick = () => {
    if (inputData.trim() !== "") {
      handleTaskAddition(inputData);
      setInputData("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className={`add-task-input ${error ? "error" : ""}`}
        type="text"
        placeholder="Digite uma tarefa"
      />
      {error && <p className="error-message">Campo Vazio. Por favor, preencha.</p>}
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;