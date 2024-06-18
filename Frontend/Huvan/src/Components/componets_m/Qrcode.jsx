import React, { useContext, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { amountcontext } from '../userpanel/Cartshow';
import './Qrcode.module.css';
import { Center } from '@chakra-ui/react';

const BuyNow = () => {
  const { payAmount } = useContext(amountcontext);
  const fixedUpiId = '8951359265@ibl';
  useEffect(() => {
    if (payAmount) {
      const paymentLink = `upi://pay?pa=${fixedUpiId}&pn=MerchantName&am=${payAmount}&cu=INR`;

    } else {
      alert('Please wait generating Qrcode.');
    }
  }, []);

  return (

      <div style={{margin:"50px 40% "}} className='qrcode'>
        <h2 style={{textAlign:"center"}}> Pay and confirm your order</h2>
        <QRCode value={payAmount} size={266} />

        <h2 style={{textAlign:"center"}}>Scan to Pay</h2>
      </div>

  );
};

export default BuyNow;

// import React, { useContext, useEffect, useState } from 'react';
// import QRCode from 'qrcode.react';
// import { amountcontext } from '../userpanel/Cartshow';
// import './qrcode.css';

// const BuyNow = () => {
//   const { payAmount } = useContext(amountcontext);
//   const fixedUpiId = '8951359265@ibl';
//   const [paymentLink, setPaymentLink] = useState('');

//   useEffect(() => {
//     if (payAmount) {
//       console.log('Generating payment link');
//       const link = `upi://pay?pa=${fixedUpiId}&pn=MerchantName&am=${payAmount}&cu=INR`;
//       setPaymentLink(link);
//       console.log(link);
//     }
//   }, []);

//   return (
//     <div>
//       <div className='qrcode'>
//         {paymentLink ? (
//           <>
//             <QRCode value={paymentLink} size={266} />
//             <h2>Scan to Pay</h2>
//           </>
//         ) : (
//           <p>Generating QR Code....</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyNow;
