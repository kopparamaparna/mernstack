import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Login from "./Login";

const Master = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showIncompleteLoginAlert, setShowIncompleteLoginAlert] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultComponent />} />
                {isLoggedIn ? (
                    <>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/CreatePost" element={<CreatePost />} />
                    </>
                ) : (
                    <Route
                        path="/Home"
                        element={
                            showIncompleteLoginAlert ? (
                                <Alert message="Please login to access this page" />
                            ) : (
                                <Navigate to="/Login" />
                            )
                        }
                    />
                )}
                <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            </Routes>
        </BrowserRouter>
    );
};

const Alert = ({ message }) => (
    <div>
        <h2>{message}</h2>
    </div>
);

export default Master;
