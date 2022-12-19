import React from "react";
import id from "../Image/id.png";
import location from "../Image/location.png";
import mail from "../Image/mail.png";
import phone from "../Image/phone.png";
import power from "../Image/power.png";
import profile from "../Image/profile.png";

export const Profile = () => {
    return (
        <section className="Logo">
            <label for="" className="logo">
                <img src={power} alt="logo" className="logo-img" /> BeInsurance
            </label>
            <div className="user-profile">
                <img src={profile} alt="" />
                <h2>Jacob Jones </h2>
            </div>
            <div className="proof">
                <ul>
                    <li>
                        <img src={mail} alt="" className="logo-img" />
                        <span>email</span>
                    </li>
                    <li>
                        <img src={phone} alt="" className="logo-img" />
                        <span> mobile</span>
                    </li>
                    <li>
                        <img src={location} alt="" className="logo-img" />
                        <span>address</span>
                    </li>
                    <li>
                        {" "}
                        <img src={id} alt="" className="logo-img" />
                        <span>id</span>{" "}
                    </li>
                </ul>
            </div>
        </section>
    );
};
