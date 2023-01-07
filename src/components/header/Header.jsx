import "./header.css";
import { FaBed, FaCarAlt, FaTaxi } from "react-icons/fa";
import { MdFlight, MdNaturePeople } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsPersonFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdFlight />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCarAlt />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <MdNaturePeople />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - your joy is our pleasure.
        </p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <SlCalender className="headerIcon" />
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <BsPersonFill className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
        </div>
      </div>
    </div>
  );
}
