"use client";
import { useRef, useTransition } from "react";

export default function AddButton({
    addTodo
}:{
    addTodo:(todo:string) => Promise<void>;
}) {
    const [pending, startTransition] = useTransition();
    const todoRef = useRef<HTMLInputElement>(null);

    return (
    <div className='flex gap-x-2'>
        <input 
          ref= {todoRef}
          type='text'
          name='todo'
          className='border-2 border-gray-300 rounded-lg py-4 px-4 text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        />
       <button
        disabled={pending}
        onClick={async () => {
            startTransition(async () => {
                await addTodo(todoRef.current!.value);
            });
        }}
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
       >
        Add Todo
       </button> 
    </div>
    );
}