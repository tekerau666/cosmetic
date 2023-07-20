import React, {Suspense} from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import {Navbar} from "../widgets/Navbar";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames"
import {Sidebar} from "../widgets/Sidebar/index";



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
                <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
