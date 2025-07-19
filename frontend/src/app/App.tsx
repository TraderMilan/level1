import {MainPage} from "../pages/MainPage.tsx";
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {RegisterPage} from "../pages/RegisterPage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/register" replace />} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
