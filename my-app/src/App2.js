import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OurStory from './ft30_067_componants/OurStory';
import Sobremesatalks from './ft30_067_componants/Sobremesatalks';
import WaterProjects from './ft30_067_componants/WaterProjects';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul style={{listStyle:"none"}}>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/sobremesatalks" element={<Sobremesatalks />} />
                    <Route path="/water-projects" element={<WaterProjects />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
        </div>
    );
}

const About = () => {
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                <li><Link to="/our-story">Our Story</Link></li>
                <li><Link to="/sobremesatalks">Sobremesatalks</Link></li>
                <li><Link to="/water-projects">Water Projects</Link></li>
            </ul>
        </div>
    );
}

export default App;
