//home component

const Home = () => {

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/add" className="btn bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Add Task
      </Link>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
