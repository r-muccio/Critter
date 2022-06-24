import styled from "styled-components";
import moment from "moment";
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiArrowLeft } from "react-icons/fi";
import ActionBar from "./ActionBar";
import LoadingPage from "./LoadingPage";

const TweetDetails = () => {
    const param = useParams();

    const [tweetData, setTweetData] = useState("");

    const {
        currentUser: currentUser,
        status: status,
        setStatus: setStatus,
    } = React.useContext(CurrentUserContext);

    useEffect(() => {
        fetch(`/api/tweet/${param.tweetId}`, {
            headers: { Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTweetData(data);
            })
            .catch((error) => {
                setStatus("error");
            });
    }, []);

    if (!tweetData) {
        return <LoadingPage />;
    }
    if (tweetData) {
        return (
            <Container>
                <Header>
                    <FiArrowLeft style={styleForFiArrow} />
                    Meow
                </Header>
                <AboutAuthor>
                    <Avatar src={tweetData.tweet.author.avatarSrc} />
                    <HandleStuff>
                        <ClickableDisplayName
                            aria-label="link to meower profile"
                            tabIndex={0}
                            to={`/profile/${tweetData.tweet.author.handle}`}
                        >
                            {tweetData.tweet.author.displayName}
                        </ClickableDisplayName>
                        <div>
                            <div>@ {tweetData.tweet.author.handle}</div>
                        </div>
                    </HandleStuff>
                </AboutAuthor>
                <Status>{tweetData.tweet.status}</Status>
                {tweetData.tweet.media.length > 0 &&
                    tweetData.tweet.media[0].type === "img" && (
                        <Media src={".." + tweetData.tweet.media[0].url} />
                    )}
                <TimeStamp>
                    {moment(tweetData.tweet.timestamp).format(
                        "h:mm A - MMM Do, YYYY"
                    )}{" "}
                    - Critter Web App{" "}
                </TimeStamp>
                <ActionBar />
            </Container>
        );
    }
};

export default TweetDetails;

const Container = styled.div`
    margin-bottom: 1%;
    margin-right: 20px;
    box-sizing: border-box;
    height: 100vh;
`;
const Header = styled.div`
    font-weight: bold;
    font-size: 2em;
    margin: 20px;
    display: flex;
    align-items: center;
`;
const AboutAuthor = styled.div`
    display: flex;
    flex-direction: row;
`;
const HandleStuff = styled.div`
    margin-left: 30px;
`;
const Avatar = styled.img`
    width: 5%;
    border-radius: 50%;
`;
const ClickableDisplayName = styled(NavLink)`
    font-size: 1.3em;
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-radius: 4px;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const Status = styled.div`
    padding: 20px 0px;
    font-size: 1.5em;
`;
const Media = styled.img`
    width: 100%;
    border-radius: 25px;
`;
const TimeStamp = styled.div``;

let styleForFiArrow = {
    margin: "20px",
};
