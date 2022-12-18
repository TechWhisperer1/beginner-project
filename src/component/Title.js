import { useState } from "react";

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

    return (
        <div className="details">
            <form className="details-signer">
                <h3 className="signer">Signer Details</h3>
                <div className="name-details">
                    <label for="">
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
                    <label for="">
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
                </div>
                <div className="name-num">
                    <label for="">
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
            </form>
            <form className="details-company">
                <h3 className="title-com">Title Company Details</h3>
                <div className="company-details">
                    <label for="">
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
                    <label for="">
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
                </div>
                <div className="com-mail">
                    <label for="">
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
                    <label for="">
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
            </form>
            <form className="details-order">
                <h3 className="order">Order Info</h3>
                <div className="loan-order">
                    <label for="">
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
                    <label for="">
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
            </form>
            <form className="details-location">
                <h3 className="location">Signing Location</h3>
                <div className="location-details">
                    <label for="">
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
                    <label for="">
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
                    <label for="">
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
            <button type="submit" className="appointment">
                Schedule Appointment
            </button>
        </div>
    );
};
