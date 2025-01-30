/* eslint-disable react/prop-types */
const ProjectDetails = ({ project }) => {
    if (!project) {
        return <p>Select a project to see more details.</p>;
    }

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.details}</p>
            <h3>Images:</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={project.name}
                        style={{ width: "100px", height: "auto", borderRadius: "5px" }}
                    />
                ))}
            </div>
            <h3>Videos:</h3>
            {project.videos.map((video, index) => (
                <video key={index} controls style={{ width: "100%", marginTop: "10px" }}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project on GitHub
            </a>
        </div>
    );
};

export default ProjectDetails;
