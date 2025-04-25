import React from 'react'
import { useGetFixturesQuery } from '../fixturesApi'
import ModalLoader from '../../../side components/ModalLoader/ModalLoader'
import styles from './FixturesStyle.module.css'
import { useNavigate } from 'react-router-dom'


type Props = {}

const Fixtures = (props: Props) => {
    const { data, isLoading } = useGetFixturesQuery('')
    const navigate = useNavigate()


    if (isLoading) {
        return <ModalLoader />
    }

    return (
        <>
            <h1 className={styles.leagueTitle}>PREMIER LEAGUE</h1>
            <div className={styles.fixturesContainer}>
                {data?.response?.slice(0, 15).map(item => {
                    const { fixture, teams, goals } = item
                    const date = new Date(fixture.date).toLocaleString()
                    const stats = [
                        ['FOR', 100, 60],
                        ['ATT', 83, 83],
                        ['DEF', 100, 30]
                    ] as [string, number, number][]

                    return (
                        <div
                            className={styles.fixtureCard}
                            key={fixture.id}
                            onClick={() => navigate(`/match/${fixture.id}`)}>
                            <div className={styles.header}>
                                <div className={styles.date}>{date}</div>
                            </div>

                            <div className={styles.main}>
                                <div className={styles.teamHome}>
                                    <img src={teams.home.logo} alt={teams.home.name} className={styles.logo} />
                                    <p className={styles.teamName}>{teams.home.name}</p>
                                </div>

                                <div className={styles.score}>
                                    {goals.home} – {goals.away}
                                </div>

                                <div className={styles.teamAway}>
                                    <span className={styles.teamName}>{teams.away.name}</span>
                                    <img src={teams.away.logo} alt={teams.away.name} className={styles.logo} />
                                </div>
                            </div>

                            <div className={styles.stats}>
                                {stats.map(([label, h, a]) => (
                                    <div className={styles.statRow} key={label}>
                                        <span className={styles.statLabel}>{label}</span>
                                        <div className={styles.barWrapper}>
                                            <div className={styles.homeBar} style={{ width: `${h}%` }} />
                                            <div className={styles.awayBar} style={{ width: `${a}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default Fixtures
