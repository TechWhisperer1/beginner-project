import React, { useState } from "react";

export const Title = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");
    const [agent, setAgent] = useState("");
    const [com, setCom] = useState("");
    const [phone, setPhone] = useState("");
    const [loan, setLoan] = useState("");
    const [prop, setProp] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="details">
            <form className="details-signer" onSubmit={handleSubmit}>
                <div className="name-details">
                    <h3 className="signer">Signer Details</h3>
                    <label htmlFor="name">
                        Full Name{" "}
                        <input
                            type="text"
                            className="form-input"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </label>
                    <label htmlFor="email">
                        Email{" "}
                        <input
                            type="email"
                            className="form-input"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </label>
                    <label htmlFor="number">
                        Phone Number
                        <input
                            type="text"
                            className="form-input"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter Phone Number"
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
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enter Company Name"
                        />
                    </label>
                    <label htmlFor="agent">
                        Agent Name
                        <input
                            type="text"
                            className="form-input"
                            id="agent"
                            value={agent}
                            onChange={(e) => setAgent(e.target.value)}
                            placeholder="Enter Agent Name"
                        />
                    </label>
                    <label htmlFor="company-email">
                        Email
                        <input
                            type="email"
                            className="form-input"
                            id="company-email"
                            value={com}
                            onChange={(e) => setCom(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </label>
                    <label htmlFor="phone">
                        Phone Number
                        <input
                            type="text"
                            className="form-input"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Phone Number"
                        />
                    </label>
                </div>
                <div className="loan-order">
                    <h3 className="order">Order Info</h3>
                    <label htmlFor="loan">
                        Escrow# / Loan No
                        <input
                            type="text"
                            className="form-input"
                            id="loan"
                            value={loan}
                            onChange={(e) => setLoan(e.target.value)}
                            placeholder="Enter Loan Number"
                        />
                    </label>
                    <label htmlFor="prop">
                        Property Address
                        <input
                            type="text"
                            className="form-input"
                            id="prop"
                            value={prop}
                            onChange={(e) => setProp(e.target.value)}
                            placeholder="Enter Address"
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
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter Location"
                        />
                    </label>
                    <label htmlFor="date">
                        Date
                        <input
                            type="date"
                            className="form-input"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Enter Date"
                        />
                    </label>
                    <label htmlFor="time">
                        Time
                        <input
                            type="time"
                            className="form-input"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="Enter Time"
                        />
                    </label>
                </div>
            </form>
            <button type="submit" className="appointment" onClick={handleSubmit}>
                Schedule Appointment
            </button>
        </div>
    );
};
