import { ImSpinner3 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

const LoadingPage = () => {
    return (
        <Container>
            <SpinnySpin size={50} />
        </Container>
    );
};

export default LoadingPage;

const Container = styled.div`
    max-width: 30%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
`;
const SpinIt = keyframes`
0% {transform: rotate(0deg)}
100% {transform: rotate(100deg)}
`;
const SpinnySpin = styled(ImSpinner3)`
    animation-name: ${SpinIt};
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-duration: infinite;
`;
