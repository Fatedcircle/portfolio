/* eslint-disable react/prop-types */
import { useState } from 'react';

const ArchiveSidebar = ({ posts, onFilter }) => {
    const currentDate = new Date();
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    const [, setSelectedMonth] = useState(currentDate.getMonth() + 1);

    const years = [...new Set(posts.map(post => new Date(post.date).getFullYear()))];

    const handleYearChange = (event) => {
        const year = parseInt(event.target.value);
        setSelectedYear(year);
        setSelectedMonth(currentDate.getMonth() + 1); // Reset month selection when year changes
        onFilter(year, null); // Call the filter function with selected year
    };

    const handleMonthClick = (month) => {
        setSelectedMonth(month);
        onFilter(selectedYear, month); // Call the filter function with selected year and month
    };

    const handleAllPostsClick = () => {
        setSelectedYear(null);
        setSelectedMonth(null);
        onFilter(null, null); // Call the filter function to show all posts
    };

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="archive-sidebar" style={{ width: '20%' }}>
            <h3>Archive</h3>
            <button onClick={handleAllPostsClick}>All Posts</button> {/* Button for all posts */}
            <select onChange={handleYearChange} value={selectedYear}>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <div className="month-dropdown">
                {months.map((month, index) => (
                    <button key={index} onClick={() => handleMonthClick(index + 1)}>
                        {month}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArchiveSidebar;