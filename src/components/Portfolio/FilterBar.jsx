/* eslint-disable react/prop-types */
const FilterBar = ({
    selectedFilter,
    setSelectedFilter,
    selectedTags,
    setSelectedTags,
    searchQuery,
    setSearchQuery,
    setSortOrder,
}) => {
    const allTags = ["React", "JavaScript", "Node.js", "MongoDB", "Angular", "UI/UX", "API", "Design"];

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

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

            <div>
                <label>Sort by: </label>
                <select
                    onChange={(e) => setSortOrder(e.target.value)} // Sorteren
                    value={selectedFilter.sortOrder}
                >
                    <option value="recent">Recent First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
