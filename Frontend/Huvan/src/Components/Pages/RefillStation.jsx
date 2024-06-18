import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SkinCareRefill } from '../ft30_067-Day2_componants/SkinCareRefill';
import { HandCareRefill } from '../ft30_067-Day2_componants/HandCareRefill';
import { BodyCareRefill } from '../ft30_067-Day2_componants/BodyCareRefill';
import { OralCareRefill } from '../ft30_067-Day2_componants/OralCareRefill';
import Dropdown2 from '../ft30_067-Day2_componants/Dropdown2';

export const RefillStation = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul style={{ listStyle: "none" }}>
                            <li><Dropdown2/></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/Skin_Care_Refill" element={<SkinCareRefill />} />
                    <Route path="/Hand_Care_Refill" element={<HandCareRefill />} />
                    <Route path="/Body_Care_Refill" element={<BodyCareRefill />} />
                    <Route path='/Oral_Care_Refill' element={<OralCareRefill/>}/>
                </Routes>
            </div>
        </Router>
    );
}
