/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import MyImage from "../assets/fromLearnWeb3.svg";
import image1 from "../assets/ape.png";

const LandingPage = () => {
  return (
    <div className="Page">
      <Navbar />
      <div className="landingpage_text">
        The advent of missing or “disappearing” NFTs has
        <br /> become quite an issue!! maybe you are a victim of your <br />
        nfts disappearing 😓 ? <br />
        now worry no more 🥳 🥳 🥳 we got you covered
      </div>
      <img src={MyImage} alt="" className="image"></img>
      <img src={image1} alt="" className="image1"></img>

      <NavLink to={"/report"}>
        {" "}
        <button className="reportBtn">Report Now</button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
