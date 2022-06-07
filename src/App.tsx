import { Routes, Route, useLocation, useNavigate } from "solid-app-router";
import { lazy } from "solid-js";

// Pages with Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const FourOFour = lazy(() => import("./pages/FourOFour"));

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname !== "/" && "/about") {
        navigate("/404", { replace: true });
    } else if (location.pathname !== "/" && "/about") {
        return true;
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
