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
      <div className="heading"><h1>FITTNESS TRACKER</h1>
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
        <div className="tab squat" onClick={() => handleNavigation('/squat')}>
          <img
            src="https://media.gettyimages.com/id/605772224/photo/tight-toned.jpg?s=612x612&w=gi&k=20&c=gFCHM7SKDGE0hKNPO4E-kVRK7VgahxZY0lDXetEvpLw="
            alt="Squat"
          />
          <p>Squat</p>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
