import {Button, Card, CardContent, Chip, Stack, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./task/Modal";
import {useState} from "react";
import {useStoreActions, useStoreState} from "easy-peasy";

const init = {
    title: '',
    description: '',
    deadline: '',
    assignee: '',
    status: 'new',
}

const ProjectList = ({projects, editProject, removeProject}) => {

    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false)
    const [projectId, setProjectId] = useState(null)
    const [taskInit, setTaskInit] = useState({...init})
    const handleClickOpen = (id) => {
        setProjectId(id)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const {tasks, getTaskById} = useStoreState((state) => state.task);
    const {addTask, removeTask, updateTask} = useStoreActions(actions => actions.task);


    const submitHandler = (task, formType) =>{
        if (formType){
            updateTask({...task})
            setUpdate(false)
        }else{
            task.projectId = projectId;
            addTask({...task})
        }
        setOpen(false)
        setProjectId(null)
        setTaskInit({...init})
    }

    const cancelHandler =()=>{
        setUpdate(false)
        setOpen(false)
        setProjectId(null)
        setTaskInit({...init})
    }

    const editSingleTask = (id) =>{
        const singleTask = getTaskById(id)
        setTaskInit({...singleTask})
        setUpdate(true)
        setOpen(true)
    }

    return (
        <>
            {
                projects.length < 1 && (<Typography gutterBottom variant="h6" component="div">Project not found</Typography>)
            }
            {
                projects && projects.length > 0 && projects.map((project)=>(
                    <Card sx={{ maxWidth: '100%', marginBottom: '1rem' }} key={project.id}>
                        <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Stack>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" textAlign={'justify'} pr={'3rem'} color="text.secondary">
                                    {
                                        project.description
                                    }
                                </Typography>
                                <Stack>
                                    {
                                        tasks && tasks.length > 0 && tasks.map((task)=> (project.id == task.projectId &&
                                            <Card sx={{ maxWidth: '100%', margin: '1.5rem', padding: '1.5rem' }} key={task.id}>
                                                <h6>{task.title}</h6>
                                                <p>{task.description}</p>
                                                <Chip label={task.status} />
                                                <Chip label={task.deadline} />
                                                <Chip label={task.assignee} />
                                                <Button onClick={()=>editSingleTask(task.id)} variant="contained" startIcon={<EditIcon />}></Button>
                                                <Button onClick={()=>removeTask(task.id)} sx={{ color: 'white', backgroundColor: '#e74c3c', "&:hover": {backgroundColor: '#c0392b'} }} variant="contained" startIcon={<DeleteIcon />}></Button>
                                            </Card>
                                        ))
                                    }
                                </Stack>
                                <Button onClick={()=> handleClickOpen(project.id)} variant="contained" sx={{ marginTop: '1rem'}}>Create task</Button>
                            </Stack>
                            <Stack spacing={2}>
                                <Chip label={project.status ? 'Active' : 'InActive'} />
                                <Button onClick={()=>editProject(project.id)} variant="contained" startIcon={<EditIcon />}></Button>
                                <Button onClick={()=>removeProject(project.id)} sx={{ color: 'white', backgroundColor: '#e74c3c', "&:hover": {backgroundColor: '#c0392b'} }} variant="contained" startIcon={<DeleteIcon />}></Button>
                            </Stack>

                            <Modal open={open} handleClose={handleClose} init={taskInit} cancelHandler={cancelHandler} submitHandler={submitHandler} update={update}/>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    );
};

export default ProjectList;