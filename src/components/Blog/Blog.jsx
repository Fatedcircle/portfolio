import { useState, useEffect } from "react";
import blogPostsData from "../../data/blogPosts.json"; // Import je JSON bestand
import './Blog.scss'

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(blogPostsData); // Zet de blogposts in de state
    }, []); // Lege afhankelijkheden array zorgt ervoor dat het maar één keer geladen wordt

    return (
        <div>
            <h1>Mijn Blog</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <p><em>{post.date}</em></p>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
