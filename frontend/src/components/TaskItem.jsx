// to get the particular task
import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="flex justify-between bg-gray-100 p-3 rounded shadow">
      <span>{task.title}</span>
      <div>
        <Link to={`/edit/${task.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
          Edit
        </Link>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
