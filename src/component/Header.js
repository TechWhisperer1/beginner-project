import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <h1>New Appointment Request</h1>
            </Link>
            <p>Some great coverage for less</p>
        </div>
    );
};