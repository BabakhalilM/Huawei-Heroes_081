// import React, { useEffect, useState } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import axios from "axios";
// import Card from "./Card_p";
// import { Heading } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const ProductGrid1 = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("https://huawei-heroes-081-5.onrender.com/Cards")
//       .then(res => {
//         setProducts(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const chunks = [];
//   for (let i = 0; i < products.length; i += 4) {
//     chunks.push(products.slice(i, i + 4));
//   }

//   const handleNavigate = (productId) => {
//     navigate(`/Detail/${productId}`);
//   };

//   return (
//     <>
//       <Heading as="h3" size="xl" textAlign="center" my="40px">
//       Keep Your Skin Healthy On The Move!
//       </Heading>
//       <Carousel showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={false} swipeable={true}>
//         {chunks.map((chunk, index) => (
//           <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
//             {chunk.map((product) => (
//               <button
//                 key={product.id}
//                 onClick={() => handleNavigate(product.id)}
//                 style={{ flex: 1, margin: '0 10px', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
//               >
//                 <Card product={product} />
//               </button>
//             ))}
//           </div>
//         ))}
//       </Carousel>
//     </>
//   );
// };

// export default ProductGrid1;

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
