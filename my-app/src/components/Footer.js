import React from 'react';

const Footer = () => {
  return (
    <>
     <div 
    style={{
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        marginTop:"40px",
    }}>
      <p
      style={{
        fontFamily:"Royal Acidbath",
        fontWeight:"bold",
        fontSize:"30px",
        marginTop:"30px",
      }}
      
      >VANITY FAIR</p>
      <p
       style={{
        fontFamily:"lütschine",
        fontWeight:"500",
        fontSize:"60px",
        height:"200px"

      }}
      >ICON ELLE </p>
      <p
       style={{
        fontFamily:"Gotham",
        fontWeight:"bold",
        fontSize:"60px",
        height:"200px"

      }}
      >GQ</p>
      <p
       style={{
        fontFamily:"lütschine",
        fontWeight:"700",
        fontSize:"30px",
        marginTop:"30px",

      }}
      >VOGUE L'OFFICIAL</p>
    </div>
    <p
    style={{
        fontFamily:"serif",
        position:"relative",
        left:"500px",
        marginTop:"-80px",
    }}
    >Never have hand sanitizers been so necessary in our lives. If they can
       be sustainable,</p>
       <p
        style={{
        fontFamily:"serif",
        position:"relative",
        left:"640px",
        marginTop:"-1px",
    }}
       
       >beautiful and handy like HAAN Pockets  are, </p> 
       <p
        style={{
        fontFamily:"serif",
        position:"relative",
        left:"710px",
        marginTop:"-1px",
    }}
       >it’s just a
       lovely plus.”
</p>
    </>
   
  );
}

export default Footer;
