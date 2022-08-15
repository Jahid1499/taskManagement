import {BrowserRouter, Route, Routes} from "react-router-dom";
import Project from "../pages/projets/Project";
import Member from "../pages/members/Member";

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Project />}/>
                    <Route path="/member" element={<Member />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MyRoutes;