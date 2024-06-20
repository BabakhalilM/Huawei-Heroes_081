
import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Refil2() {
  return (
    <Box
      style={{
        display: "flex",
        marginTop: "30px",
        gap: "300px",
        backgroundColor: "rgb(218,136,121)",
      }}
    >
      <Box
        style={{
          position: "relative",
          top: "100px",
          left: "80px",
        }}
      >
        <Heading as='h1' size='xl'
          style={{
            color: "white",
            padding: "8px",
          }}
        >
          REFILLS
        </Heading>
        <Text fontSize='lg'
          style={{
            color: "white",
            padding: "8px",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Our purpose
        </Text>
        <Text fontSize='md'
          style={{
            color: "white",
            padding: "8px",
          }}
        >
          Our aim is to eradicate Water Crisis.
          We support clean water projects by creating water wells in
        </Text>
        <Link to="/image3">
          <Button colorScheme='teal' variant='outline'
            style={{
              marginTop: "0px",
              borderRadius:"10px",
              padding:"10px",
              border:"none",
              fontSize:"18px",
              cursor:"pointer"
            }}
          >
            DISCOVER MORE
          </Button>
        </Link>
      </Box>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1547496614-54ff387d650a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slum Boys Image"
          style={{
            width: "750px",
            height: "65vh",
          }}
        />
      </Box>
    </Box>
  );
}

export default Refil2;
