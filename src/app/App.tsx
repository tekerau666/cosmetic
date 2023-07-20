import React, {Suspense} from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import {Navbar} from "../widgets/Navbar";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames"
import {Sidebar} from "../widgets/Sidebar/index";
import { useTranslation } from 'react-i18next';


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    );
};

export default App;
