import {Route , Routes} from "react-router-dom"
import './App.css'
import AboutMe from "./View/about me/aboutMe"
import Header from './Components/Header/Header'
import Home from "./View/home-section/Home-section"
import Services from "./View/Services/Services"
import ContactMe from './View/contact-me/Contact-me'
import Footer from "./Components/Header/Footer/Footer"

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
    path:'/AboutMe',
    element:<AboutMe/>
  },

  {
    path:'/Services',
    element:<Services/>
  },
  {
    path:'/ContactMe',
    element:<ContactMe/>
  }
]
 

  return (
    <main className="main-app-container">
    <Header/>
    <div className="routes-conatiner">
    <Routes>
      {
        routesArr.map((route , index)=> <Route path={route.path} element={route.element} key={index}/>)
      }
      </Routes>
      </div>
    <Footer/>
    </main>
  )
}

export default App
