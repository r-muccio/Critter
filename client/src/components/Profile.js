import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import LittleMeow from "./LittleMeow";
import { CurrentUserContext } from "./CurrentUserContext";
import LoadingPage from "./LoadingPage";
import { COLORS } from "../constants";
import moment from "moment";

const Profile = () => {
    const {
        currentUser: currentUser,
        status: status,
        setStatus: setStatus,
    } = useContext(CurrentUserContext);

    const { targetHandle } = useParams();
    const [targetUser, setTargetUser] = React.useState("");
    const [targetUserMeows, setTargetUserMeows] = React.useState("");

    const fetchingUserProfile = () => {
        fetch(`/api/${targetHandle}/profile`, {
            headers: { Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTargetUser(data);
                console.log("profile data:  ", data);
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    const fetchingUserMeows = () => {
        fetch(`/api/${targetHandle}/feed`, {
            headers: { Accept: "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTargetUserMeows(data);
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    React.useEffect(() => {
        fetchingUserProfile();
    }, [targetHandle]);

    React.useEffect(() => {
        fetchingUserMeows();
    }, [targetHandle]);

    if (!targetUser) {
        return <LoadingPage />;
    }
    if (targetUser) {
        return (
            <div>
                <UBanner src={targetUser.profile.bannerSrc} />
                <UAvatar src={targetUser.profile.avatarSrc} />
                {targetUser.profile.isBeingFollowedByYou && (
                    <Following>Following</Following>
                )}
                <UNameDiv>{targetUser.profile.displayName}</UNameDiv>
                <div>
                    <HandleSpan>@{targetUser.profile.handle}</HandleSpan>
                    {targetUser.profile.handle !== "treasurymog" &&
                        targetUser.profile.isFollowingYou && (
                            <span style={grayBackground}>Follows You</span>
                        )}
                </div>
                <LocationAndJoinedDiv>
                    {targetUser.profile.location && (
                        <Spanny>
                            <FiMapPin />
                            {targetUser.profile.location}
                        </Spanny>
                    )}
                    {"   "}
                    <span>
                        <FiCalendar /> Joined{" "}
                        {moment(targetUser.profile.joined).format("MMMM YYYY")}
                    </span>
                </LocationAndJoinedDiv>
                <FollowingDiv>
                    <span>
                        <strong>{targetUser.profile.numFollowing}</strong>{" "}
                        Following
                    </span>{" "}
                    <span>
                        <strong>{targetUser.profile.numFollowers}</strong>{" "}
                        Followers
                    </span>
                </FollowingDiv>
                <ViewSelectDiv>
                    <Activespan>Tweets</Activespan>
                    <Inactivespan>Media</Inactivespan>
                    <Inactivespan>Likes</Inactivespan>
                </ViewSelectDiv>
                {targetUserMeows && (
                    <div>
                        <div>
                            {targetUserMeows.tweetIds.map((el) => {
                                return (
                                    <LittleMeow
                                        key={Math.floor(Math.random() * 100000)}
                                        values={targetUserMeows.tweetsById[el]}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default Profile;

const UBanner = styled.img`
    width: 100%;
    max-height: 40vh;
`;
const Following = styled.div`
    display: block;
    position: absolute;
    background-color: ${COLORS.primary};
    font-weight: bold;
    color: white;
    text-align: center;
    width: 150px;
    height: 30px;
    border-radius: 20px;
    padding: 5px;
    box-sizing: border-box;
    right: 10%;
`;
const UAvatar = styled.img`
    border-radius: 50%;
    max-width: 15%;
    margin-top: -10%;
    border: 3px solid white;
`;
const UNameDiv = styled.div`
    font-weight: bold;
    margin: 10px 10px 3px 10px;
`;
const HandleSpan = styled.span`
    margin: 0px 10px 10px 10px;
`;
const LocationAndJoinedDiv = styled.div`
    margin: 10px;
`;
const Spanny = styled.span`
    margin-right: 10px;
`;
const FollowingDiv = styled.div`
    margin-left: 10px;
`;
const ViewSelectDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Activespan = styled.span`
    color: ${COLORS.primary};
    border-bottom: 2px solid ${COLORS.primary};
    flex-grow: 1;
    text-align: center;
    padding: 30px 0px 20px 0px;
    font-weight: bold;
`;
const Inactivespan = styled.span`
    flex-grow: 1;
    text-align: center;
    padding: 30px 0px 20px 0px;
    font-weight: bold;
    color: gray;
`;
const grayBackground = {
    backgroundColor: "gray",
    borderRadius: "4px",
    padding: "2px",
    marginLeft: "5px",
};
