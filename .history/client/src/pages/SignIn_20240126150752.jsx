import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFail } from '../redux/user/userSlice';
import {useDispatch, useSelector} from 'react-redux'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      //fetch function to get api endpoint and pass on an object with POST, and the data we are sending is in JSON, and body which converts the JSON object to string.
      const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData) //used to send data 
      });
      const data = await res.json(); //recieveing data and storing it in const data using await async opperation.
      console.log(data);
      if(data.success === false) {
      dispatch(signInFail(data.message))
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');

    } catch (error) {
      dispatch(signInFail(error.message));
    }
    
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>        
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account? </p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5' >{error}</p>}
    </div>
  )
}
 