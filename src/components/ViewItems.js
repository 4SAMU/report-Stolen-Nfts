/** @format */

import React from "react";
import Navbar from "./Navbar";
// BsTwitter;
import { BsTwitter } from "react-icons/bs";

const ViewItems = () => {
  return (
    <div className="Page">
      <Navbar />
      <div className="nftcard">
        <div className="N_F_T"></div>
        <label className="nftcard_name">my nft</label>
        <label className="nftcard_price">0.01 eth</label>
        <label className="nftcard_owner">owner</label>
        <label className="nftcard_id">token id 5</label>
      </div>
      <button className="postBtn">
        Post <BsTwitter />
      </button>
    </div>
  );
};

export default ViewItems;
