
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./userpanel.css";
import { Authcontext } from '../context/loginauth';
import { Children, createContext, useContext, useEffect, useState } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

export const amountcontext=createContext();

export const Amountprovider=({children})=>{
  const [payamount,setPayAmount]=useState(0);
  return(
    <amountcontext.Provider value={{payamount,setPayAmount}} >
      {children}
    </amountcontext.Provider>
  )
}

const Cartshow = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {setPayAmount}=useContext(amountcontext);
  const [totalcost, setTotalcost] = useState(0);
  const { deleteFromCart, data, setData, useremail } = useContext(Authcontext);
  const navigate = useNavigate();
  const navi=useNavigate();
  useEffect(() => {
    if (!useremail) {
      navigate('/LoginForm');  
    } else {
      fetchCards();
    }
  }, [useremail]);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc, card) => acc + (card.price * card.price4 || 0), 0);
    setTotalcost(total.toFixed(2));
  };

  const fetchCards = async () => {
    try {
      const response = await axios.get(`https://huawei-heroes-081-5.onrender.com/data?email=${useremail}`);
      console.log("API response:", response.data);
    
      if (response.data[0] && response.data[0].cart) {
        const fetchedCards = response.data[0].cart.map((card) => ({
          ...card,
          price: parseFloat(card.price.replace(',', '.')),
          price4: parseFloat(card.price4.replace('/', '1')) || 1,
        }
        ));

        setData(fetchedCards);
        console.log(data);
        calculateTotalPrice(fetchedCards);
      } else {
        setData([]);
        setTotalcost(0);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cards:', error);
      setError('Failed to fetch cards');
      setLoading(false);
    }
  };

  const handleDeleteFromCart = async (productId) => {
    try {
      await deleteFromCart(useremail, productId);
      const updatedData = data.filter(card => card.id !== productId);
      setData(updatedData);
      calculateTotalPrice(updatedData);
      alert('Product removed from cart successfully!');
    } catch (error) {
      console.error('Error removing product from cart:', error);
      alert('Failed to remove product from cart');
    }
  };

  const handleIncrementPrice4 = async (productId) => {
    const updatedData = data.map(card => {
      if (card.id === productId) {
        return {
          ...card,
          price4: (card.price4 + 1)
        };
      }
      return card;
    });
    setData(updatedData);
    calculateTotalPrice(updatedData);
    await updatePrice4OnServer(productId, updatedData.find(card => card.id === productId).price4);
  };

  const handleDecrementPrice4 = async (productId) => {
    const updatedData = data.map(card => {
      if (card.id === productId && card.price4 > 1) {
        return {
          ...card,
          price4: (card.price4 - 1)
        };
      }
      return card;
    });
    setData(updatedData);
    calculateTotalPrice(updatedData);
    await updatePrice4OnServer(productId, updatedData.find(card => card.id === productId).price4);
  };

  const updatePrice4OnServer = async (productId, price4) => {
    try {
      let updatedPrice4;
    if (price4 === '/') {
      updatedPrice4 = ''; 
    } else {
      updatedPrice4 = price4.toString(); 
    }
      await axios.put(`https://huawei-heroes-081-5.onrender.com/updatePrice4`, {
        email: useremail,
        productId,
        updatedPrice4
      });
    } catch (error) {
      console.error('Error updating price4:', error);
      // alert('Failed to update price4');
    }
  };
  

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (data.length === 0) return <div className="empty-cart">Your cart is empty</div>;
  const handleBuy=(payprice)=>{
    setPayAmount(payprice);
    navi('./Qrcode');
  }
  return (
    <div className="admin-container">
      <Flex>      
      <Box w="20%" boxShadow='xs'textAlign='center' justifyContent='space-evenly' ><Text fontSize={25}>Product Count in Cart: {data.length}</Text></Box>
      <Box w="20%" boxShadow='xs'textAlign='center' justifyContent='space-evenly' ><Text fontSize={25}>Total Cart Value: {totalcost}</Text></Box>
      </Flex>

      <div className="card-list">
        {data.map(card => (
          <div className="card-item" key={card.id}>
            <img src={card.image} alt={card.name} />
            <div className="card-details">
              <h4>{card.name}</h4>
              <span>{card.badge}</span>
              <p>&#8377; {card.price}</p>
              <div className="price4-controls">
                <button style={{width:"20%"}} onClick={() => handleDecrementPrice4(card.id)}>-</button>
                <span style={{margin:"0px 20px"}}> {card.price4}</span>
                <button style={{width:"20%"}} onClick={() => handleIncrementPrice4(card.id)}>+</button>
              </div>
            </div>
            <div className="card-buttons">
              <button className="delete-button" onClick={() => handleDeleteFromCart(card.id)}>Delete</button>
              
              <button style={{background:"green"}} onClick={()=>handleBuy(card.price)} >Buy Now </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Cartshow;
