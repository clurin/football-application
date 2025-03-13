import { Route, Routes } from 'react-router-dom'
import './App.css'
import LeaguesPage from './features/Leagues/LeaguesPage'
import CountriesPage from './features/Countries/CountriesPage'
import Teams from './features/Teams/components/Teams'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CountriesPage />} />
        <Route path='/leagues' element={<LeaguesPage />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
    </div>
  )
}

export default App