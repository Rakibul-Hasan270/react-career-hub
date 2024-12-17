import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import AppliedJobDetails from './components/AppliedJobDetails/AppliedJobDetails.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:Id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/details/:id',
        element: <AppliedJobDetails></AppliedJobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <RouterProvider router={router}></RouterProvider>
  </createBrowserRouter>
)
