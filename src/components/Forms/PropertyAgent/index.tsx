import React from "react";
import { useFormStatus } from "react-dom";
import { createAgent } from "@/actions";
import InputField from "../InputField";

export default function PropertyAgentTemplate() {
  const { pending } = useFormStatus();
  return (
    <form action={createAgent} className="w-full max-w-md space-y-4">
      <InputField type="text" id="firstName" name="firstName" label="First Name" required />
      <InputField type="text" id="lastName" name="lastName" label="Last Name" required />
      <InputField type="email" id="email" name="email" label="Email" required />
      <InputField type="tel" id="mobileNumber" name="mobileNumber" label="Phone" required />
      <button
        type="submit"
        disabled={pending}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {pending ? "Saving..." : "Save Agent"}
      </button>
    </form>
  );
}
