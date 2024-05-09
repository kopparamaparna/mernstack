import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import image from "../assets/images/images.jpeg"; 

const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8014/posts")
            .then((posRes) => {
                const { data } = posRes;
                setPosts(data);
            })
            .catch((errRes) => {
                console.log(errRes);
            });
    }, []);
    const delete_post = (p_id) => {
        axios.delete("http://localhost:8014/delete", { data: { "p_id": p_id } })
            .then((posRes) => {
                console.log(posRes);
                
                axios.get("http://localhost:8014/posts")
                    .then((posRes) => {
                        const { data } = posRes;
                        setPosts(data);
                    })
                    .catch((errRes) => {
                        console.log(errRes);
                    });
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
                <img src={image} alt="Background Image" />
            </div>
            <div className="container1">
                <div className="post-list1">
                    {posts.map((post) => (
                     <div key={post.p_id} className="post1">
                            <p className="p1">{post.p_id}</p>
                            <h2>{post.title}</h2>
                            <p>{post.caption}</p>
                            <p>{post.content}</p>
                            <i className="fa fa-trash delete-icon" onClick={() => delete_post(post.p_id)}></i>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
