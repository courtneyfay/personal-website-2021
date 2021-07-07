import styled from 'styled-components';

const Header = styled.h2`
    font-size: 2em;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
`;

const SectionHeader = (props) => {
    return <Header id={props.text}>{ props.text }</Header>
}

export default SectionHeader;