import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Register from './Pages/Register'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Footer from './Components/Footer'
import Posters from './Pages/Posters'
import SinglePost from './Pages/SinglePost'

const Dashboard = () =>{
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/posters',
        element:<Posters />,
      }
    ]
  },
  {
    path:'/poster/:id',
    element:<SinglePost />
  },
  {
    path:'/register',
    element:<Register />,
  },
  {
    path:'*',
    element: <ErrorPage />
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
