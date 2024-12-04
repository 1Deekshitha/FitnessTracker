import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import './Home.css'

export default function Home() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
      };

    return (
        <div className='home-container'>
            <div className="back-button-container">
      <button className="btn start-btn" onClick={() => handleNavigation('/MainHome')}>
        Back
      </button>
    </div>

            <h1 className="description">A Yoga AI Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
