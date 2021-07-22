import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

const Blog = () => {
    const [posts, setPosts] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            const postData = await Promise.all(markdownFiles.map(async (file, index) => {
                const text = await fetch(file.default).then(res => res.text());
                return {
                    id: index + 1,
                    text,
                };
            }));
            setPosts(postData)
            setIsLoading(false);
        }
        if (!posts) getPosts()
    }, [posts]);

    return (
        <>
            <SectionHeader
                text='blog'
            />
            {isLoading && <span>...</span>}
            {posts && posts.map(post => {
                return <ReactMarkdown key={post.id} children={post.text} />
            })}
        </>
    )
};

export default Blog;
