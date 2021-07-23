import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const PostWrapper = styled.div`
    background-color: lightblue;
    margin: 50px;
`;

interface MarkdownFileType {
    default: string
}

interface PostDataType {
    id: number
    text: string
}

interface Props {
    markdownFiles: MarkdownFileType[]
}

const Blog = ({markdownFiles}: Props) => {
    const [posts, setPosts] = useState<PostDataType[]>();
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
            setPosts(postData);
            setIsLoading(false);
        }
        if (!posts && markdownFiles.length > 0) getPosts();
    }, [posts, markdownFiles]);

    return (
        <>
            <SectionHeader
                text='blog'
            />
            {isLoading && <span>...</span>}
            {posts && posts.map(post => {
                return (
                    <PostWrapper key={post.id}>
                        <ReactMarkdown children={post.text} />
                    </PostWrapper>
                )
            })}
        </>
    )
};

export default Blog;
