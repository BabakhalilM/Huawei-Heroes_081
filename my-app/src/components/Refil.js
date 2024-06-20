// Header.js
import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

function Refil() {
  return (
    <>
    <Box
     style={{
        display:"flex",
        marginTop:"30px",
        gap:"300px",
        backgroundColor:"rgb(177,157,201)",
     }}
    >
    <Box
     style={{
        position:"relative",
        top:"100px",
        left:"80px",
        
     }}
    >
        <Heading as='h1' size='xl'
         style={{
            color:"white",
            padding:"8px",
        
        }}
        
        >REFILLS</Heading>
        <Text fontSize='lg'
        style={{
            color:"white",
            padding:"8px",
        }}>
        Join the Refill Revolution</Text>
        <Text fontSize='md'
         style={{
            color:"white",
            padding:"8px",
        }}
        >
          Subscribe to your favorite product's Refill and get a 10% off
        </Text>
        <Button colorScheme='teal' variant='outline'
         style={{
            // color:"white",
            marginTop:"15px",
        }}>

        >SUBSCRIBE & SAVE</Button>
      </Box>
      <Box>
        <Image
         
          src="https://haanready.com/cdn/shop/products/WEB_FACECLEANSER_REFILL_HYALURONIC_1copia.jpg?v=1664957759&width=533"
          alt="Refill Product Image"
          style={{
            width:"800px",
            height:"65vh",
          }}
        />
      </Box>
    </Box>
      
    </>
  );
}

export default Refil;
