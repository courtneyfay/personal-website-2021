import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import fetchPosts from '../fetchPosts';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    console.log('posts', posts)
    
    useEffect(() => {
        const getEm = async () => {
          try {
            setLoading(true);
            const posts = fetchPosts();
            console.log('posts in use effect', posts);
            setPosts(posts);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        }
    
        if (!posts || posts.length === 0) {
            getEm();
        }
      }, [posts]);

    return (
        <>
            <SectionHeader
                text='blog'
            />
            {isLoading && <span>...</span>}
            {/* {posts && posts.map(post => {
                return (
                    <>
                        <div>{post.title}</div>
                        <div>{post.id}</div>
                        <div>{post.date}</div>
                        <div>{post.tags.toString()}</div>
                        <div>{post.content}</div>
                    </>
                )
            })
            } */}
        </>
    )
};

export default Blog;
