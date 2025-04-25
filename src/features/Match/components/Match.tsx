import { useNavigate, useParams } from "react-router-dom"
import ModalLoader from "../../../side components/ModalLoader/ModalLoader"
import { useGetMatchQuery } from "../matchApi"
import styles from "./MatchStyle.module.css"

const Match = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading } = useGetMatchQuery(id || "")
    const navigate = useNavigate()

    const setTeamFunction = (team_id: number) => {
        navigate(`/players/${team_id}`)
    }

    if (isLoading) return <ModalLoader />

    const [team1, team2] = data?.response || []

    return (
        <div className={styles.tableContainer}>
            <table className={styles.combinedTable}>
                <thead>
                    <tr>
                        <th className={styles.statType}>Statistic</th>
                        <th className={styles.teamHeader} onClick={() => team1 && setTeamFunction(team1.team.id)}>
                            {team1 && (
                                <>
                                    <img src={team1.team.logo} alt={team1.team.name} className={styles.teamLogo} />
                                    <span className={styles.teamName}>{team1.team.name}</span>
                                </>
                            )}
                        </th>
                        <th className={styles.teamHeader} onClick={() => team2 && setTeamFunction(team2.team.id)}>
                            {team2 && (
                                <>
                                    <img src={team2.team.logo} alt={team2.team.name} className={styles.teamLogo} />
                                    <span className={styles.teamName}>{team2.team.name}</span>
                                </>
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {team1?.statistics.map((stat, idx) => {
                        const team2Stat = team2?.statistics[idx]
                        return (
                            <tr key={idx}>
                                <td className={styles.statType}>{stat.type}</td>
                                <td className={styles.statValue}>{stat.value}</td>
                                <td className={styles.statValue}>{team2Stat?.value || '0'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Match