import { useState, useEffect } from "react";
import blogPostsData from "../../data/blogPosts.json";
import './Blog.scss';
import ArchiveSidebar from "./ArchiveSidebar";

const Blog = () => {
    const [posts, setPosts] = useState(blogPostsData); // Initialize with all posts
    const [filteredPosts, setFilteredPosts] = useState(blogPostsData); // Initialize with all posts

    useEffect(() => {
        setPosts(blogPostsData);
    }, []);

    const handleFilter = (year, month) => {
        const filtered = posts.filter(post => {
            const postDate = new Date(post.date);
            const postYear = postDate.getFullYear();
            const postMonth = postDate.getMonth() + 1; // Months are 0-indexed
            return (year ? postYear === year : true) && (month ? postMonth === month : true);
        });
        setFilteredPosts(filtered);
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            
            <div style={{ flex: '1' }}>
                <h1>Mijn Blog</h1>
                {filteredPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <p><em>{post.date}</em></p>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            <ArchiveSidebar posts={posts} onFilter={handleFilter} />
        </div>
    );
};

export default Blog;