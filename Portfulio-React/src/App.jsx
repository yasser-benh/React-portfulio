import {Route , Routes} from "react-router-dom"
import './App.css'
import AboutMe from "./Components/View/about me/aboutMe"
import Header from './Components/Header/Header'
import Home from "./Components/View/home-section/Home-section"
import Services from "./Components/View/Services/Services"

function App() {

  const routesArr =[{
    path:'/',
    element:<Home/>
  },
  {
    path:'/Home',
    element:<Home/>
  },
  
  {
    path:'/about-me',
    element:<AboutMe/>
  },

  {
    path:'/Services',
    element:<Services/>
  },
]
 

  return (
    <main>
    <Header/>
    <Routes>
      {
        routesArr.map((route , index)=> <Route path={route.path} element={route.element} key={index}/>)
      }
      </Routes>
     
    </main>
  )
}

export default App
