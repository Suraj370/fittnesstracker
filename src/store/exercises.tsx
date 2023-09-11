'use client'

import {createContext, ReactNode, useContext, useState} from "react";

export type Exercise = {
    id: string;
    exercise: string;
    reps:number,
    completed: boolean,
    createdAt: Date;
}

//thapa technical

export type ExerciseContext = {
    todos: Exercise[];
    handleAddTodo: (exercise: string, reps:number) => void; //call signature
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

export const exerciseContext = createContext<ExerciseContext | null>(null)

export function ExerciseProvider({children}: { children: ReactNode }) {

    const [todos, setTodos] = useState<Exercise[]>(() => {
        try{
        const newTodos = localStorage.getItem('exercises') || "[]";
        return JSON.parse(newTodos) as Exercise[]
        }catch (e) {
            return []
        }

    }) //an array of Todo objects
    function handleAddTodo(exercise: string, reps:number) {
        console.log(exercise);
        
        setTodos((prev) => {
            const newExercises: Exercise[] = [
                ...prev,
                {
                    id: (prev.length + 1).toString(),
                    exercise,
                    reps,
                    completed: false,
                    createdAt: new Date(),
                },
                
            ];
            localStorage.setItem("exercises", JSON.stringify(newExercises))
            return newExercises;
        })
    }




    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newExercises = prev.map((task) => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })
            localStorage.setItem("exercises", JSON.stringify(newExercises));
            return newExercises
        })
    }

    // handleDeleteTodo
    function handleDeleteTodo(id: string |undefined) {
        setTodos((prev) => {
            const newExercises = prev.filter((task) => task.id !== id)
            localStorage.setItem("exercises", JSON.stringify(newExercises));
            return newExercises
        });

    }

    return (
        // @ts-ignore
        <exerciseContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo}}>
            {children}
        </exerciseContext.Provider>
    );
}

export function useTodos() {
    const exerciseContextValue = useContext(exerciseContext);
    if (!exerciseContextValue) {
        throw new Error("useExercises used outside of Provider");
    }

    return exerciseContextValue;
}