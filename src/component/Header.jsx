import React from "react";
import { Link } from "react-router-dom";
import back from "../Image/back.png";

export const Header = () => {
    return (
        <div className="Header">
            <div className="Header-top">
                <Link to="/Appointment" className="Header-link">
                    <img src={back} alt="" />
                </Link>
                <h1>New Appointment Request</h1>
            </div>

            <p>Some great coverage for less</p>
        </div>
    );
};
