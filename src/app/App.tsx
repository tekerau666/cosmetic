import React, {Suspense} from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import {Navbar} from "../widgets/Navbar";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";



const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<div>Sucking...</div>}>
                <Navbar/>
                <button onClick={toggleTheme}>TOGGLE</button>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;
