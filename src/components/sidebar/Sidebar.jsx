import React from "react";
import "./Sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import WebStoriesIcon from "@mui/icons-material/WebStories";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <AnalyticsIcon className="logo-icon" />
        <span className="logo-text">My Dashboard</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>dashboard</span>
          </li>
          <p className="title">lists</p>
          <li>
            <PersonIcon className="icon" />
            <span>users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <LeaderboardIcon className="icon" />
            <span>stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>notifications</span>
          </li>
          <p className="title">service</p>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>system health</span>
          </li>
          <li>
            <WebStoriesIcon className="icon" />
            <span>logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="title">user</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
