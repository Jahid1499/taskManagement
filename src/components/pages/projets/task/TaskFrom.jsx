import {
    Button,
    TextField
} from "@mui/material";
import useForm from "../../../../hooks/useForm";
import {useStoreState} from "easy-peasy";

const validate = (values) =>{
    const errors = {};
    if (!values.title) {
        errors.title = 'Title is Required';
    }

    if (!values.description) {
        errors.description = 'Description is Required';
    }

    if (!values.deadline) {
        errors.deadline = 'Deadline is Required';
    }

    if (!values.assignee) {
        errors.assignee = 'Assignee is Required';
    }

    return errors;
}

const TaskFrom = ({submitHandler, taskInit:init, cancelHandler, isUpdate= false}) => {
    const { formState: state, handleBlur, handleChange, handleFocus, handleSubmit, clear} = useForm({ init, validate });
    const formSubmit = ({ hasError, values, errors }) => {
        if ( !hasError) {
            submitHandler(values, isUpdate);
        }
    };
    const {members} = useStoreState((state) => state.member);

    return (
        <>
            <form style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}} onSubmit={(e)=>handleSubmit(e, formSubmit)}>
                <TextField
                    id="outlined-number"
                    label="Task title"
                    name={'title'}
                    value={state.title.value}
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    error={state.title.error ? true : false}
                    helperText={state.title.error}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <TextField
                    id="outlined-number"
                    label="Task description"
                    name={'description'}
                    type="text"
                    value={state.description.value}
                    error={state.description.error ? true : false}
                    helperText={state.description.error}
                    multiline={true}
                    minRows={10}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                <label>Status</label>
                <select name="status" style={{borderColor: state.status.error ? 'red' : 'black'}} value={state.status.value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
                    <option value="">Select One</option>
                    <option value={'new'}>New</option>
                    <option value={'solve'}>Solve</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'bug'}>Bug</option>
                </select>
                <label style={{color: "red"}}>{state.status.error}</label>

                <label>Assignee</label>
                <select name="assignee" style={{borderColor: state.status.error ? 'red' : 'black'}} value={state.assignee.value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
                    <option value="">Select One</option>
                    {
                        members?.map((member)=>(member.status && <option key={member.id} value={member.name}>{member.name}</option>))
                    }
                </select>
                <label style={{color: "red"}}>{state.assignee.error}</label>

                <input type="date"
                   name={'deadline'}
                   value={state.deadline.value}
                   onChange={handleChange}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   style={{borderColor: state.deadline.error ? 'red' : 'black'}}
                />
                <label style={{color: "red"}}>{state.deadline.error}</label>

                <Button type={'submit'} variant="contained">{isUpdate == true ? 'Update' : 'Submit'}</Button>
                <Button onClick={cancelHandler} type={'reset'} variant="contained">Cancel</Button>
            </form>
        </>
    );
};

export default TaskFrom;