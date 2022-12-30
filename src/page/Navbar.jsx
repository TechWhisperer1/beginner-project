import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <>
            <nav style={{ display: "flex" }} className="dash-nav">
                <h2>
                    {" "}
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                        Home
                    </Link>{" "}
                </h2>
                <ul style={{ display: "flex", gap: "30px" }} className="list-nav">
                    <li>
                        <Link to="/Appointment" style={{ color: "white", textDecoration: "none" }}>
                            {" "}
                            Appointment
                        </Link>
                    </li>
                    <li>Course</li>
                    <li>
                        {" "}
                        <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
                            {" "}
                            Log In
                        </Link>
                    </li>
                    <li>
                        <Link to="/Registration" style={{ color: "white", textDecoration: "none" }}>
                            Sign up
                        </Link>{" "}
                    </li>
                </ul>
            </nav>
        </>
    );
};
