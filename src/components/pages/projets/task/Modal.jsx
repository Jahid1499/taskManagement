
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import TaskFrom from "./TaskFrom";

const Modal = ({open, handleClose, submitHandler, cancelHandler, init, update=false}) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'lg'}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Task from"}
                </DialogTitle>
                <DialogContent>
                    <TaskFrom isUpdate={update} submitHandler={submitHandler} cancelHandler={cancelHandler} taskInit={init}/>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Modal;