import React from "react";
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { MenuPlayList } from "./MenuPlayList";
import { MenuList } from "./MenuList";
import { Menu } from "./Menu";
import { BiSearchAlt } from "react-icons/bi";
import TrackList from "./TrackList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} listObject={MenuList} />
      <MenuPlayList />
      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export default LeftMenu;
