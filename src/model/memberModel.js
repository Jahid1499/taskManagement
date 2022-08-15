
import {action, computed} from 'easy-peasy';
import { v4 as uuidv4 } from 'uuid';
export default {
    members: [],
    addMember: action((state, member) => {
        member.id = uuidv4();
        state.members = [...state.members, member]
    }),
    removeMember: action((state, id)=>{
        state.members = state.members.filter(member => member.id !== id)
    }),

    getMemberById: computed((state) => {
        return (id) => state.members.find(member => member.id === id);
    }),

    updateMember: action((state, newMember)=>{
        state.members = state.members.map((member)=>{
            if (member.id === newMember.id)
            {
                return newMember
            }
            return member
        })
    })
}