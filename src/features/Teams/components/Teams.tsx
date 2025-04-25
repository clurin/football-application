import style from './TeamsStyle.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetTeamsQuery } from '../teamsApi'
import ModalLoader from '../../../side components/ModalLoader/ModalLoader'

type Props = {}

const Teams = (props: Props) => {
    const navigate = useNavigate()

    const { league_id } = useParams<{ league_id: string }>();
    const { data, isLoading } = useGetTeamsQuery(Number(league_id) || 0);

    const setTeamFunction = (team_id: number) => {
        navigate(`/players/${team_id}`)
    }

    if (isLoading) {
        return (
            <ModalLoader />
        )
    }
    return (
        <div className={style.mainContainer}>
            <h1>Football Teams</h1>
            <div className={style.box}>
                {data?.response.map(item => (
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
        </div>
    )
}

export default Teams
