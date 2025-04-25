import style from './PlayersStyle.module.css'
import { useGetPlayersQuery } from '../playersApi'
import { useNavigate, useParams } from 'react-router-dom'
import ModalLoader from '../../../side components/ModalLoader/ModalLoader'

type Props = {}

const Players = (props: Props) => {
    const { team_id } = useParams<{ team_id: string }>();
    const { data, isLoading } = useGetPlayersQuery(Number(team_id) || 0, { skip: !team_id });

    const navigate = useNavigate()

    const setTeamFunction = (team_id: number) => {
        navigate(`/player/stats/id/${team_id}`)
    }

    if (isLoading) {
        return <ModalLoader />
    }
    return (
        <>
            {data?.response?.[0].team.logo && (
                <div
                    className={style.backgroundLogo}
                    style={{ backgroundImage: `url(${data.response[0].team.logo})` }}
                />
            )}
            <div className={style.contentWrapper}>
                <h2 className={style.teamTitle}>
                    {data?.response[0].team.name}
                </h2>
                <div className={style.tableContainer}>
                    <table className={style.playersTable}>
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Number</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.response?.[0].players.map(player => (
                                <tr
                                    key={player.id}
                                    onClick={() => setTeamFunction(player.id)}
                                >
                                    <td>
                                        <img
                                            src={player.photo}
                                            alt={""}
                                            className={style.playerImage}
                                        />
                                    </td>
                                    <td>{player.name}</td>
                                    <td>{player.age}</td>
                                    <td>{player.number || "N/A"}</td>
                                    <td>{player.position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}

export default Players