
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card_p";
import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './ProductGrid.module.css'; 

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://huawei-heroes-081-5.onrender.com/Cards")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleNavigate = (productId) => {
    navigate(`/Detail/${productId}`);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Heading as="h3" size="xl" textAlign="center" my="40px">
        Shop our Hydrating Hand Sanitizers
      </Heading>
      <div className={styles.carouselContainer}>
        <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleNavigate(product.id)}
              className={styles.carouselButton}
            >
              <Card product={product} />
            </button>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductGrid;
