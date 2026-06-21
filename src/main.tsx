import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ContentPage from './components/ContentPage.tsx'
import HomePage from './pages/HomePage.tsx'
import KontaktPage from './pages/KontaktPage.tsx'
import SubPage from './pages/SubPage.tsx'
import UeberMichPage from './pages/UeberMichPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'journalistin', element: <ContentPage /> },
      { path: 'gastrokolumnistin', element: <ContentPage /> },
      { path: 'pr-redaktion', element: <ContentPage /> },
      { path: 'autorin', element: <ContentPage /> },
      { path: 'genussexpertin', element: <ContentPage /> },
      { path: 'mehr-als-text', element: <ContentPage /> },
      { path: 'ueber-mich', element: <UeberMichPage /> },
      { path: 'kontakt', element: <KontaktPage /> },
      { path: 'impressum-datenschutz', element: <SubPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
