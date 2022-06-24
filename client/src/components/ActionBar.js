import React from "react";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import styled from "styled-components";

const ActionBar = () => {
    const [numOfLikes, setNumOfLikes] = React.useState(null);

    function handleClick() {
        if (numOfLikes === null) {
            setNumOfLikes(1);
        } else {
            setNumOfLikes(null);
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && numOfLikes === null) {
            setNumOfLikes(1);
        } else {
            setNumOfLikes(null);
        }
    }

    return (
        <Container>
            <CommentIcon size={18} tabIndex={0} aria-label="comment" />
            <ReMeowIcon size={18} tabIndex={0} aria-label="re-meow" />
            <HeartIcon
                size={18}
                tabIndex={0}
                aria-label="comment"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            />
            <NumOfLikes>{numOfLikes}</NumOfLikes>
            <UploadIcon size={18} tabIndex={0} aria-label="upload" />
        </Container>
    );
};

export default ActionBar;

const Container = styled.div`
    margin: 5px 0px 15px 0px;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;
const CommentIcon = styled(FiMessageCircle)`
    padding: 8px;
    border-radius: 50%;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const ReMeowIcon = styled(FiRepeat)`
    padding: 8px;
    border-radius: 50%;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const HeartIcon = styled(FiHeart)`
    padding: 8px;
    border-radius: 50%;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const NumOfLikes = styled.span`
    position: absolute;
    left: 58%;
`;
const UploadIcon = styled(FiUpload)`
    padding: 8px;
    border-radius: 50%;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: transparent;
    z-index: 100;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const LikeButton = styled.button`
    border-radius: 50%;
`;
