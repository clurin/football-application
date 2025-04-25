import React from 'react'
import { useGetPlayerStatsQuery } from '../playersApi'
import ModalLoader from '../../../side components/ModalLoader/ModalLoader'
import { useParams } from 'react-router-dom'
import style from './PlayerStatsStyle.module.css'

const PlayerStats = () => {
    const { player_id } = useParams<{ player_id: string }>()
    const { data, isLoading } = useGetPlayerStatsQuery(Number(player_id))

    const playerData = data?.response[0]
    const player = playerData?.player
    const stats = playerData?.statistics[0]

    if (isLoading) return <ModalLoader />

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <img src={player?.photo} alt={player?.name} className={style.avatar} />
                <div className={style.playerInfo}>
                    <div>
                        <p>Name:{player?.name}</p>
                        <p>Age: {player?.age}</p>
                        <p>Birth: {player?.birth.date} ({player?.birth.place}, {player?.birth.country})</p>
                        <p>Nationality: {player?.nationality}</p>
                        <p>Height: {player?.height}</p>
                        <p>Weight: {player?.weight}</p>
                        <p>Injured: {player?.injured ? 'Yes' : 'No'}</p>
                    </div>
                </div>

                <table className={style.statsTable}>
                    <tbody>
                        <tr>
                            <td>Appearances</td>
                            <td>{stats?.games.appearences}</td>
                        </tr>
                        <tr>
                            <td>Lineups</td>
                            <td>{stats?.games.lineups}</td>
                        </tr>
                        <tr>
                            <td>Minutes</td>
                            <td>{stats?.games.minutes}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>{stats?.games.position}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{parseFloat(stats?.games.rating || '0').toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Goals</td>
                            <td>{stats?.goals.total}</td>
                        </tr>
                        <tr>
                            <td>Assists</td>
                            <td>{stats?.goals.assists}</td>
                        </tr>
                        <tr>
                            <td>Shots (on target)</td>
                            <td>{stats?.shots.total} ({stats?.shots.on})</td>
                        </tr>
                        <tr>
                            <td>Passes (accuracy %)</td>
                            <td>{stats?.passes.total} ({stats?.passes.accuracy}%)</td>
                        </tr>
                        <tr>
                            <td>Dribbles (success)</td>
                            <td>{stats?.dribbles.attempts} ({stats?.dribbles.success})</td>
                        </tr>
                        <tr>
                            <td>Fouls (drawn/committed)</td>
                            <td>{stats?.fouls.drawn} / {stats?.fouls.committed}</td>
                        </tr>
                        <tr>
                            <td>Yellow / Red cards</td>
                            <td>{stats?.cards.yellow} / {stats?.cards.red}</td>
                        </tr>
                        <tr>
                            <td>Penalties (scored/missed)</td>
                            <td>{stats?.penalty.scored} / {stats?.penalty.missed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerStats
