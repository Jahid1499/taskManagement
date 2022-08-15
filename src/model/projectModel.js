import {action, computed} from 'easy-peasy';
import { v4 as uuidv4 } from 'uuid';
export default {
    projects: [],
    addProject: action((state, project) => {
        project.id = uuidv4();
        state.projects = [...state.projects, project]
    }),

    removeProject: action((state, id)=>{
        state.projects = state.projects.filter(project => project.id !== id)
    }),

    getProjectById: computed((state) => {
        return (id) => state.projects.find(project => project.id === id);
    }),

    updateProject: action((state, newProject)=>{
        state.projects = state.projects.map((project)=>{
            if (project.id === newProject.id)
            {
                return newProject
            }
            return project
        })
    })
}