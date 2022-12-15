import { Link } from "react-router-dom";
import { Content } from "./Content";

export const Home = () => {
    return (
        <div className="title">
            <div className="title1">
                <section className="container">
                    <h2>Loan Signing Agent</h2>
                    <p>Suitable for those who have purchased a brand new car</p>
                    <Link to="">
                        <h5>View details</h5>
                    </Link>
                </section>
                <section className="container">
                    <h2>Remote Online Notary</h2>
                    <p>Suitable for those who already have a vaild third party cover</p>
                    <Link to="/Title">
                        <h5>View details</h5>
                    </Link>
                </section>
                <section className="container">
                    <h2>Mobile General Notary</h2>
                    <p>Suitable for those who the car infrequently</p>
                    <Link to="">
                        <h5>View details</h5>
                    </Link>
                </section>
            </div>
            <Content />
        </div>
    );
};
