import React from 'react';
import './MeetUs.css';
import { Link } from 'react-router-dom';

const MeetUs = () => {
  return (
    <div className="meet-us-section d-flex align-items-center position-relative">
      <div className="overlay position-absolute"></div>
      <div className="text-white position-relative font title-main" style={{ zIndex: 2 }} >
        <h1 className="mb-3 font mainHeading">Team</h1>
        <div className="breadcrumb-custom ">
          <Link to="/" className="text-white text-decoration-none font">Home </Link>
          <span className="mx-2 text-white">&gt;</span>
          <Link to="/about" className="text-white text-decoration-none font">About </Link>
          <span className="mx-2 text-white">&gt;</span>
       <Link to="/our-team" className="text-white text-decoration-none font">Team</Link>
        </div>
      </div>
    </div>
  );
};

export default MeetUs;
