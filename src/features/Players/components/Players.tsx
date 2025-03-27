import React, { useState } from 'react'
import { useAppSelector } from '../../../app/store'
import { teamSelector } from '../../Teams/setTeamSlice'
import { CircleLoader } from 'react-spinners'
import style from './PlayersStyle.module.css'
import { useGetPlayersQuery } from '../playersApi'

type Props = {}

const Players = (props: Props) => {

    const team: number = useAppSelector(teamSelector)
    const { data, isLoading } = useGetPlayersQuery(team, { skip: team === -1 })

    const [currentPage, setCurrentPage] = useState(1)
    const playersPerPage = 12
    const totalPlayers = data?.response?.[0].players || []
    const totalPages = Math.ceil(totalPlayers.length / playersPerPage)
    const currentPlayers = totalPlayers.slice((currentPage - 1) * playersPerPage, currentPage * playersPerPage)
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
    console.log(currentPlayers)
    return (
        <div className={style.mainContainer}>
            <div className={style.box}>
                {currentPlayers.map(item => (
                    <div className={style.container} key={item.id}>
                        <img src={item.photo} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Age: {item.age}</p>
                        <p>Number: {item.number || "N/A"}</p>
                        <p>Position: {item.position}</p>
                    </div>
                ))}

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
        </div>
    )
}

export default Players