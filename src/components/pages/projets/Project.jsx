import Layout from "../../layouts/Layout";
import {useState} from "react";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import {useStoreActions, useStoreState} from "easy-peasy";


const init = {
    title: '',
    description: '',
    status: true,
}

const Project = () => {
    const [formDisplay, setFormDisplay] = useState(false)
    const [projectInit, setProject] = useState({...init})
    const [formUpdate, setFormUpdate] = useState(false)

    const {projects, getProjectById} = useStoreState((state) => state.project);
    const {addProject, removeProject, updateProject} = useStoreActions(actions => actions.project);

    const submitHandler = (project, formType) =>{
        if (formType){
            updateProject({...project})
            setFormUpdate(false)
        }else{
            addProject({...project})
        }
        setFormDisplay(false)
        setProject({...init})
    }

    const cancelHandler =()=>{
        setFormDisplay(false)
        setFormUpdate(false)
        setProject({...init})
    }

    const editSingleProject = (id) =>{
        const singleProject = getProjectById(id)
        setProject({...singleProject})
        setFormUpdate(true)
        setFormDisplay(true)
    }


    return (
        <>
            <Layout>
                <Button sx={{marginBottom: '30px'}} variant="contained" onClick={()=>setFormDisplay(true)} startIcon={<AddIcon />}>New Project</Button>
                {
                    formDisplay ? <ProjectForm isUpdate={formUpdate} submitHandler={submitHandler} cancelHandler={cancelHandler} projectInit={projectInit}/> : <ProjectList projects={projects} editProject={editSingleProject} removeProject={removeProject}/>
                }
            </Layout>
        </>
    );
};

export default Project;