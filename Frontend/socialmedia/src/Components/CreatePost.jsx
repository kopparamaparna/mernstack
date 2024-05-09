import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import image from "../assets/images/images.jpeg"; 

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        "p_id": 0,
        "title": "",
        "caption": "",
        "content": "" 
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const save = () => {
        axios.post("http://localhost:8014/insert", post)
            .then((posRes) => {
                console.log(posRes);            
                navigate("/Home");
            })
            .catch((errRes) => {
                console.log(errRes);
            });
    }

    return (
        <>
            <nav className="navbar">
                <NavLink to="/Home" className="nav-link">Home</NavLink>
                <NavLink to="/CreatePost" className="nav-link">Create Post</NavLink>
                <NavLink to="/Login" className="nav-link">Login</NavLink>
            </nav>
            <div className="fullscreen-image">
                 <img src={image} alt="Background Image" /> \
            </div>
            <div className="container">
                <form>
                    <h1>CREATE A POST</h1>
                    <br></br>
                    <h4>Index No:</h4>
                    
                    <input type="number" name="p_id" className="title"value={post.p_id} onChange={handleChange}></input>
                    <br></br>

                    <h4>Title</h4>
                    <input type="text" name="title" className="title" value={post.title} onChange={handleChange} />
                    <br />
                    <h4>Caption</h4>
                    <input type="text" name="caption" className="title" value={post.caption} onChange={handleChange}/>
                    <br />
                    <h4>Content</h4>
                    <textarea type="text" name="content" className="title" value={post.content} onChange={handleChange} style={{ width: "100%" }} rows="5"/>
                    <br></br>
                    <NavLink to="/Home">
                        <br></br>
                        <button onClick={save}>POST</button>
                    </NavLink>
                </form>
            </div>
        </>
    );
};

export default CreatePost;
