
import "./header.css"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

import SubtitleSection from "./SubtitleSection"





function Header() {
    const words = ["Closing","Earning","Selling"]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);  // Change the word every 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header">
            <SubtitleSection
                title={
                <div>
                    <h1>It’s Time to Start</h1>
                    <h1 className="word">{words[currentIndex]}</h1>
                </div>
                }
                subtitle="MultiChannel Outreach Studio"
                content={`We hunt leads & crush your outbound cold emails. <br/>
                Accelerate customer insights and book more meetings.
                Book A Meeting`}
            />
            <div className='auth-buttons home-page'>
                    {/* <Link to="/signin" className='clear-button button'>Sign In</Link> */}
                    <Link to="https://calendly.com/drew-quiib/30min" className='dark-button button'>Let's Meet </Link>
            </div>

            
            
        </div>

    )

}
export default Header