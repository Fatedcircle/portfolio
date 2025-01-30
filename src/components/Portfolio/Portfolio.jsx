import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import FilterBar from "./FilterBar";
import { projects } from "../../data/projectsData"; // Gescheiden projectdata

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);

    // Filter logica
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
            {/* Linkerkant: Filters en projectlijst */}
            <div style={{ flex: "1" }}>
                <h1>My Portfolio</h1>
                <FilterBar
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <ProjectList
                    projects={filteredProjects}
                    onSelectProject={setSelectedProject}
                />
            </div>

            {/* Rechterkant: Gedetailleerde projectinformatie */}
            <div style={{ flex: "1", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
                <ProjectDetails project={selectedProject} />
            </div>
        </div>
    );
};

export default Portfolio;
