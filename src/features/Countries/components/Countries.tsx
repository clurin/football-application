import React, { useState } from 'react'
import { useGetCountriesQuery } from '../countriesApi'
import { CircleLoader } from 'react-spinners'
import style from './CountriesStyle.module.css'

type Props = {}

const Countries = (props: Props) => {
    const { data, isLoading } = useGetCountriesQuery(null)
    const [currentPage, setCurrentPage] = useState(1)
    const countriesPerPage = 12
    const totalCountries = data?.response || []
    const totalPages = Math.ceil(totalCountries.length / countriesPerPage)
    const currentCountries = totalCountries.slice((currentPage - 1) * countriesPerPage, currentPage * countriesPerPage)


    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    console.log(currentCountries)

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
            <h1>Countries</h1>
            <div className={style.countriesCountainer}>
                {currentCountries?.map((item) => (
                    <div className={style.container} key={item.code}>
                        <img src={item.flag} alt={item.name} />
                        <h2>{item.name}</h2>
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

export default Countries