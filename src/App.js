import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Appointment } from "./component/Appointment";
import { Dashboard } from "./component/Dashboard";
import { Title } from "./component/Title";
import { Login } from "./page/Login";
import { Register } from "./page/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Register />} />
                <Route path="/Appointment" element={<Appointment />} />
                <Route path="/Appointment/Title" element={<Title />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
