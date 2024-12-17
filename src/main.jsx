import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:Id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <RouterProvider router={router}></RouterProvider>
  </createBrowserRouter>
)
