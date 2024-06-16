// Image3.js
import React from 'react';

const Image3 = () => {
  return (
    <div>
      <img 
        src='https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        style={{
          
          width: "100%",
          height: "85vh",
        }}
        alt="Water Project"/>
        <p
        style={{
            fontWeight:"bold",
            fontSize:"20px",
            marginTop:"40px",
            marginLeft:"280px",
        }}
        
        >We care about the people and the planet. That’s why our purpose revolves around the <br/>
        water crisis. Every time you purchase HAAN you are supporting this statement, as <br/> we donate part of 
        our profits to support clean water projects.</p>
        <img 
        src='https://images.unsplash.com/photo-1634113606829-643c45a311ee?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        style={{
          marginTop:"40px",
          width: "100%",
          height: "85vh",
        }}
        alt="Water Project"/>
       

    </div>
  );
}

export default Image3;
