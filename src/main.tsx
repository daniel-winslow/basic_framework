
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "@/app/App";
import Docs from "@/app/pages/Docs";
import "./styles/index.css";
import LayoutShowcase from "@/app/pages/LayoutShowcase";
import ComponentsShowcase from "@/app/pages/ComponentsShowcase";

createRoot(document.getElementById("root")!).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/layouts/*" element={<LayoutShowcase />} />
            <Route path="/components/*" element={<ComponentsShowcase />} />
            <Route path="/docs" element={<Doc />} />
        </Routes>
    </Router>
);