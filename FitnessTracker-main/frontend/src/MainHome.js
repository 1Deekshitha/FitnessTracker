import React from 'react';
import './MainHome.css';
import { useNavigate } from 'react-router-dom';
import bgVideo from './background.mp4'; 


function MainHome() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="main-home">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heading"><h1>FITNESS TRACKER</h1>
      </div>
      

      {/* Content Tabs */}
      <div className="tabs">
        <div className="tab yoga" onClick={() => handleNavigation('/home')}>
          <img
            src="https://articles-1mg.gumlet.io/articles/wp-content/uploads/2015/09/yoga3-2.jpg?w=300&compress=true&quality=80&dpr=2.6"
            alt="Yoga"
          />
          <p>Yoga</p>
        </div>
    

        <div className='tab graph' onClick={() => handleNavigation('/graph')}>
          <img 
          src="https://images.stockcake.com/public/8/2/1/82165c74-e12e-49bd-a041-b02a52053e64_large/technology-in-fitness-stockcake.jpg"
          alt="Fitness Tracker"
          />
          <p>Fitness Tracker</p>
        </div>
        <div className="tab Health" onClick={() => handleNavigation('/home')}>
          <img
            src="https://marketplace.canva.com/EAFt8Mx_sTo/1/0/1143w/canva-blue-and-pink-illustrated-mental-health-poster-JFwHvzM3QWA.jpg"
            alt="mental health"
          />
          <p>Mental health</p>
        </div>


        
      </div>
    </div>
  );
}

export default MainHome;
