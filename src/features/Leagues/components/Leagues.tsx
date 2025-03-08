import React, { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import style from './LeaguesStyle.module.css'
import { useGetLeaguesQuery } from '../leaguesApi'

type Props = {}

const Leagues = (props: Props) => {
    const { data, isLoading } = useGetLeaguesQuery(null)
    const [currentPage, setCurrentPage] = useState(1)
    const leaguesPerPage = 12


    const totalLeagues = data?.response || []
    const totalPages = Math.ceil(totalLeagues.length / leaguesPerPage)
    const currentLeagues = totalLeagues.slice((currentPage - 1) * leaguesPerPage, currentPage * leaguesPerPage)

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    if (isLoading) {
        return (
            <div className={style.loader}>
                <CircleLoader size={100} color='#00ff40' />
                <p className={style.loadingText}>Loading...</p>
            </div>
        )
    }
    return (
        <div className={style.mainContainer}>
            <h1>Football Leagues</h1>
            <div className={style.leaguesContainer}>
                {currentLeagues.map(leagueItem => (
                    <div className={style.container} key={leagueItem.league.id}>
                        <img src={leagueItem.league.logo} alt={leagueItem.league.name} />
                        <h2>{leagueItem.league.name}</h2>
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
