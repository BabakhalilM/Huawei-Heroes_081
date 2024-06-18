// import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const Card = ({ product }) => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate(`/Detail/${product.id}`);
//   };

//   return (
//     <Flex justifyContent="center" m={4}>
//       <Box
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         cursor="pointer"
//         transition="transform 0.2s"
//         _hover={{ transform: "scale(1.05)" }}
//         onClick={handleNavigate}
//       >
//         <Image
//           src={product["image"]}
//           alt={`Image of ${product["name"]}`}
//           boxSize="190px"
//           m="1px"
//           onClick={handleNavigate}
//         />
//         <Box p="6">
//           <Text
//             mt="1"
//             fontWeight="semibold"
//             as="h4"
//             lineHeight="tight"
//             isTruncated
//           >
//             {product["name"]}
//           </Text>
//           <Text>
//             {product["price"]}
//             <Box as="span" color="gray.600" fontSize="sm">
//               / ea
//             </Box>
//           </Text>
//           <Button colorScheme="teal" variant="outline" mt={4}>
//             {product["submit"]}
//           </Button>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default Card;

// import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../ft32_181_components/Card.css";
import { useContext, useState } from "react";
import { Authcontext } from "../context/loginauth";

const Card = ({ product }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Detail/${product.id}`);
  };


  
  const {addToCart,useremail}=useContext(Authcontext);
  

  const handleAddToCart = () => {
    console.log(useremail,data.id);
    if (data.submit === "Add to cart") {
      addToCart(useremail, data.id)
        .then(() => {
          // Optionally, you can perform any UI updates or show a success message here
          console.log('Product added to cart successfully!');
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error);
          // Show error message to the user
          alert('Error adding product to cart. Please try again later.');
        });
    } else {
      alert('This product is out of stock');
    }
  };

  return (
    <div
    
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img onClick={handleNavigate} src={isHovered && product['image'] ? product['image 2']||product['image'] : product.image} alt={product['name']} />
      </div>
      <h5>{product['name']}</h5>
      <p>{product.badge || "Pack Price"}</p>
      <p>{product['rating'] || "N/A"}★ {product['ratingcount']}</p>
      <p>{product['price']}€</p>
      <button onClick={handleAddToCart}>{product.submit || "Sold Out"}</button>
    </div>
  );
};

export default Card;
