import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import FilterBar from "./FilterBar";
import { projects } from "../../data/projectsData";
import './portfolio.scss';

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [sortOrder, setSortOrder] = useState("recent");

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("-");
        return new Date(`${year}-${month}-${day}`);
    };

    const sortProjects = (projects) => {
        return projects.sort((a, b) => {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
            return sortOrder === "recent" ? dateB - dateA : dateA - dateB;
        });
    };

    const filteredProjects = sortProjects(
        projects.filter((project) => {
            const matchesFilter = selectedFilter === "all" || project.filter === selectedFilter;
            const matchesTags =
                selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag));
            const matchesSearchQuery =
                searchQuery === "" ||
                project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesFilter && matchesTags && matchesSearchQuery;
        })
    );

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const projectName = hash.replace("#project-details-", "");
            const project = projects.find((p) => p.name === projectName);
            setSelectedProject(project);

            const projectElement = document.getElementById(`project-details-${projectName}`);
            if (projectElement) {
                projectElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <div style={{ display: "flex", gap: "20px"}} className="portfolio">
            <div style={{ flex: "1" }}>
                <h1>My Portfolio</h1>
                <FilterBar
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setSortOrder={setSortOrder}
                />
                <ProjectList
                    projects={filteredProjects}
                    onSelectProject={setSelectedProject}
                />
            </div>

            <div style={{ flex: "1", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
                <div id={`project-details-${selectedProject?.name}`}>
                    <ProjectDetails project={selectedProject} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
