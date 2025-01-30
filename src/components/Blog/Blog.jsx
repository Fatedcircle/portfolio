import { useState, useEffect } from "react";
import blogPostsData from "../../data/blogPosts.json";
import './Blog.scss'

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(blogPostsData);
    }, []);

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
