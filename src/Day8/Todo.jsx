import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todos, setTodos] = useState([]);      // To store todo list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error message
  const [newTask, setNewTask] = useState("");   // New input value

  // Fetch initial todo list from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.post("https://dummyjson.com/todos/add",{        
            todo: newTask,
        completed: false,
        userId: 1,// dummy error
        });

        setTodos([response.data,...todos]);
        setNewTask("");
      } catch (err) {
        setError("Error fetching todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add new todo by calling POST API
  const handleAddTodo = async () => {
    if (newTask.trim() === "") return;

    try {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: newTask,
        completed: false,
        userId: 1 // Required field for dummyjson API
      });

      // Add the response todo to the top of the list
      setTodos((prevTodos) => [response.data, ...prevTodos]);
      setNewTask(""); // Clear input
    } catch (err) {
      alert("Failed to add task");
      console.error("Error adding todo:", err);
    }
  };

  // Handle delete confirmation


const handleDelete = async (todo) => {
  const message = ` Task: ${todo.todo}\nStatus: ${todo.completed ? "Completed" : "Pending"}\nID: ${todo.id}`;
  const confirmDelete = window.confirm(`${message}\n\n❗ Do you want to delete this task?`);

  if (!confirmDelete) return;

  try {
    // Assuming your API DELETE endpoint looks like this:
    await axios.delete(`/api/todos/${todo.id}`);

    // Update local state only if API call succeeds
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));

    alert("Task deleted successfully!");
  } catch (error) {
    console.error("Failed to delete task:", error);
    alert("Error deleting the task. Please try again later.");
  }
};


  // Show loading or error
  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="todo-container">
      <h2>To Do List</h2>

      {/* Input + Add Task */}
      <div className="add-todo">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update state with input
          placeholder="Enter new task"
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      {/* Display Tasks */}
      <table className="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
              <td className={todo.completed ? "todo-completed" : "todo-pending"}>
                {todo.completed ? "✅ Completed" : "❌ Pending"}
              </td>
              <td>
                <button className="detail-button" onClick={() => handleDelete(todo)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
