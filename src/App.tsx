import { Routes, Route } from "solid-app-router";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
