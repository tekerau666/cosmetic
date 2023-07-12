import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import './styles/index.css';
import {AboutPageAsync} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage";

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}
export default App;
