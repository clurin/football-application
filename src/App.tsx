import { Route, Routes } from 'react-router-dom'
import './App.css'
import LeaguesPage from './features/Leagues/LeaguesPage'
import CountriesPage from './features/Countries/CountriesPage'
import TeamsPage from './features/Teams/TeamsPage'
import PlayersPage from './features/Players/PlayersPage'
import Loader from './side components/Loader/ModalLoader'
import { useAppSelector } from './app/store'
import { modalLoaderSelector } from './side components/Loader/ModalLoaderSlice'

function App() {

    const isLoading: boolean = useAppSelector(modalLoaderSelector)

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<CountriesPage />} />
                <Route path='/leagues' element={<LeaguesPage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/players' element={<PlayersPage />} />
            </Routes>
            {isLoading && <Loader />}
        </div>
    )
}

export default App