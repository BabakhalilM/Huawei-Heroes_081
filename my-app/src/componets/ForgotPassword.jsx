import React from 'react'

const ForgotPassword = () => {
    return (

        <div className='questions'>
            <h6>when you forgot password you can login by answering this Questions</h6>
            <label htmlFor="q1">Q1: Enter your Favorite Fruit with Friend Name : </label>
            <input type="text" id='q1' name='fruit' onChange={()=>{}} required  />
        </div>
    )
}

export default ForgotPassword
