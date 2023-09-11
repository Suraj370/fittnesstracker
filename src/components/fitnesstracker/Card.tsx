import React from 'react'
import { useTodos } from "@/store/exercises";
import { FitnessData } from './FitnessData';
import { EraserIcon } from "@radix-ui/react-icons";

const Card = ({exercise}: {exercise: FitnessData}) => {
    const { handleDeleteTodo} = useTodos();

  return (
    <div
    className="flex justify-between rounded-lg bg-white mb-2 px-4 py-4 text-gray-900 shadow"
    key={exercise.id}
  >
    <div>
      <p>{exercise.exercise}</p>
      <p className="text-sm text-gray-500">{exercise.reps}</p>
      <p></p>
    </div>

    <div>
        <button onClick={() => handleDeleteTodo(exercise.id)}>
        <EraserIcon/>
        </button>
        
    </div>
    </div>
  )
}

export default Card