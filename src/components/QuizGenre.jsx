import React from 'react'


function QuizGenre({title, des, img}) {
  return (
    <div>
      <div className="quiz-genre bg-white h-[300px] w-full shadow-2xl rounded-[8px] p-[15px]">
        <h1 className='text-[18px] font-semibold pl-[25px] pb-[10px]'>{title}</h1>
        <div className="flex justify-center my-4">
          <img
            className="rounded-[10px] h-[200px]"
            src={img}
            alt="Eagle"
          />
        </div>
        <div>
          <p className='text-[14px] pt-[15px] text-center truncate'>{des}</p>
        </div>
      </div>
    </div>
  )
}

export default QuizGenre