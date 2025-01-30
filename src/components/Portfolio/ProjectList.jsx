/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div
                        key={project.name}
                        className="project"
                        style={{
                            margin: "20px 0",
                            border: "1px solid #ddd",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>
                            <strong>Tags:</strong> {project.tags.join(", ")}
                        </p>
                        <Link
                            to={`/projects/${project.name}`}
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