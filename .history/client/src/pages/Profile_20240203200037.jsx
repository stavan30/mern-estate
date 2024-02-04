import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col'>
        <img src={currentUser.avatar} alt='avatar' className='rounded-full h-24 w-24 object-cover self-center cursor-pointer mt-2'/>
        <input type='text' placeholder='username' className='border p-3 rounded-lg'/>
      </form>
    </div>
  )
}
