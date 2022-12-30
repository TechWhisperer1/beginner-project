import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Register = () => {
    const [useDetails, setUserDetails] = useState({
        name: " ",
        email: " ",
        mobile: " ",
        address: " ",
        password: " ",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((useDetails) => ({ ...useDetails, [name]: value }));
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
                        <h2>
                            <Link to="/Login" style={{ color: "black", textDecoration: "none" }}>
                                {" "}
                                Log In
                            </Link>
                        </h2>
                        <h2 style={{ textAlign: "cent", color: "white" }}>Sign Up</h2>
                    </div>

                    {/* name */}
                    <div>
                        <label>Full Name</label>
                        <input type="text" onChange={handleChange} value={useDetails.username} name="username" />
                    </div>

                    {/* email */}
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={handleChange} value={useDetails.email} name="email" />
                    </div>

                    {/* mobile */}
                    <div>
                        <label>Mobile Number</label>
                        <input type="text" onChange={handleChange} value={useDetails.mobile} name="mobile" />
                    </div>

                    {/* address */}
                    <div>
                        <label>Address</label>
                        <input type="text" onChange={handleChange} value={useDetails.address} name="address" />
                    </div>
                    {/* password */}
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={handleChange} value={useDetails.password} name="password" />
                    </div>
                    <p className="pass-para">
                        <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
                            {" "}
                            Forgot your password?
                        </Link>
                    </p>
                    <button type="submit" className="btn ">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};
