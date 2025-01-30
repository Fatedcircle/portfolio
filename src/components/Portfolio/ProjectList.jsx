/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"; // Import Link

const ProjectList = ({ projects }) => {
    return (
        <div className="project-cards">
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div
                        key={project.name}
                        className="project-card"
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link
                            to={`/projects/${project.name}`} // Update to use Link
                            style={{
                                color: "#3b82f6",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            More Details
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectList;