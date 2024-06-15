import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="signup-container">
        <div className='questions'>
            <h4>By answering This Questions you can Login into Your Account</h4>
            <label htmlFor="q1">Q1: Enter your Favorite Fruit with Friend Name : </label>
            <input type="text" id='q1' name='fruit' onChange={()=>{}} required  />
        </div>
        </div>
    )
}

export default ForgotPassword
