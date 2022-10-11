import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import List from './components/List'
import Profile from './components/Profile'

export const PeopleContext = React.createContext()

export default function App() {
    const [people, setPeople] = useState({
        status: "loading",
        data: []
    })

    useEffect(() => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          axios.get(
            "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
            options
          )
            .then((response) => {
                setPeople({
                    status: "ok",
                    data: response.data.items
                })
            })
            .catch((err) => {
                setPeople({
                    status: "error",
                    data: err
                })
            });
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