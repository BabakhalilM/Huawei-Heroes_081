import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Detail/${product.id}`);
  };

  return (
    <Flex justifyContent="center" m={4}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
        onClick={handleNavigate}
      >
        <Image
          src={product["image"]}
          alt={`Image of ${product["name"]}`}
          boxSize="190px"
          m="1px"
          onClick={handleNavigate}
        />
        <Box p="6">
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product["name"]}
          </Text>
          <Text>
            {product["price"]}
            <Box as="span" color="gray.600" fontSize="sm">
              / ea
            </Box>
          </Text>
          <Button colorScheme="teal" variant="outline" mt={4}>
            {product["submit"]}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;
