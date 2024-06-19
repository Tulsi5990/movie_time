import React, {useState,useEffect} from 'react';
import "./Nav.css";


function Nav() {
    const [show,handleShow]=useState(false);
  


    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo"
      src="/movie-time-high-resolution-logo-transparent.png"
      alt="movie time logo"
      />
    <img className="nav_avatar"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
    alt="movie time logo"
    />
      
    </div>
  )
}

export default Nav
