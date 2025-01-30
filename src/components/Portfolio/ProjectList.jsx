/* eslint-disable react/prop-types */
const ProjectList = ({ projects, onSelectProject }) => {
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
                            cursor: "pointer",
                            border: "1px solid #ddd",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                        onClick={() => onSelectProject(project)}
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
    );
};

export default ProjectList;
