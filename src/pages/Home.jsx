import React, { useState } from 'react'
import './../styles/home.css'

function Home() {

  

  return (
    <div className='home'>
      <div className="container">
        <h1 className='text-[64px] pt-[48px] text-black font-medium'>Welcome to QuizMaster!</h1>
        <p className='max-w-[700px] text-[18px] font-medium pt-[20px] pb-[20px]'>Test your knowledge across various categories like science, movies, history, and geography. Choose your favorite topics and challenge yourself with fun and exciting questions. Whether you're here to learn, compete, or just have fun, QuizMaster has something for everyone!

          Start your quiz journey now and see how much you really know!</p>
        <div className='pt-[30px]'>
          <button className='p-[20px] bg-black rounded-xl cursor-pointer text-white'><p className='text-2xl '>Start Game</p></button>
        </div>
      </div>
    </div>
  )
}

export default Home