import React, { useState } from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";

export const Title = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        company: "",
        agent: "",
        com: "",
        phone: "",
        loan: "",
        prop: "",
        location: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((user) => ({ ...user, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Profile />
            <Header />{" "}
            <div className="details">
                <form className="details-signer" onSubmit={handleSubmit}>
                    <div className="name-details">
                        <h3 className="signer">Signer Details</h3>
                        <label htmlFor="name">
                            Full Name{" "}
                            <input type="text" className="form-input" id="name" value={user.name} name="username" onChange={handleChange} />
                        </label>
                        <label htmlFor="email">
                            Email{" "}
                            <input type="email" className="form-input" id="email" value={user.email} name="email" onChange={handleChange} />
                        </label>
                        <label htmlFor="number">
                            Phone Number
                            <input
                                type="text"
                                className="form-input"
                                id="number"
                                value={user.number}
                                name="phone number"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="company-details">
                        <h3 className="title-com">Title Company Details</h3>
                        <label htmlFor="company">
                            Company Name
                            <input
                                type="text"
                                className="form-input"
                                id="company"
                                value={user.company}
                                name="company name"
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="agent">
                            Agent Name
                            <input type="text" className="form-input" id="agent" value={user.agent} name="agent name" onChange={handleChange} />
                        </label>
                        <label htmlFor="company-email">
                            Email
                            <input
                                type="email"
                                className="form-input"
                                id="company-email"
                                value={user.com}
                                name="company email"
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="phone">
                            Phone Number
                            <input type="text" className="form-input" id="phone" value={user.phone} name="number" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="loan-order">
                        <h3 className="order">Order Info</h3>
                        <label htmlFor="loan">
                            Escrow# / Loan No
                            <input type="text" className="form-input" id="loan" value={user.loan} name="loan number" onChange={handleChange} />
                        </label>
                        <label htmlFor="prop">
                            Property Address
                            <input
                                type="text"
                                className="form-input"
                                id="prop"
                                value={user.prop}
                                name="property address"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="location-details">
                        <h3 className="location">Signing Location</h3>
                        <label htmlFor="location">
                            Enter Signing Location
                            <input
                                type="text"
                                className="form-input"
                                id="location"
                                value={user.location}
                                name="location"
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="date">
                            Date
                            <input type="text" className="form-input" id="date" value={user.date} name="date" onChange={handleChange} />
                        </label>
                        <label htmlFor="time">
                            Time
                            <input type="text" className="form-input" id="time" value={user.time} name="time" onChange={handleChange} />
                        </label>
                    </div>{" "}
                    <button type="submit" className="appointment">
                        Schedule Appointment
                    </button>
                </form>
            </div>
        </>
    );
};
