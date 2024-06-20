import React from 'react'

const Image = () => {
  return (
    <div style={{position: 'relative'}}>
      <img 
        style={{
          width:"100%",
          height:"70vh"  
        }}
        src='https://images.unsplash.com/photo-1497521848431-99f070739387?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Background'
      />
      <div style={{
        position: 'absolute', 
        top: '30%', 
        left: '20%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize:'30px', 
        padding: '10px',
        fontWeight:'bold',
        fontfamily: 'monospace',
      }}>
        Escape Ordinary.<br/>
        Embrace<br/>
        Extraordinary.<br/>
        
      </div>
    </div>
  )
}

export default Image;
