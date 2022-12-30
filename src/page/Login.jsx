import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = () => {
    const [useLogs, setUseLogs] = useState({
        email: " ",
        password: " ",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUseLogs((useLogs) => ({ ...useLogs, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    };

    return (
        <div className="register">
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <form onChange={handleSubmit} className="register-form">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2 style={{ color: "white" }}> Log In</h2>
                        <h2 style={{ textAlign: "cent", color: "white" }}>
                            {" "}
                            <Link to="/Registration" style={{ color: "black", textDecoration: "none" }}>
                                Sign Up
                            </Link>{" "}
                        </h2>
                    </div>

                    {/* email */}
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={handleChange} value={useLogs.email} name="email" />
                    </div>
                    {/* password */}
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={handleChange} value={useLogs.password} name="password" />
                    </div>
                    <p className="pass-para">
                        <Link to="/Registration" style={{ color: "white", textDecoration: "none" }}>
                            Don't have any account?
                        </Link>
                    </p>
                    <button type="submit" className="btn ">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};
