
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Chip, Stack} from "@mui/material";

const MemberList = ({members, editMember, removeMember}) => {

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>#SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    members && members.length > 0 && members.map((member, index)=>(
                        <tr key={member.id}>
                            <td>{index+1}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            {/*<td>{member.status ? 'Active' : 'InActive'}</td>*/}
                            <td>
                                <Chip label={member.status ? 'Active' : 'InActive'} />
                            </td>
                            <td>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={()=>editMember(member.id)} variant="contained" startIcon={<EditIcon />}>
                                    </Button>

                                    <Button onClick={()=>removeMember(member.id)} sx={{ color: 'white', backgroundColor: '#e74c3c', "&:hover": {backgroundColor: '#c0392b'} }} variant="contained" startIcon={<DeleteIcon />}>
                                    </Button>
                                </Stack>
                            </td>
                        </tr>
                    ))
                }
                {
                    !members || members.length < 1 && (<tr>No data found</tr>)
                }

                </tbody>
            </table>
        </>
    );
};

export default MemberList;