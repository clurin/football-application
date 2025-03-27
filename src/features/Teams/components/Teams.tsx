import React, { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import style from './TeamsStyle.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { useNavigate } from 'react-router-dom'
import { useGetTeamsQuery } from '../teamsApi'
import { leagueSelector } from '../../Leagues/setLeagueSlice'
import { setTeam } from '../setTeamSlice'

type Props = {}

const Teams = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const id: number = useAppSelector(leagueSelector)
    const { data, isLoading } = useGetTeamsQuery(id)

    const [currentPage, setCurrentPage] = useState(1)
    const TeamsPerPage = 12
    const totalTeams = data?.response || []
    const totalPages = Math.ceil(totalTeams.length / TeamsPerPage)
    const currentTeams = totalTeams.slice((currentPage - 1) * TeamsPerPage, currentPage * TeamsPerPage)

    const setTeamFunction = (team: number) => {
        dispatch(setTeam(team))
        navigate('/players')
    }

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
            <h1>Football Teams</h1>
            <div className={style.box}>
                {currentTeams.map(item => (
                    <div className={style.container}
                        key={item.team.id}
                        onClick={() => setTeamFunction(item.team.id)}
                    >
                        <img
                            src={item.team.logo}
                            alt={item.team.name}
                        />
                        <h2>{item.team.name}</h2>
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

export default Teams
