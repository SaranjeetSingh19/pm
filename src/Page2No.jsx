import React from 'react'

import cryingGif from "./assets/page2No.gif"

const Page2No = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-yellow-100 flex flex-col items-center justify-center text-center p-6'>
        <img src={cryingGif} alt="" className='mix-blend-multiply w-60 h-60 -mt-20' />
        <h1 className="text-3xl  mt-8 font-bold text-center  dark:text-black bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg animate-pulse">
  Koi naa Dekh Lungaa 🤚
</h1>

    </div>
  )
}

export default Page2No