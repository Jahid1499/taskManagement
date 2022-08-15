
import {action, computed} from 'easy-peasy';
import { v4 as uuidv4 } from 'uuid';
export default {
    tasks: [],
    addTask: action((state, task) => {
        task.id = uuidv4();
        state.tasks = [...state.tasks, task]
    }),

    removeTask: action((state, id)=>{

        state.tasks = state.tasks.filter(task => task.id !== id)
    }),

    getTaskById: computed((state) => {
        return (id) => state.tasks.find(task => task.id === id);
    }),

    updateTask: action((state, newTask)=>{
        state.tasks = state.tasks.map((task)=>{
            if (task.id === newTask.id)
            {
                return newTask
            }
            return task
        })
    })
}