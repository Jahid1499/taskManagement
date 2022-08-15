import {Button, Card, CardContent, Checkbox, FormControlLabel, TextField} from "@mui/material";
import useForm from "../../../hooks/useForm";

const validate = (values) =>{
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is Required';
    }

    if (!values.email) {
        errors.email = 'Email is Required';
    }

    return errors;
}

const MemberFrom = ({submitHandler, memberInit: init, cancelHandler, isUpdate= false}) => {
    const { formState: state, handleBlur, handleChange, handleFocus, handleSubmit, clear} = useForm({ init, validate });

    const formSubmit = ({ hasError, values, errors }) => {
        if ( !hasError) {
            submitHandler(values, isUpdate);
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: 345, marginTop: '1rem' }}>
                <CardContent>
                    <form style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={(e)=>handleSubmit(e, formSubmit)}>
                        <TextField
                            id="outlined-number"
                            label="Name"
                            name={'name'}
                            value={state.name.value}
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={state.name.error ? true : false}
                            helperText={state.name.error}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <TextField
                            id="outlined-number"
                            label="Email"
                            name={'email'}
                            type="email"
                            value={state.email.value}
                            error={state.email.error ? true : false}
                            helperText={state.email.error}
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

export default MemberFrom;