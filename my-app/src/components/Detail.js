import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Spinner, Image, Button } from "@chakra-ui/react";
import axios from "axios";

const Detail = () => {
  const { productId } = useParams(); // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product ID
    axios.get(`https://huawei-heroes-081-5.onrender.com/Cards/${productId}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p="20px" 
    style={{
      display:"flex",
      gap:"130px",
    }}
     >
      {product ? (
        <>
          <Image src={product["image"]} alt={product["name"]} mb="20px" />
          <Box>
          <Text fontSize="2xl" fontWeight="bold" 
          style={{color:"Tomato"}}>{product["name"]}</Text>
          <Text fontSize="lg" mt="10px">
          A fruity smell with 65% of Alcohol that will kill 
          99.9% of the bacteria and viruses from your hands. 
          The cherry on top is that its travel-friendly packaging 
          makes it perfect to take along with you wherever you go!
          The cherry on top is its travel-friendly packaging. Designed 
          with the modern, on-the-go lifestyle in mind, this hand sanitizer........
          </Text>
          <Text fontSize="lg" mt="10px" fontWeight="bold">{product["price"]}</Text>
          <Button colorScheme="teal" variant="outline" mt={4}>{product["submit"]}</Button>
          </Box>
        </>
      ) : (
        <Text>No product details available.</Text>
      )}
    </Box>
  );
};

export default Detail;