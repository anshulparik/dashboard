import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Widget = ({ type }) => {
  let data;

  let amount = 2499;
  let diff = 25;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "crimson", background: "rgba(255, 0, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "orders",
        isMoney: false,
        link: "view all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{ color: "goldenrod", background: "rgba(218, 165, 32, 0.2)" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "earnings",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{ color: "green", background: "rgba(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "see details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ color: "purple", background: "rgba(128, 0, 128, 0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && `$`}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
