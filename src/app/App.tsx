import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.scss';


const App = () => {

    return (
        <div>
            <Suspense fallback={<div>Sucking...</div>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;
