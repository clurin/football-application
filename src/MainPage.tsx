import React from 'react'
import FixturesPage from './features/Fixtures/FixturesPage'
import style from './MainPageStyle.module.css'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div className={style.container}>
            <div className={style.preview}>
                <img alt='Premier League'
                    src='https://wallpaperswide.com/download/premier_league_wallpapers-wallpaper-1280x720.jpg' />
            </div>
            <FixturesPage />
        </div>
    )
}

export default MainPage