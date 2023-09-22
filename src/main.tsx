import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/aboutme/index.tsx'
import Projects from './pages/projects/index.tsx'
import Contacts from './pages/contact/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/aboutme',
    element: <AboutMe />
  },
  {
    path: '/contact',
    element: <Contacts />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
