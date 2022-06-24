import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as CatIconImg } from "../assets/logo.svg";
import { COLORS } from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
    const { currentUser, status, setStatus } = useContext(CurrentUserContext);

    return (
        <SideMenu>
            <CatIconImage />
            <NavDiv>
                <FiHome />
                <NaviGatorLink tabIndex={0} aria-label="Home" to="/">
                    Home
                </NaviGatorLink>
            </NavDiv>
            <NavDiv>
                <FiUser />
                <NaviGatorLink
                    tabIndex={0}
                    aria-label="Your profile"
                    to={`/profile/treasurymog`}
                >
                    Profile
                </NaviGatorLink>
            </NavDiv>
            <NavDiv>
                <FiBell />
                <NaviGatorLink
                    tabIndex={0}
                    aria-label="Notifications"
                    to="/notifications"
                >
                    Notifications
                </NaviGatorLink>
            </NavDiv>
            <NavDiv>
                <FiBookmark />
                <NaviGatorLink
                    tabIndex={0}
                    aria-label="Bookmarks"
                    to="/bookmarks"
                >
                    Bookmarks
                </NaviGatorLink>
            </NavDiv>
            <MeowiGatorDiv>Meow</MeowiGatorDiv>
        </SideMenu>
    );
};

const SideMenu = styled.div`
    position: absolute;
    height: 100%;
    width: 15%;
    margin-left: 5%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`;

const NaviGatorLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin-left: 5px;
    &.active {
        color: ${COLORS.primary};
    }
    margin-left: 8px;
    border-radius: 4px;
    padding: 0px 5px 0px 5px;
    :focus {
        outline: 3px solid lightblue;
    }
`;
const MeowiGatorDiv = styled.div`
    background-color: ${COLORS.primary};
    color: white;
    text-align: center;
    width: 100%;
    border-radius: 20px;
    padding: 5px;
    box-sizing: border-box;
`;
const NavDiv = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    height: 40px;
    font-size: 20px;
    margin: 5px 0 5px 0;
    border-radius: 30px;
    padding-left: 10px;
    &:hover {
        color: hsl(${COLORS.primary}, 100%, 50%);
        background-color: #c9b2ff;
    }
    :focus {
        outline: 3px solid lightblue;
    }
`;
const CatIconImage = styled(CatIconImg)`
    max-height: 60px;
`;

export default Sidebar;
