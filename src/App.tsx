import { Routes, Route, useLocation, useNavigate } from "solid-app-router";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FourOFour from "./pages/FourOFour";

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname !== "/" && "/about") {
        navigate("/404", { replace: true });
    } else if (location.pathname !== "/" && "/about") {
        console.log("nice");
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<FourOFour />} />
            </Routes>
        </>
    );
}

export default App;
