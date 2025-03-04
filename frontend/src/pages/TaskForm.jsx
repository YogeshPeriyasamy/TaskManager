// to edit or delete a task
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, getTaskById, updateTask } from "../api";
import './../index.css'

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    const res = await getTaskById(id);
    setTitle(res.data.title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, { title });
    } else {
      await createTask({ title });
    }
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-blue-500">{id ? "Edit Task" : "Add Task"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button className="btn bg-green-500 text-white px-4 py-2 rounded mt-4">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
