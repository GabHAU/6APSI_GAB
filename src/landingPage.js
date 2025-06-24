import './landing.css'; 
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-content">
                <h1>Welcome to MyApp</h1>
                <p>This is the Landing Page</p>
                <p>My name is Gab</p>
                <Link to="/login">
                <button className="landing-button">Get Started</button>
                </Link>

            </div>
        </div>
    );
}

export default Landing;