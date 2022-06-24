import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState("");
    const [userHomeFeed, setUserHomeFeed] = React.useState("");
    const [status, setStatus] = React.useState("loading");
    const [meowAccepted, setMeowAccepted] = React.useState(true);

    const fetchingUserProfile = () => {
        fetch("/api/me/profile", { headers: { Accept: "application/json" } })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCurrentUser(data);
                setStatus("idle");
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    function fetchingUserHomeFeed() {
        fetch("/api/me/home-feed", { headers: { Accept: "application/json" } })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserHomeFeed(data);
            })
            .catch((error) => {
                setStatus("error");
            });
    }

    React.useEffect(() => {
        fetchingUserProfile();
    }, []);

    React.useEffect(() => {
        fetchingUserHomeFeed();
    }, []);

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                status,
                setStatus,
                userHomeFeed,
                setUserHomeFeed,
                meowAccepted,
                setMeowAccepted,
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    );
};
