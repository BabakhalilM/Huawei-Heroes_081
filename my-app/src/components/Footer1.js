// components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link, VStack, HStack } from '@chakra-ui/react';

const Footer1 = () => {
  return (
    <Box bg="rgb(255,255,255)" color="black" py={10} mt={15}>
      <Flex 
        maxW="1200px" 
        mx="auto" 
        justifyContent="space-between" 
        alignItems="flex-start" 
        flexWrap="wrap" 
        px={5}
      >
        {/* Brand Information */}
        <VStack align="flex-start" spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontSize="24px" fontWeight="bold">
            HAAN
          </Text>
          <Text fontSize="sm">
          A natural personal care brand that focuses its<br/>
          activity on defining a better future for the<br/> 
           planet and humanity.
          </Text>
        </VStack>

        {/* Links Section */}
        <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Stay Connected</Text>
          <Link href="#">Newsletter</Link>
          <Link href="#">Purpose</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Affiliate Program</Link>
          <Link href="#">Custom Orders for Events</Link>
        </VStack>

        {/* Policies Section */}
        <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Policies</Text>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Deliveries & Returns</Link>
          <Link href="#">Refund Policy</Link>
          <Link href="#">Cookies Policy</Link>
          <Link href="#">Legal Notice</Link>
        </VStack>

        {/* Contact Information and Social Media */}
        <VStack align="flex-start" spacing={2} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Get in Touch</Text>
          <Text>Email: haanready@gmail.com</Text>
          <Text>Follow Us:</Text>
          <HStack spacing={3}>
            <Link href="#">
              <Box as="span" role="img" aria-label="Facebook">
                📘
              </Box> Facebook
            </Link>
            <Link href="#">
              <Box as="span" role="img" aria-label="Instagram">
                📸
              </Box> Instagram
            </Link>
            <Link href="#">
              <Box as="span" role="img" aria-label="YouTube">
                ▶️
              </Box> YouTube
            </Link>
          </HStack>
        </VStack>

        {/* Payment Methods */}
        {/* <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Guaranteed Safe Checkout</Text>
          <Text>Accepted Payment Methods:</Text>
          <Text>Visa, MasterCard, PayPal, etc.</Text>
        </VStack> */}
      </Flex>
    </Box>
  );
};

export default Footer1;
