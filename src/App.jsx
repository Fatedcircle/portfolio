import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio"; // Je projectencomponent
import Blog from "./components/Blog/Blog";
import About from "./components/About/About"; // Placeholder voor de Over-mij pagina
import Contact from "./components/Contact/Contact"; // Placeholder voor de Contact-pagina

const App = () => {
    const [activePage, setActivePage] = useState("home");

    const renderPage = () => {
        switch (activePage) {
            case "home":
                return <h1>Welcome to My Portfolio</h1>;
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
        <div>
            <Navbar setActivePage={setActivePage} />
            <div style={{ padding: "20px" }}>{renderPage()}</div>
        </div>
    );
};

export default App;
