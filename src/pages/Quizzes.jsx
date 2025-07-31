import React from 'react'
import './../styles/quizzes.css'
import QuizGenre from '../components/QuizGenre'

import { Link } from 'react-router-dom'

import Eagle from './../../public/pexels-pixabay-53581.jpg'
import Food from './../../public/pexels-chanwalrus-958545.jpg'
import Game from './../../public/pexels-inspiredimages-139038.jpg'
import Geography from './../../public/pexels-nastyasensei-66707-335393.jpg'
import Mathematic from './../../public/pexels-pixabay-267582.jpg'
import Programming from './../../public/pexels-sabrina-gelbart-65954-249798.jpg'

const quizArrays = [
  { title: 'Food', des: "Discover delicious dishes, world cuisines, ingredients, and fun food facts from around the globe.", img: Food, id: 'food' },
  { title: 'Game', des: 'From classic arcade to modern video games—test your gaming knowledge and favorite titles.', img: Game, id: 'good' },
  { title: 'Mathematic', des: 'Challenge yourself with numbers, logic, geometry, algebra, and interesting math puzzles and facts.',  img: Mathematic ,id: 'mathematic' },
  { title: 'Geography', des: 'Explore world countries, capitals, flags, landmarks, and surprising geographic facts and locations.', img: Geography,id: 'geography' },
  { title: 'Programming', des: 'Test your knowledge of coding languages, logic, debugging, algorithms, and general programming trivia.', img: Programming,id: 'programming' },
  { title: 'Animals', des: 'Learn about wild and domestic animals, species, habitats, and fascinating animal world facts.', img: Eagle, id: 'animals' }
]

function Quizzes() {
  return (
    <div>
      <div className="container">
        <h1 className='text-black font-medium text-[48px] pt-[24px]'>Choose Your Genre To Quiz</h1>
        <div className='grid grid-cols-3 gap-5 w-full pt-[36px]'>
          {quizArrays.map((quiz) => (
            <Link to={`/quizzes/${quiz.id}`}>
              <QuizGenre title={quiz.title} des={quiz.des} img={quiz.img} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quizzes