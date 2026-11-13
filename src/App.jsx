import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { Page } from './page/Page'
import { Nav } from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/landing-page' element={<Page/>} />
      </Routes>
    </>
  )
}

export default App
