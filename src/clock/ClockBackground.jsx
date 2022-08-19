import styled from 'styled-components';

const ClockBackground = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: rgba(255,255,255,0.1);
    border-radius: 2rem;
    padding: 20px;
    margin: 2rem;
    gap: 5px
`;

ClockBackground.defaultProps = {
    size: "400px"
}

export default ClockBackground;