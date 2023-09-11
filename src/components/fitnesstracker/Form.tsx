import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Spinner } from "@/libs/Spinner";
import { useTodos } from "@/store/exercises";
interface FitnessFormProps {
  afterSave: () => void;
}

const FitnessForm = ({ afterSave }: FitnessFormProps) => {
  let [saving, setSaving] = useState(false);

  const { handleAddTodo } = useTodos();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    
  
    // Use formData.get to extract the values and convert them to the desired types
    const exercise = formData.get("exercise") as string;
    const reps = formData.get("Reps") as string;

    
    
  
    if (exercise !== null && reps !== null) {

      
      handleAddTodo(exercise, parseInt(reps));
    }
    
    setSaving(false)
  
  
    afterSave();
  
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset disabled={saving} className="group">
        <div className="mt-8 group-disabled:opacity-50">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900">
                Exercise
              </label>
              <input
                autoFocus
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm bg-white text-gray-900 shadow-sm sm:leading-6"
                type="text"
                name="exercise"
              />
            </div>

            <div>
              <label className="text-sm font-medium leading-6 text-gray-900">
                Reps
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm bg-white text-gray-900 shadow-sm sm:leading-6"
                type="number"
                name="Reps"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 space-x-6 text-right">
          <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
            Cancel
          </Dialog.Close>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 group-disabled:pointer-events-none"
          >
            <Spinner className="absolute h-4 group-enabled:opacity-0" />
            <span className="group-disabled:opacity-0">Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default FitnessForm;
