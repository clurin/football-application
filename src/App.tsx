import { Route, Routes } from 'react-router-dom'
import './App.css'
import LeaguesPage from './features/Leagues/LeaguesPage'
import Countries from './features/Countries/components/Countries'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<LeaguesPage />} /> */}
        {/* <Route path='/' element={<Countries />} /> */}
      </Routes>
      <Countries />
      <LeaguesPage />
    </div>
  )
}

export default App