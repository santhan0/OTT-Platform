import React from 'react'
import { Link, useParams } from 'react-router-dom'

const UseParamsExample = () => {
    const { id } = useParams()

    return (
        <h1> Hello UseParamsExample {id}
            {/* <Link to={`/profile/${id}`}>
                Movie Poster
            </Link> */}
        </h1>
    )
}

export default UseParamsExample