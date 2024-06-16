import React, { useContext, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { amountcontext } from '../userpanel/Cartshow';
import './qrcode.css';

const BuyNow = () => {
  const { payAmount } = useContext(amountcontext);
  const fixedUpiId = '8951359265@ibl';
  useEffect(() => {
    if (amount) {
      const paymentLink = `upi://pay?pa=${fixedUpiId}&pn=MerchantName&am=${payAmount}&cu=INR`;

    } else {
      alert('Please enter an amount.');
    }
  }, []);

  return (
    <div>

      <div  className='qrcode'>
        
        <QRCode value={qrValue} size={266} />

        <h2>Scan to Pay</h2>
      </div>

    </div>
  );
};

export default BuyNow;
