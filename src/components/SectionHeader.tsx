import styled from 'styled-components';

const Header = styled.h2`
    font-size: 2em;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
`;

interface Props {
    text: string
}

const SectionHeader = ({ text }: Props) => {
    return <Header id={text}>{ text }</Header>
}

export default SectionHeader;