import { Route, Routes } from 'react-router-dom'
import './App.css'
import TeamsPage from './features/Teams/TeamsPage'
import PlayersPage from './features/Players/PlayersPage'
import Menu from './side components/Menu/Menu'
import MainPage from './MainPage'
import MatchPage from './features/Match/MatchPage'
import PlayerStats from './features/Players/components/PlayerStats'

function App() {

    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/teams/:league_id' element={<TeamsPage />} />
                <Route path='/players/:team_id' element={<PlayersPage />} />
                <Route path='/match/:id' element={<MatchPage />} />
                <Route path='/player/stats/id/:player_id' element={<PlayerStats />} />
            </Routes>
        </div>
    )
}

export default App