import axios from "axios";

async function getblog() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}
export default async function Blog() {
  const blogs = await getblog();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-3xl">Blog</div>
      {blogs.map((blog: ITodo) => (
        <Todo title={blog.title} completed={blog.completed} />
      ))}
    </div>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      {title} {completed ? "done" : "not done"}
    </div>
  );
}
