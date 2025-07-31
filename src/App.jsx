import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Quizzes from "./pages/Quizzes"
import Question from "./components/Question"
import Layout from './components/Layout'

const router = createBrowserRouter([{path: '/', element: <Layout/>, 
  children: [
    {path: "", element: <Home/>},
    {path: "quizzes", element: <Quizzes/>},
    {path: "quizzes/:id", element: <Question/>}
]}])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </> 
  )
}

export default App

{/* <Navbar />
      {/* <Home/> */}
{/* <Quizzes /> */ }
{/* <Question/> */ }