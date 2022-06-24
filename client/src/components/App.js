import React, { useContext } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import { CurrentUserContext } from "./CurrentUserContext";
import ErrorPage from "./ErrorPage";

function App() {
    const { currentUser: currentUser, status: status } =
        useContext(CurrentUserContext);

    return (
        <Router>
            <Sidebar />
            <Main>
                {status === "error" && <ErrorPage />}
                {status === "idle" && (
                    <Routes>
                        <Route path="/" element={<HomeFeed />} />
                        <Route
                            path="/notifications"
                            element={<Notifications />}
                        />
                        <Route path="/bookmarks" element={<Bookmarks />} />
                        <Route
                            path="/tweet/:tweetId"
                            element={<TweetDetails />}
                        />
                        <Route
                            path="/profile/:targetHandle"
                            element={<Profile />}
                        />
                    </Routes>
                )}
            </Main>
        </Router>
    );
}

const Main = styled.div`
    margin-left: 22%;
    width: 70%;
    height: 100vh;
    z-index: 10;
    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;
    padding-left: 15px;
`;

export default App;
