import NavBar from "../navigation/NavBar";
import {Container} from "@mui/material";


const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            <Container sx={{my: '30px'}}>
                {
                    children
                }
            </Container>
        </>
    );
};

export default Layout;