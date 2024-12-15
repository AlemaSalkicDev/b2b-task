import React from 'react';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {orange} from '@mui/material/colors';
import Main from "./pages/Main/Main";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: orange[300],
        },
    },
});

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Main></Main>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
