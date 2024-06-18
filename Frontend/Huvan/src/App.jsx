import { useState } from 'react'
// import './App.css'
import Navbar from './Components/components/Navbar'
// import { Image } from '@chakra-ui/react'
import Image from './Components/components/Image';
import Image1 from './Components/components/Image1';
import ProductGrid from './Components/components/ProductGrid';
import ProductGrid1 from './Components/components/ProductGrid1';
import Refil from './Components/components/Refil';
import Refil2 from './Components/components/Refil2';
import Footer from './Components/components/Footer';
import Footer1 from './Components/components/Footer1';
import { Route, Router, Routes } from 'react-router-dom';
import Image3 from './Components/components/Image3';
import Detail from './Components/components/Detail';
import LoginForm from './Components/componets_m/LoginForm';
import SignupForm from './Components/componets_m/SignupForm';
import Cartshow from './Components/userpanel/Cartshow';
import ForgotPassword from './Components/componets_m/ForgotPassword';
import QRCode from './Components/componets_m/Qrcode';
import CardContainer from './Components/ft32_181_components/CardContainer';
import Aboutpage from './Components/Pages/Aboutpage';
import Dropdown from './Components/ft30_067_componants/Dropdown';
import OurStory from './Components/ft30_067_componants/OurStory';
import Sobremesatalks from './Components/ft30_067_componants/Sobremesatalks';
import WaterProjects from './Components/ft30_067_componants/WaterProjects';
import { SkinCareRefill } from './Components/ft30_067-Day2_componants/SkinCareRefill';
import { HandCareRefill } from './Components/ft30_067-Day2_componants/HandCareRefill';
import { BodyCareRefill } from './Components/ft30_067-Day2_componants/BodyCareRefill';
import { OralCareRefill } from './Components/ft30_067-Day2_componants/OralCareRefill';
import { Hand1 } from './Components/ft30_067_Day4_componants/Hand1';
import { Hand2 } from './Components/ft30_067_Day4_componants/Hand2';
import { Hand3 } from './Components/ft30_067_Day4_componants/Hand3';
import { Hand4 } from './Components/ft30_067_Day4_componants/Hand4';
import { Body1 } from './Components/ft30_067_Day4_componants/Body1';
import { Body2 } from './Components/ft30_067_Day4_componants/Body2';
import { Body3 } from './Components/ft30_067_Day4_componants/Body3';
import { Body4 } from './Components/ft30_067_Day4_componants/Body4';
import { Skin1 } from './Components/ft30_067_Day4_componants/Skin1';
import { Skin2 } from './Components/ft30_067_Day4_componants/Skin2';
import { Skin3 } from './Components/ft30_067_Day4_componants/Skin3';
import { Skin4 } from './Components/ft30_067_Day4_componants/Skin4';
import { Sunscreen } from './Components/ft30_067_Day4_componants/Sunscreen';
import { Hotela } from './Components/ft30_067_Day4_componants/Hotela';
import { TravelSets } from './Components/ft30_067_Day3_componants/TravelSets';
import { GiftSets } from './Components/ft30_067_Day3_componants/GiftSets';
import ProductListing from './Components/componentsft30_312/ProductListing';
import Adminpannel from './Components/AdminPaanel/Adminpannel';

function App() {

  return (
    <>

      {/* <> */}


      {/* <Navbar /> */}
      {/* <Router>
        <Route path='/' element={{< Image />
          <ProductGrid />
          <Image1 />
          <ProductGrid1 />
          <Refil />
          <Refil2 />
          <Footer />
          <Footer1 />}}/>
      </Router> */}

      {/* <Router> */}
      {/* <Aboutpage/> */}
      {/* <Routes>
      <Route path="/" element={<><Image /><ProductGrid /><Image1/><ProductGrid1/><Refil/><Refil2/><Footer/><Footer1/></>}/>
        <Route path="/Detail/:productId" element={<Detail />} /> */}
      {/* <Route path="/" element={<Refil2 />} /> */}
      {/* <Route path="/image3" element={<Image3 />} /> */}
      {/* <Route path='/' element={<Nav />} /> */}
      {/* <Route path='/Nav' element={<Nav />} /> */}
      {/* <Route path="/signupForm" element={<SignupForm />} />
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path='/Cartshow' element={<Cartshow />} />
              <Route path='/CardContainer' element={<CardContainer/>}/>
              <Route path='/cartshow/Qrcode' element={<QRCode />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} /> 
              
      </Routes> */}
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<><Image /><ProductGrid /><Image1 /><ProductGrid1 /><Refil /><Refil2 /></>} />
        <Route path="/Detail/:productId" element={<Detail />} />
        <Route path="/image3" element={<Image3 />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/Cartshow" element={<Cartshow />} />
        <Route path="/CardContainer" element={<CardContainer />} />
        <Route path="/cartshow/Qrcode" element={<QRCode />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="/about" element={<Aboutpage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/sobremesatalks" element={<Sobremesatalks />} />
        <Route path="/water-projects" element={<WaterProjects />} />

        <Route path="/Skin_Care_Refill" element={<SkinCareRefill />} />
        <Route path="/Hand_Care_Refill" element={<HandCareRefill />} />
        <Route path="/Body_Care_Refill" element={<BodyCareRefill />} />
        <Route path='/Oral_Care_Refill' element={<OralCareRefill />} />

        <Route path="/Hand_Sanitizer" element={<Hand1 />} />
        <Route path="/Hand_Cream" element={<Hand2 />} />
        <Route path="/Hand_Soap" element={<Hand3 />} />
        <Route path="/Packs_Hand_Care" element={<Hand4 />} />
        <Route path="/Body_Lotion" element={<Body1 />} />
        <Route path="/Body_Oil" element={<Body2 />} />
        <Route path="/Body_Wash" element={<Body3 />} />
        <Route path="/Body_Scrub" element={<Body4 />} />
        <Route path="/Face_Serum" element={<Skin1 />} />
        <Route path="/Face_Cleanser" element={<Skin2 />} />
        <Route path="/Face_Cream" element={<Skin3 />} />
        <Route path="/Packs_Skin_Care" element={<Skin4 />} />
        <Route path="/Sunscreen" element={<Sunscreen />} />
        <Route path='/Hotel_Amenities' element={<Hotela />} />

        <Route path="/Travel_Sets" element={<TravelSets/>} />
        <Route path="/Gift_Sets" element={<GiftSets/>} />

        <Route path='/Productlist' element={<ProductListing/>}/>
        <Route path='/Adminpannel' element={<Adminpannel/>}/>

      </Routes>
      <Footer />
      <Footer1 /> 

      {/* </Router> */}
      {/* </Router> */}


      {/* <Routes>
          <Route path="/Detail/:productId" element={<Detail />} />
          <Route path="/" element={<Refil2 />} />
          <Route path="/image3" element={<Image3 />} />
        </Routes> */}




      {/* <div> */}
      {/* <CardContainer /> */}
      {/* </div> */}
      {/* <div style={{ display: "flex" }}> */}
      {/* <Aboutpage /> */}
      {/* <RefillStation /> */}
      {/* <Sets /> */}
      {/* <Shop/> */}
      {/* <Adminpannel/> */}
      {/* </div> */}
      {/* </> */}
      {/* <div> */}
      {/* <div> */}
      {/* <Nav /> */}
      {/* <Routes>
              <Route path='/' element={<Nav />} />
              <Route path='/Nav' element={<Nav />} />
              <Route path="/signupForm" element={<SignupForm />} />
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path='/Cartshow' element={<Cartshow />} />
              <Route path='/cartshow/Qrcode' element={<QRCode />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
      {/* <Route path="/admin" element={<AdminPage />} /> */}
      {/* <Route path="/add-card" element={<AddCardForm />} />
         <Route path="/edit-card/:id" element={<EditCard />} /> */}
      {/* </Routes> */}
      {/* <Cardshow /> */}
      {/* <ItemList/> */}
      {/* </div> */}
      {/* </div> */}

      {/* </> */}

      {/* // </> */}
    </>
  )
}

export default App
