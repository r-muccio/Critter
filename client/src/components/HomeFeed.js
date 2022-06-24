import { useState, useEffect, useContext } from "react";
import LittleMeow from "./LittleMeow";
import { CurrentUserContext } from "./CurrentUserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";
import { COLORS } from "../constants";

const HomeFeed = () => {
    const [homeFeedData, setHomeFeedData] = useState("hello");
    const [willShow, setWillShow] = useState(false);
    const [inputText, setInputText] = useState("");
    const [triggerUseEffect, setTriggerUseEffect] = useState(false);
    const [charactersRemaining, setCharactersRemaining] = useState(0);

    const {
        currentUser: currentUser,
        status: status,
        setStatus: setStatus,
        userHomeFeed: userHomeFeed,
        setUserHomeFeed: setUserHomeFeed,
        meowAcepted: meowAccepted,
        setMeowAccepted: setMeowAccepted,
    } = useContext(CurrentUserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/me/home-feed", { headers: { Accept: "application/json" } })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHomeFeedData(data);
                setWillShow(true);
                console.log("data:   ", data);
            })
            .catch((error) => {
                setStatus("error");
            });
    }, [triggerUseEffect]);

    function submitForm(meowText) {
        meowText.preventDefault();
        sendInfo(inputText);
        setInputText("");
    }

    function handleUserInput(value) {
        setInputText(value);
        setCharactersRemaining(280 - value.length);
    }

    function sendInfo(status) {
        fetch("/api/tweet", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then((res) => {
                return res.json();
            })
            .then(() => {
                setTriggerUseEffect(!triggerUseEffect);
            })
            .catch((error) => {
                setStatus("error");
                setMeowAccepted(false);
            });
    }

    if (!willShow) {
        return <LoadingPage />;
    }
    if (willShow) {
        return (
            <>
                <Header>Home</Header>
                <TweetArea>
                    <Avatar src={currentUser.profile.avatarSrc} />
                    <Divver>
                        <MeowForm onSubmit={submitForm} id="meeeeooowww">
                            <MeowBox
                                form="meeeeooowww"
                                placeholder="What's happening?"
                                name="meowTime"
                                value={inputText}
                                onChange={(e) =>
                                    handleUserInput(e.target.value)
                                }
                            ></MeowBox>
                        </MeowForm>
                        <Divvinator>
                            <MeowButton
                                type="submit"
                                form="meeeeooowww"
                                disabled={inputText.length > 280 ? true : false}
                            >
                                Meow
                            </MeowButton>
                            {inputText.length < 225 && (
                                <NormalCharacterCountIndicator>
                                    {charactersRemaining}
                                </NormalCharacterCountIndicator>
                            )}
                            {inputText.length >= 225 &&
                                inputText.length <= 280 && (
                                    <YellowCharacterCountIndicator>
                                        {charactersRemaining}
                                    </YellowCharacterCountIndicator>
                                )}
                            {inputText.length > 280 && (
                                <RedCharacterCountIndicator>
                                    {charactersRemaining}
                                </RedCharacterCountIndicator>
                            )}
                        </Divvinator>
                    </Divver>
                </TweetArea>
                <Separator></Separator>
                <div>
                    {homeFeedData.tweetIds.map((el) => {
                        return (
                            <LittleMeow
                                key={Math.floor(Math.random() * 100000)}
                                values={homeFeedData.tweetsById[el]}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
};

export default HomeFeed;

const Header = styled.div`
    font-weight: bold;
    font-size: 2em;
    margin: 20px;
    display: flex;
    align-items: center;
`;
const TweetArea = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
`;
const Divver = styled.div`
    display: flex;
    flex-direction: column;
`;
const MeowForm = styled.form``;
const MeowBox = styled.textarea`
    font-family: sans-serif;
    font-size: 1.3em;
    width: 100%;
    height: 225px;
    width: 650px;
    border-radius: 4px;
    border: none;
`;
const Divvinator = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
const RedCharacterCountIndicator = styled.span`
    color: red;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 1.1em;
`;
const YellowCharacterCountIndicator = styled.span`
    color: yellow;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 1.1em;
`;
const NormalCharacterCountIndicator = styled.span`
    margin-top: 20px;
    margin-right: 20px;
    font-size: 1.1em;
`;
const MeowButton = styled.button`
    background-color: ${COLORS.primary};
    right: 5%;
    margin-top: 10px;
    color: white;
    text-align: center;
    font-size: 1.3em;
    height: 50px;
    width: 100px;
    border-radius: 20px;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: none;
    border: none;
    align-self: flex-end;
`;

const Avatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 20px;
`;
const Separator = styled.div`
    height: 10px;
    background-color: lightgray;
    opacity: 0.8;
    width: 101.1%;
    z-index: 1000;
    transform: translateX(-1.1%);
`;
