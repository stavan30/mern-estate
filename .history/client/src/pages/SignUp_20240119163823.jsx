import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //fetch function to get api endpoint and pass on an object with POST, and the data we are sending is in JSON, and body which converts the JSON object to string.
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData) //used to send data 
    });
    const data = await res.json(); //recieveing data and storing it in const data using await async opperation.
    console.log(data);
  }
  console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
        className='border p-3 rounded-lg' id='username' onChange={handleChange}/>

        <input type="text" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign Up
        </button>        
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account? </p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
 