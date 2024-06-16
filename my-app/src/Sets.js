import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dropdown3 from './ft30_067_Day3_componants/Dropdown3';
import { TravelSets } from './ft30_067_Day3_componants/TravelSets';
import { GiftSets } from './ft30_067_Day3_componants/GiftSets';

export const Sets = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul style={{ listStyle: "none" }}>
                            <li><Dropdown3/></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/Travel_Sets" element={<TravelSets/>} />
                    <Route path="/Gift_Sets" element={<GiftSets/>} />
                </Routes>
            </div>
        </Router>
    );
}





