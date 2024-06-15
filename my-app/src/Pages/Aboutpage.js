import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from '../ft30_067_componants/OurStory';
import Sobremesatalks from '../ft30_067_componants/Sobremesatalks';
import WaterProjects from '../ft30_067_componants/WaterProjects';
import Dropdown from '../ft30_067_componants/Dropdown';

const Aboutpage = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul style={{ listStyle: "none" }}>
                            <li><Dropdown /></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/sobremesatalks" element={<Sobremesatalks />} />
                    <Route path="/water-projects" element={<WaterProjects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Aboutpage;
