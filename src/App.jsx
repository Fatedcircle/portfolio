import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/Home/HomePage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px", width: "95vw" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<Portfolio />} />
                    <Route path="/projects/:projectName" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;