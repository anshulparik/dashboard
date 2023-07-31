import React from "react";
import "./Featured.scss";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          error est quaerat molestias ad? Veritatis ducimus sequi possimus
          assumenda facilis?
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">target</div>
            <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmt">$14.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last week</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmt">$9.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmt">$3.7k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
