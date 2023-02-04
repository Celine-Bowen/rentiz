import * as React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import fa6SolidangleDown1 from "../../assets/fa6SolidangleDown1.svg";
import rectangle5 from "../../assets/rectangle5.svg";
import rectangle2 from "../../assets/rectangle2.svg";
import rectangle12 from "../../assets/rectangle12.svg";
import fa6SolidangleDown2 from "../../assets/fa6SolidangleDown2.svg";
import pexels from "../../assets/pexelsBinyaminMell.png";
import fa6SolidangleDown from "../../assets/fa6SolidangleDown.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
      <div className="logo">
        <h2>Rentiz</h2>
      </div>
      <div className="menuBars">
        <div className="menu">
          <div className="navlink">
            <span>Home</span>
            <span>about us</span>
            <span>Buying</span>
            <span>Renting</span>
            <span>Selling</span>
          </div>
          <div className="signup">
            <span>Sign Up</span>
            <span>Login</span>
          </div>
        </div>
      </div>
      </div>

      <div className="content">
       <div className="title">
        <div className="des">
          <span className="bigTitle">Perfect Way to Buy a Home and Sell a Home</span>
          <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus sequi quasi enim laboriosam commodi dolorem consectetur ducimus,<br/>
          explicabo ex accusamus eligendi? Laudantium quia beatae,
          soluta ad qui doloribus consequatur deleniti?</span>
          </div>
          <img src={pexels} alt="image" />
        </div>

       
      </div>

    </div>
    
  );
};
export default Header;
