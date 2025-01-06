import React from 'react';
import './PersonalBio.css';
import Profile from '../assets/Profile.jpg'

const PersonalBio = ({ name, age, profession, bio, image }) => {
  return (
    <div className="bio-card">
      <img src={Profile} alt="Profile" className="bio-image" />
      <h2 className="bio-name">{name}</h2>
      <p className="bio-detail"><strong>Age:</strong> {age}</p>
      <p className="bio-detail"><strong>Profession:</strong> {profession}</p>
      <p className="bio-description">{bio}</p>
    </div>
  );
};

export default PersonalBio;
