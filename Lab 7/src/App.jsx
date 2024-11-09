import './App.css'
import GoodsPage from './pages/GoodsPage'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/goods' element={<GoodsPage />} />
      </Routes>
    </div>
  )
}

export default App
