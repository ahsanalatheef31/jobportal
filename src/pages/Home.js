
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />

            <section className="features-section">
                <div className="section-title">
                    <h2>Why Choose Us?</h2>
                    <p>We provide the best features for both employers and job seekers.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Easy to Apply</h3>
                        <p>Apply to jobs with just one click and track your applications.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Top Companies</h3>
                        <p>Get hired by the top companies in the industry.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Career Growth</h3>
                        <p>Find opportunities that help you grow in your career.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
