import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import Card from "./Card";
import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductGrid1 = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://huawei-heroes-081-5.onrender.com/Cards")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const chunks = [];
  for (let i = 0; i < products.length; i += 4) {
    chunks.push(products.slice(i, i + 4));
  }

  const handleNavigate = (productId) => {
    navigate(`/Detail/${productId}`);
  };

  return (
    <>
      <Heading as="h3" size="xl" textAlign="center" my="40px">
      Keep Your Skin Healthy On The Move!
      </Heading>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={false} swipeable={true}>
        {chunks.map((chunk, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {chunk.map((product) => (
              <button
                key={product.id}
                onClick={() => handleNavigate(product.id)}
                style={{ flex: 1, margin: '0 10px', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <Card product={product} />
              </button>
            ))}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductGrid1;
