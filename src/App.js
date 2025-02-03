// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ComponentWorkshop from "./pages/Developer/component-workshop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="menu" element={<Menu />} />
                <Route path="developer">
                    <Route path="component-workshop" element={<ComponentWorkshop />}></Route>
                </Route>

                {/* TODO: replace this width a 404 page */}
                <Route path="*" element={<Menu />} /> {/* This must be last */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
