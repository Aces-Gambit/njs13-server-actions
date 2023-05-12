import { revalidatePath } from 'next/cache';
import Image from 'next/image'
const todos:string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data:FormData){
    "use server";
    const todo = data.get('todo') as string;
    todos.push(todo);
    revalidatePath('/');
  }
  return (
    <main className='p-5'>
      <h1 className='text-4xl font-bold'>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo} className='flex gap-x-2'>
        <input 
          type='text'
          name='todo'
          className='border-2 border-gray-300 rounded-lg py-4 px-4 text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        />
        <button
          type='submit'
          className='bg-blue-600 disabled:bg-gray-500 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Add Todo
        </button>
      </form>
    </main>
  )
}
