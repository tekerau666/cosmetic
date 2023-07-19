import React, {Suspense} from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import {Navbar} from "../widgets/Navbar";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames"



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Sucking...</div>}>
                <Navbar/>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;
