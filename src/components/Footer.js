
import React from 'react';
import { Briefcase, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <Briefcase className="logo-icon" />
                        <span>JobPortal</span>
                    </div>
                    <p>The best place to find your next career move. Connecting professionals with top employers.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href={`${BACKEND_URL}/jobs`}>Find Jobs</a></li>
                        <li><a href={`${BACKEND_URL}/companies`}>Companies</a></li>
                        <li><a href={`${BACKEND_URL}/blog`}>Blog</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>For Employers</h3>
                    <ul>
                        <li><a href={`${BACKEND_URL}/post-job`}>Post a Job</a></li>
                        <li><a href={`${BACKEND_URL}/pricing`}>Pricing</a></li>
                        <li><a href={`${BACKEND_URL}/resources`}>Resources</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a href="/"><Twitter /></a>
                        <a href="/"><Linkedin /></a>
                        <a href="/"><Facebook /></a>
                        <a href="/"><Instagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
