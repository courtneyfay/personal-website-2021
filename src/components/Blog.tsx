import SectionHeader from './SectionHeader';
// import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import markdownFiles from '../posts/index';

const PostWrapper = styled.div`
    background-color: hotpink;
    margin: 0px 250px;
`;

const Blog = () => {
    const posts = markdownFiles.map((file, index) => {
        const { title, date, markdown } = file;
        return {
            id: index + 1,
            title,
            date,
            markdown,
        };
    });

    return (
        <>
            <SectionHeader
                text='blog'
            />
            {posts && posts.map(post => {
                return (
                    <PostWrapper key={post.id}>
                        <h2>{post.title}</h2>
                        <span>{post.date}</span>
                        {/* <ReactMarkdown children={post.markdown} /> */}
                    </PostWrapper>
                )
            })}
        </>
    )
};

export default Blog;
