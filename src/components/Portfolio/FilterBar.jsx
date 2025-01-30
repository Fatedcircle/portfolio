/* eslint-disable react/prop-types */
const FilterBar = ({ selectedFilter, setSelectedFilter, selectedTags, setSelectedTags, searchQuery, setSearchQuery }) => {
    const allTags = ["React", "JavaScript", "Node.js", "MongoDB", "Angular", "UI/UX", "API", "Design"];

    return (
        <div>
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
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() =>
                                setSelectedTags((prevTags) =>
                                    prevTags.includes(tag)
                                        ? prevTags.filter((t) => t !== tag)
                                        : [...prevTags, tag]
                                )
                            }
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
