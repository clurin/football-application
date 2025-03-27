import React, { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import style from './LeaguesStyle.module.css'
import { useGetLeaguesQuery } from '../leaguesApi'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { countrySelector } from '../../Countries/setCountrySlice'
import { useNavigate } from 'react-router-dom'
import { setLeague } from '../setLeagueSlice'

type Props = {}

const Leagues = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const country: string = useAppSelector(countrySelector)
    const { data, isLoading } = useGetLeaguesQuery(country) //! country взять из url, а не из State

    const [currentPage, setCurrentPage] = useState(1)
    const leaguesPerPage = 12
    const totalLeagues = data?.response || []
    const totalPages = Math.ceil(totalLeagues.length / leaguesPerPage)
    const currentLeagues = totalLeagues.slice((currentPage - 1) * leaguesPerPage, currentPage * leaguesPerPage)

    const setLeagueFunction = (id: number) => {
        dispatch(setLeague(id))
        navigate('/teams')
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    if (isLoading) {

    }
    return (
        <div className={style.mainContainer}>
            <h1>Football Leagues</h1>
            <div className={style.box}>
                {currentLeagues.map(item => (
                    <div onClick={() => setLeagueFunction(item.league.id)}
                        className={style.container}
                        key={item.league.id}>
                        <img
                            src={item.league.logo}
                            alt={item.league.name}

                        />
                        <h2>{item.league.name}</h2>
                    </div>
                ))}
            </div>

            <div className={style.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <p>Page {currentPage} of {totalPages}</p>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Leagues
