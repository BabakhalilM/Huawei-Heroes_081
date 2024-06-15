import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dropdown4 from '../ft30_067_Day4_componants/DropDown4';
import { Hand1 } from '../ft30_067_Day4_componants/Hand1';
import { Hand2 } from '../ft30_067_Day4_componants/Hand2';
import { Hand3 } from '../ft30_067_Day4_componants/Hand3';
import { Hand4 } from '../ft30_067_Day4_componants/Hand4';
import { Body1 } from '../ft30_067_Day4_componants/Body1';
import { Body2 } from '../ft30_067_Day4_componants/Body2';
import { Body3 } from '../ft30_067_Day4_componants/Body3';
import { Body4 } from '../ft30_067_Day4_componants/Body4';
import { Skin1 } from '../ft30_067_Day4_componants/Skin1';
import { Skin2 } from '../ft30_067_Day4_componants/Skin2';
import { Skin3 } from '../ft30_067_Day4_componants/Skin3';
import { Skin4 } from '../ft30_067_Day4_componants/Skin4';
import { Sunscreen } from '../ft30_067_Day4_componants/Sunscreen';
import { Hotela } from '../ft30_067_Day4_componants/Hotela';

export const Shop = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul style={{ listStyle: "none" }}>
                            <li><Dropdown4/></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/Hand_Sanitizer" element={<Hand1/>} />
                    <Route path="/Hand_Cream" element={<Hand2/>} />
                    <Route path="/Hand_Soap" element={<Hand3/>} />
                    <Route path="/Packs_Hand_Care" element={<Hand4/>} />
                    <Route path="/Body_Lotion" element={<Body1 />} />
                    <Route path="/Body_Oil" element={<Body2/>} />
                    <Route path="/Body_Wash" element={<Body3 />} />
                    <Route path="/Body_Scrub" element={<Body4 />} />
                    <Route path="/Face_Serum" element={<Skin1/>} />
                    <Route path="/Face_Cleanser" element={<Skin2 />} />
                    <Route path="/Face_Cream" element={<Skin3 />} />
                    <Route path="/Packs_Skin_Care" element={<Skin4 />} />
                    <Route path="/Sunscreen" element={<Sunscreen/>} />
                    <Route path='/Hotel_Amenities' element={<Hotela/>}/>

                </Routes>
            </div>
        </Router>
    );
}
