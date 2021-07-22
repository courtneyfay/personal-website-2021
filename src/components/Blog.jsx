import React from 'react';
import SectionHeader from './SectionHeader';
import posts from '../posts.json';

const Blog = () => {
    return (
        <>
            <SectionHeader
                text='blog'
            />
            {posts && posts.map(post => {
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
            }
        </>
    )
};

export default Blog;
