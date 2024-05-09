// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import image from "../assets/images/images.jpeg";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name: "",
        emailid: "",
        Pwd: "",
        cpwd: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails({ ...details, [name]: value });
    };

    const login = (event) => {
        event.preventDefault(); 
        axios.post("http://localhost:8014/details", details)
            .then((res) => {
                console.log(res.data);
                
                onLogin();
                navigate("/Home"); 
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            <nav className="navbar">
                <NavLink to="/Home" className="nav-link">Home</NavLink>
                <NavLink to="/CreatePost" className="nav-link">Create Post</NavLink>
                <NavLink to="/Login" className="nav-link">Login</NavLink>
               
            </nav>
            <div className="fullscreen-image">
                <img src={image} alt="Background Image" />
            </div>
            <div className="container">
                <form onSubmit={login}>
                    <h1>SIGN UP</h1>
                    <br></br>

                    <h4>NAME</h4>
                    <input type="text" name="name" className="title" value={details.name} onChange={handleChange} required/>
                 
                    <h4>EMAIL ID</h4>
                    <input type="text" name="emailid" className="title" value={details.emailid} onChange={handleChange} required/>
                   
                    <h4>PASSWORD</h4>
                    <input type="password" name="Pwd" className="title" value={details.Pwd} onChange={handleChange} required/>
                  
                    <br></br>
                    <button type="submit">Login</button> 
                </form>
              
            </div>
        </>
    );
};

export default Login;
