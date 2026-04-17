import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import ServicesPage from './Pages/ServicesPage'
import SolutionsPage from './Pages/Solutions'
import AboutUsPage from './Pages/About'
import ContactPage from './Pages/ContactPage'
import PrivacyPolicy from './Pages/Privacy'
import TermsOfService from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/services",
          element:<ServicesPage/>
        },
        {
          path:"/solutions",
          element:<SolutionsPage/>
        },
        {
          path:"/about",
          element:<AboutUsPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-of-service",
          element:<TermsOfService/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App