import styled from "styled-components";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
import ActionBar from "./ActionBar";
import { FiRepeat } from "react-icons/fi";

const LittleMeow = ({ values }) => {
    const date = moment(values.timestamp).format("MMM Do, YYYY");

    const navigate = useNavigate();

    return (
        <Container
            tabIndex={0}
            aria-label="Tweet tile"
            onKeyDown={(e) => {
                if (
                    e.key === "Enter" &&
                    e.target.nodeName !== "A" &&
                    e.target.nodeName !== "svg"
                ) {
                    navigate(`/tweet/${values.id}`);
                }
            }}
            onClick={(e) => {
                if (e.target.nodeName !== "A" && e.target.nodeName !== "svg") {
                    navigate(`/tweet/${values.id}`);
                }
            }}
        >
            {values.retweetFrom && (
                <WhoReMeowed>
                    <ReMeowIcon />
                    {values.retweetFrom.displayName + " "} ReMeowed
                </WhoReMeowed>
            )}
            <AboutAuthor>
                <Avatar src={values.author.avatarSrc} />
                <div>
                    <ClickableDisplayName
                    value={values.author.handle}
                        tabIndex={0}
                        aria-label="link to meower profile"
                        to={`/profile/${values.author.handle}`}
                    >
                        {values.author.displayName}
                    </ClickableDisplayName>
                    <span>
                        @ {values.author.handle} - {date}
                    </span>
                    <Status>{values.status}</Status>
                </div>
            </AboutAuthor>
            {values.media.length > 0 && values.media[0].type === "img" && (
                <Media src={".." + values.media[0].url} />
            )}
            <ActionBar />
        </Container>
    );
};

export default LittleMeow;

const ReMeowIcon = styled(FiRepeat)`
    margin: 0px 10px;
`;
const WhoReMeowed = styled.div`
    margin: 10px;
`;
const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 4px;
    :focus {
        outline: 2px solid lightblue;
    }
`;
const AboutAuthor = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;
const Avatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    margin-right: 20px;
`;
const ClickableDisplayName = styled(NavLink)`
    font-size: 1.3em;
    margin-right: 10px;
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-radius: 4px;
    :focus {
        outline: 2px solid lightblue;
    }
`;
const Status = styled.div`
    margin-top: 20px;
    font-size: 1.2em;
`;
const Media = styled.img`
    width: 80%;
    border-radius: 15px;
`;
const TimeAndHandle = styled.span`
    font-size: 1.1em;
`;
