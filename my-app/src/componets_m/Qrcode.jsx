import React, { useContext, useEffect} from 'react';
import QRCode from 'qrcode.react';
import { amountcontext } from '../userpanel/Cartshow';

const BuyNow = () => {
    const {payAmount}=useContext(amountcontext);
  const fixedUpiId = '8951359265@ibl'; 
useEffect(()=>{
    if (amount) {
        const paymentLink = `upi://pay?pa=${fixedUpiId}&pn=MerchantName&am=${payAmount}&cu=INR`;
        
      } else {
        alert('Please enter an amount.');
      }
},[]);

  return (
    <div>
      <div>
        {(
          <div>
            <h3>Scan to Pay</h3>
            <QRCode value={qrValue} size={256} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
