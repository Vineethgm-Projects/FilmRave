import React from 'react'
import './Form.css'
import Star from '../MyReview/Star'
const Form = () => {
    const handleClickS=()=>{
        alert("Review Submitted")
    }
  return (
    <div className='bgcolor'>
    <div >
    <label className='a'>Movie Name :</label><br></br>
    <input type="text" placeholder="Enter Name" className='a'></input>
    </div>
    <br></br>
    <div>
    <label className='a'>Email :</label><br></br>
    <input className='a' type="text" placeholder="Enter Email"></input>
    </div>
    <br></br>
    <div>
    <label className='a'>Your Review :</label><br></br>
    <textarea className='a'></textarea>
    </div>
    <br></br>
    <div >
    <p className='a'>Your Rating :</p>
    <Star/>
    <br></br>
    <button className='a' onClick={handleClickS}>
  Submit
</button><br></br>
    </div>
    </div>
    
  )
}

export default Form;