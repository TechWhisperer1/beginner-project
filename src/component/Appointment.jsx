import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Profile } from "./Profile";
export const Appointment = () => {
    return (
        <>
            <Profile />
            <Header />
            <div className="title">
                <div className="title1">
                    <section className="container">
                        <h2>Loan Signing Agent</h2>
                        <p>Suitable for those who have purchased a brand new car</p>
                        <Link to="Title" className="title-link">
                            <h5>View details</h5>
                        </Link>
                    </section>
                    <section className="container">
                        <h2>Remote Online Notary</h2>
                        <p>Suitable for those who already have a valid third party cover</p>
                        <Link to="Title" className="title-link">
                            <h5>View details</h5>
                        </Link>
                    </section>
                    <section className="container">
                        <h2>Mobile General Notary</h2>
                        <p>Suitable for those who the car infrequently</p>
                        <Link to="Title" className="title-link">
                            <h5>View details</h5>
                        </Link>
                    </section>
                </div>
                <div className="title2">
                    <section className="con">
                        <h3>Calculate your Costs for RON!</h3>
                        <div>
                            Document count: <input type="text" value="" className="con-input" />
                        </div>
                        <div for="">
                            Signer count: <input type="text" name="" value="" className="con-input" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
