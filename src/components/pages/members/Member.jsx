import Layout from "../../layouts/Layout";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MemberList from "./MemberList";
import {useState} from "react";
import MemberFrom from "./MemberFrom";
import {useStoreActions, useStoreState} from "easy-peasy";

const init = {
    name: '',
    email: '',
    status: true,
}

const Member = () => {
    const [formDisplay, setFormDisplay] = useState(false)
    const [memberInit, setMemberInit] = useState({...init})
    const [formUpdate, setFormUpdate] = useState(false)

    const {members, getMemberById} = useStoreState((state) => state.member);
    const {addMember, removeMember, updateMember} = useStoreActions(actions => actions.member);

    const submitHandler = (member, formType) =>{
        if (formType){
            updateMember({...member})
            setFormUpdate(false)
        }else{
            addMember({...member})
        }
        setFormDisplay(false)
        setMemberInit({...init})
    }

    const cancelHandler =()=>{
        setFormDisplay(false)
        setFormUpdate(false)
        setMemberInit({...init})
    }

    const editSingleMember = (id) =>{
        const singleMember = getMemberById(id)
        setMemberInit({...singleMember})
        setFormUpdate(true)
        setFormDisplay(true)
    }

    return (
        <>
            <Layout>
                <Button variant="contained" onClick={()=>setFormDisplay(true)} startIcon={<AddIcon />}>New member</Button>
                {
                    formDisplay ? <MemberFrom isUpdate={formUpdate} submitHandler={submitHandler} cancelHandler={cancelHandler} memberInit={memberInit}/> : <MemberList members={members} editMember={editSingleMember} removeMember={removeMember}/>
                }
            </Layout>
        </>
    );
};

export default Member;