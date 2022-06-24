import { FaBomb } from "react-icons/fa";
import styled from "styled-components";

const ErrorPage = () => {
    return (
        <Container>
            <FaBomb size={65} />
            <ErrorMsg>An unknown error has occured.</ErrorMsg>
            <TweetError>
                <strong>
                    If you were trying to upload a tweet, the attempt was
                    unsuccessful. Please try again!
                </strong>
            </TweetError>
            <TryRefreshing>
                Try refreshing the page, or <a href="/">contact support</a> if
                the problem persists. Please note that we always experience
                "longer than average" call volumes. Hopefully you like being on
                hold...
            </TryRefreshing>
        </Container>
    );
};

export default ErrorPage;

const Container = styled.div`
    max-width: 30%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 25%;
    left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
`;
const ErrorMsg = styled.div`
    font-weight: bold;
    font-size: 1.5em;
    margin: 75px 0px 15px 0px;
`;
const TryRefreshing = styled.div`
    margin: 15px 0px;
    text-align: center;
`;
const TweetError = styled.div`
    text-align: center;
`;
