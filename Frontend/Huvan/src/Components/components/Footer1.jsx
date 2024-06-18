// // components/Footer.js
// import React from 'react';
// import { Box, Flex, Text, Link, VStack, HStack } from '@chakra-ui/react';

// const Footer1 = () => {
//   return (
//     <Box bg="rgb(255,255,255)" color="black" py={10} mt={15}>
//       <Flex 
//         maxW="1200px" 
//         mx="auto" 
//         justifyContent="space-between" 
//         alignItems="flex-start" 
//         flexWrap="wrap" 
//         px={5}
//       >
//         {/* Brand Information */}
//         <VStack align="flex-start" spacing={4} mb={{ base: 4, md: 0 }}>
//           <Text fontSize="24px" fontWeight="bold">
//             HAAN
//           </Text>
//           <Text fontSize="sm">
//           A natural personal care brand that focuses its<br/>
//           activity on defining a better future for the<br/> 
//            planet and humanity.
//           </Text>
//         </VStack>
//         {/* Links Section */}
//         <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
//           <Text fontWeight="bold">Stay Connected</Text>
//           <Link href="#">Newsletter</Link>
//           <Link href="#">Purpose</Link>
//           <Link href="#">Contact Us</Link>
//           <Link href="#">FAQs</Link>
//           <Link href="#">Affiliate Program</Link>
//           <Link href="#">Custom Orders for Events</Link>
//         </VStack>

//         {/* Policies Section */}
//         <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
//           <Text fontWeight="bold">Policies</Text>
//           <Link href="#">Terms & Conditions</Link>
//           <Link href="#">Privacy Policy</Link>
//           <Link href="#">Deliveries & Returns</Link>
//           <Link href="#">Refund Policy</Link>
//           <Link href="#">Cookies Policy</Link>
//           <Link href="#">Legal Notice</Link>
//         </VStack>

//         {/* Contact Information and Social Media */}
//         <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
//           <Text fontWeight="bold">Get in Touch</Text>
//           <Text>Email: haanready@gmail.com</Text>
//           <Text>Follow Us:</Text>
//           <HStack spacing={3}>
//             <Link href="#">
//               <Box as="span" role="img" aria-label="Facebook">
//                 📘
//               </Box> Facebook
//             </Link>
//             <Link href="#">
//               <Box as="span" role="img" aria-label="Instagram">
//                 📸
//               </Box> Instagram
//             </Link>
//             <Link href="#">
//               <Box as="span" role="img" aria-label="YouTube">
//                 ▶️
//               </Box> YouTube
//             </Link>
//           </HStack>
//         </VStack>

//         {/* Payment Methods */}
//         {/* <VStack align="flex-start" spacing={2}>
//           <Text fontWeight="bold">Guaranteed Safe Checkout</Text>
//           <Text>Accepted Payment Methods:</Text>
//           <Text>Visa, MasterCard, PayPal, etc.</Text>
//         </VStack> */}
//       </Flex>
//     </Box>
//   );
// };

// export default Footer1;


import React from 'react';
import './Footer1.css'; // Import the CSS file for styling

const Footer1 = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Brand Information */}
        <div className="footer-section">
          <h2>HAAN</h2>
          <p>
            A natural personal care brand that focuses its <br/>
            activity on defining a better future for the <br/>
            planet and humanity.
          </p>
        </div>
        {/* Links Section */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <a href="#">Newsletter</a>
          <a href="#">Purpose</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Custom Orders for Events</a>
        </div>
        {/* Policies Section */}
        <div className="footer-section">
          <h3>Policies</h3>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Deliveries & Returns</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Legal Notice</a>
        </div>
        {/* Contact Information and Social Media */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Email: haanready@gmail.com</p>
          <p>Follow Us:</p>
          <div className="social-media">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="YouTube">▶️ YouTube</a>
          </div>
        </div>
        {/* Payment Methods */}
        {/* <div className="footer-section">
          <h3>Guaranteed Safe Checkout</h3>
          <p>Accepted Payment Methods:</p>
          <p>Visa, MasterCard, PayPal, etc.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer1;
