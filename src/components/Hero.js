
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Find Your <span className="highlight">Dream Job</span> Today</h1>
                <p>Connecting talent with opportunity. Discover thousands of jobs from top companies.</p>

                <div className="search-box">
                    <div className="input-group">
                        <Search className="icon" />
                        <input type="text" placeholder="Job title, keywords..." />
                    </div>
                    <div className="divider"></div>
                    <div className="input-group">
                        <MapPin className="icon" />
                        <input type="text" placeholder="City, state, or zip" />
                    </div>
                    <button className="search-btn">Search Jobs</button>
                </div>

                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">10k+</span>
                        <span className="stat-label">Active Jobs</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Companies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1M+</span>
                        <span className="stat-label">Candidates</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
