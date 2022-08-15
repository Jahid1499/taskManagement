import {Button, Card, CardContent, Checkbox, FormControlLabel, TextareaAutosize, TextField} from "@mui/material";
import useForm from "../../../hooks/useForm";

const validate = (values) =>{
    const errors = {};
    if (!values.title) {
        errors.title = 'Title is Required';
    }

    if (!values.description) {
        errors.description = 'Description is Required';
    }
    return errors;
}

const ProjectForm = ({submitHandler, projectInit: init, cancelHandler, isUpdate= false}) => {

    const { formState: state, handleBlur, handleChange, handleFocus, handleSubmit, clear} = useForm({ init, validate });


    const formSubmit = ({ hasError, values, errors }) => {
        if ( !hasError) {
            submitHandler(values, isUpdate);
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: 500}}>
                <CardContent>
                    <form style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={(e)=>handleSubmit(e, formSubmit)}>
                        <TextField
                            id="outlined-number"
                            label="Project title"
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
                            label="Project description"
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
                        <FormControlLabel
                            name={'status'}
                            control={<Checkbox />}
                            label="Status"
                            checked={state.status.value}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <Button type={'submit'} variant="contained">{isUpdate == true ? 'Update' : 'Submit'}</Button>
                        <Button onClick={cancelHandler} type={'reset'} variant="contained">Cancel</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default ProjectForm;