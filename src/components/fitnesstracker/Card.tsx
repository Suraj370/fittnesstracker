import React from 'react'
import { useTodos } from "@/store/exercises";
import { FitnessData } from './FitnessData';
import { EraserIcon } from "@radix-ui/react-icons";

const Card = ({exercise}: {exercise: FitnessData}) => {
    const { handleDeleteTodo, toggleTodoAsCompleted} = useTodos();

  return (
    <div
    className="flex justify-between rounded-lg bg-white mb-2 px-4 py-4 text-gray-900 shadow"
    key={exercise.id}
  >
    <div>
      <div className='flex items-center gap-2'>
      <input type="checkbox" id={`todo-${exercise.id}`} checked={exercise.completed} onChange={() => {
                            toggleTodoAsCompleted(exercise.id)}
                        } />

      <p>{exercise.exercise}</p>
      
      </div>
      <p className="text-sm text-gray-500">Reps: {exercise.reps}</p>
   
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