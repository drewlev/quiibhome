import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css"

function Nav() {
    return (
        <div className='nav'>
            <div className='nav-elements'>
                <img src={logo} alt="Quiib Logo" />
                <div className='nav-links'>
                    {/* <a href="..">Why Quiib</a>
                    <a href="..">For Empoyers</a>
                    <a href="..">Cohort Schedule</a>
                    <a href="..">Resources</a> */}
                </div>
                <div className='auth-buttons'>
                    {/* <Link to="/signin" className='clear-button button'>Sign In</Link> */}
                    <Link to="https://calendly.com/drew-quiib/30min" className='dark-button button'>Let's Meet </Link>
                </div>

            </div>

        </div>
       
    )

}
export default Nav