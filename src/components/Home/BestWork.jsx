import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";

const BestWork = () => {
    const topProjects = [...projects]
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);

    return (
        <section>
            <h2>My Best Work</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
                {topProjects.map((project) => (
                    <div
                        key={project.name}
                        style={{
                            border: "1px solid #ddd",
                            padding: "15px",
                            borderRadius: "8px",
                            backgroundColor: "#8c8c8c",
                        }}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>

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
                ))}
            </div>
        </section>
    );
};

export default BestWork;