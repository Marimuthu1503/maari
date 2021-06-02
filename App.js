import React from 'react';
import './App.css';
import { userValidation } from './Validation';

function App(){
  const createUser=async(event)=>{
    event.preventDefault()
    let formData={
      name:event.target[0].value,
      email:event.target[1].value,
      Country:event.target[2].value,
      MobileNumber:event.target[3].value,
      Dob:event.target[4].value,
      Gender:event.target[5].value,
      Checked:event.target[6].value
    }
    console.log(formData)
    const isValid =await userValidation.isValid(formData)
    console.log(isValid)
  }
  return(
    
    <div className='container'>
      <form className='form' onSubmit={createUser}>
        <input type='text' placeholder='Full Name' required />
        <input type='text' placeholder='Enter The Mail' required />
        <select type='select'>
            <option value="India" active>India</option>
            <option value="America">America</option>
            <option value="Russia">Russia</option>
            <option value="UK">UK</option>
          </select>
          <input type='text' placeholder='Mobile Number' required/>
          <label className='label'>Date of Birth</label>
          <input type='date' required className='date'/>
          <select type='select'>
          <option value="">------Select Gender------</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select> 
          <div>
          <input type="checkbox" style={{height:'12px'}} name="vehicle1" value="Checked" required/>
          <label style={{color:'green'}}> Have a referral code?</label>
          </div>
        <button type='submit' className='submit'>Submit</button>
        
      </form>
    </div>
  )
}
export default App;
