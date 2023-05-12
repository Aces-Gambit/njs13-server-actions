"use client";
import { experimental_useFormStatus } from "react-dom";

export default function AddButton() {
    const { pending } = experimental_useFormStatus();

    return (
       <button
       disabled={pending}
        type="submit"
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
       >
        Add Todo
       </button> 
    );
}