import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import style from '../../css/nav.module.css'


const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{py: '8px'}}>
                <Container>
                    <Toolbar variant="dense" sx={{ display: 'flex', gap: '50%'}}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                <Link className={style.navCss} to='/'>Task management</Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="p" color="inherit">
                                <NavLink className={(navInfo) => navInfo.isActive ? style.activeClass : style.navCss} to='/'>Project</NavLink>
                            </Typography>
                            <Typography variant="p" color="inherit" sx={{px: '15px'}}>
                                <NavLink className={(navInfo) => navInfo.isActive ? style.activeClass : style.navCss} to='/member'>Member</NavLink>
                            </Typography>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default NavBar;