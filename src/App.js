import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Profile } from "./component/Profile";
import { Title } from "./component/Title";

function App() {
    return (
        <BrowserRouter>
            <Profile />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Title" element={<Title />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
