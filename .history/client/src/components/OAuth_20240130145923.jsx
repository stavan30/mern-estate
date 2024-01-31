import React from 'react'

export default function OAuth() {
    const handleGoogleClick = () =>{
        try {
            
        } catch (error) {
            console.log("Couldn't log in with google", error);
        }
    }

  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue with google</button>
  )
}
