import React from "react";
import "./Single.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="heading">
              <h1 className="title">information</h1>
              <div className="edit-button">edit</div>
            </div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="item-key">e-mail:</span>
                  <span className="item-value mail">jane-doe@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">phone:</span>
                  <span className="item-value phone">+1 125 0234 589</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">address:</span>
                  <span className="item-value">
                    Elton St. 234 Garden Yard, New York
                  </span>
                </div>
                <div className="detail-item">
                  <span className="item-key">country:</span>
                  <span className="item-value country">usa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"user spending (last 6 months)"} />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <h1 className="title">information</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
