import React from 'react';
import memberModel from "./model/memberModel";
import projectModel from "./model/projectModel";
import taskModel from "./model/taskModel";

import { createStore, StoreProvider } from 'easy-peasy';
import CssBaseline from '@mui/material/CssBaseline';
import MyRoutes from "./components/routers/MyRoutes";

const App = () => {
    const store = createStore({
        member: memberModel,
        project: projectModel,
        task: taskModel,
    })
    return (
        <>
            <StoreProvider store={store}>
                <>
                    <CssBaseline/>
                    <MyRoutes/>
                </>
            </StoreProvider>
        </>
    );
};

export default App;