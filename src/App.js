import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import List from './components/List'
import Profile from './components/Profile'

import data from "./people.json"
export const PeopleContext = React.createContext()

export default function App() {
    const [people, setPeople] = useState({
        status: "loading",
        data: []
    })

    useEffect(() => {
        setTimeout(() => {
            setPeople({
                status: "ok",
                data: data
            })
        }, 1000)
    }, [])

    return (
        <PeopleContext.Provider value={people}>
            <Routes>
                <Route path="/" element={<List />}/>
                <Route path="/:id" element={<Profile />}/>
            </Routes>
        </PeopleContext.Provider>
    )
}