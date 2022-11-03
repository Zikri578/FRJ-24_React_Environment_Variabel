import React, { useEffect, useState } from 'react'

export default function Home() {

    // state
    // const

    // component life cycle
    useEffect(() => {
        console.info(import.meta.env.VITE_SECRETKEY)
    }, [])

    return (
        <div>
            <h1>Halaman Home</h1>
        </div>
    )
}
