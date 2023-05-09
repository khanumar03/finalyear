import React from 'react'
import Postskeleton from '../Components/Postskeleton'
import Modal from '../Components/Modal'

const Home = () => {
  return (
    <div className='flex justify-center items-center  w-full h-screen'>
        {/* <Postskeleton /> */}
        <div className='w-80 h-50 flex rounded-md'>
        <Modal email={"hello"} />
        </div>
    </div>
  )
}

export default Home