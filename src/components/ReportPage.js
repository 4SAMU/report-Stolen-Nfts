/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const ReportPage = () => {
  return (
    <div className="Page">
      <Navbar />
      <h3 className="reportform_header">Your Nft Details</h3>
      <div className="form_container">
        <div className="form_input">
          <label className="name">Nft Token id</label>
          <input
            type={"number"}
            placeholder="nft token id"
            className="input"
          ></input>
        </div>
        <div className="form_input">
          <label className="name">Nft Name</label>
          <input type={"text"} placeholder="nft name" className="input"></input>
        </div>
        <div className="form_input">
          <label className="name">Nft Token address</label>
          <input
            type={"text"}
            placeholder="nft token address"
            className="input"
          ></input>
        </div>
        <div className="form_input">
          <label className="name">Chain Id</label>
          <input type={"text"} placeholder="chain Id" className="input"></input>
        </div>
        <div className="form_input">
          <NavLink to={"/viewitems"}>
            {" "}
            <button className="submitBtn">Submit</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
