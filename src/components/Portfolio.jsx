import { useState } from "react";

// Voorbeeldprojecten met filters en tags
const projects = [
    {
        name: "React Weather App",
        filter: "react",
        tags: ["React", "JavaScript", "API", "UI/UX"],
        description: "A weather app built with React, fetching weather data from an external API.",
        details: "This weather app integrates with the OpenWeatherMap API, showcasing a clean UI with hourly weather forecasts. Features include location-based weather, toggling between Celsius and Fahrenheit, and a responsive design.",
        images: ["weather-app-screenshot1.png", "weather-app-screenshot2.png"],
        videos: ["https://example.com/weather-app-demo.mp4"],
        link: "https://github.com/yourusername/react-weather-app"
    },
    {
        name: "Angular E-Commerce Site",
        filter: "angular",
        tags: ["Angular", "UI/UX", "E-commerce", "JavaScript"],
        description: "An e-commerce site built with Angular, integrating product listings and shopping cart functionality.",
        details: "The site includes features like a product search, filters by category, a shopping cart, and a secure checkout process. It is fully responsive and optimized for SEO.",
        images: ["ecommerce-site-screenshot1.png", "ecommerce-site-screenshot2.png"],
        videos: [],
        link: "https://github.com/yourusername/angular-ecommerce"
    },
    {
        name: "Full-Stack Social Network",
        filter: "full-stack",
        tags: ["React", "Node.js", "MongoDB", "Full-Stack", "JavaScript"],
        description: "A full-stack social network app built with React (front-end) and Node.js (back-end).",
        link: "https://github.com/yourusername/full-stack-social-network"
    },
    {
        name: "UI Design for E-Commerce",
        filter: "ui-ux",
        tags: ["Design", "UI/UX", "E-commerce"],
        description: "A clean, modern e-commerce UI design with a focus on mobile responsiveness.",
        link: "https://dribbble.com/yourusername/ui-design-ecommerce"
    },
];

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null); // Huidige geselecteerde project

    // Filteren van projecten op basis van filter, tags en zoekopdracht
    const filteredProjects = projects.filter((project) => {
        const matchesFilter = selectedFilter === "all" || project.filter === selectedFilter;
        const matchesTags =
            selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag));
        const matchesSearchQuery =
            searchQuery === "" ||
            project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesFilter && matchesTags && matchesSearchQuery;
    });

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {/* Linkerkant: Projectlijst */}
            <div style={{ flex: "1" }}>
                <h1>My Portfolio</h1>

                {/* Zoekbalk */}
                <div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Dropdown voor filters */}
                <div>
                    <select
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="full-stack">Full-Stack</option>
                        <option value="ui-ux">UI/UX</option>
                    </select>
                </div>

                {/* Tagcloud */}
                <div>
                    <h3>Tags</h3>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {["React", "JavaScript", "Node.js", "MongoDB", "Angular", "UI/UX", "API", "Design"].map(
                            (tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTags((prevTags) =>
                                        prevTags.includes(tag)
                                            ? prevTags.filter((t) => t !== tag)
                                            : [...prevTags, tag]
                                    )}
                                    style={{
                                        margin: "5px",
                                        padding: "5px 10px",
                                        backgroundColor: selectedTags.includes(tag) ? "#3b82f6" : "#e0e0e0",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        color: selectedTags.includes(tag) ? "#fff" : "#333",
                                    }}
                                >
                                    {tag}
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Gefilterde projecten weergeven */}
                <div>
                    {filteredProjects.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        filteredProjects.map((project) => (
                            <div
                                key={project.name}
                                className="project"
                                style={{
                                    margin: "20px 0",
                                    cursor: "pointer",
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    borderRadius: "5px",
                                }}
                                onClick={() => setSelectedProject(project)} // Selecteer project bij klik
                            >
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p>
                                    <strong>Tags:</strong> {project.tags.join(", ")}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Rechterkant: Gedetailleerde weergave */}
            <div style={{ flex: "1", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
                {selectedProject ? (
                    <div>
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.details}</p>
                        <h3>Images:</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            {selectedProject.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={selectedProject.name}
                                    style={{ width: "100px", height: "auto", borderRadius: "5px" }}
                                />
                            ))}
                        </div>
                        <h3>Videos:</h3>
                        {selectedProject.videos.map((video, index) => (
                            <video key={index} controls style={{ width: "100%", marginTop: "10px" }}>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ))}
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            View Project on GitHub
                        </a>
                    </div>
                ) : (
                    <p>Select a project to see more details.</p>
                )}
            </div>
        </div>
    );
};

export default Portfolio;