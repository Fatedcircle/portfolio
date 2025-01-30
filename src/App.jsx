import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/Home/HomePage";

const App = () => {
    const [activePage, setActivePage] = useState("home");

    const renderPage = () => {
        switch (activePage) {
            case "home":
                return <HomePage />;
            case "projects":
                return <Portfolio />;
            case "blog":
                return <Blog />
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            default:
                return <h1>Page not found</h1>;
        }
    };

    return (
        <>
            <Navbar setActivePage={setActivePage} />
            <div style={{ padding: "20px", width: "80vw" }}>{renderPage()}</div>
        </>
    );
};

export default App;