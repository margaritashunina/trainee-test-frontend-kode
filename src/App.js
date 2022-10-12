import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import List from './components/List'
import Profile from './components/Profile'

export const PeopleContext = React.createContext()

export default function App() {
    const [people, setPeople] = useState({
        status: "loading",
        data: [],
        retry: false
    })

    useEffect(() => {
        const options = {
            headers: { "Content-Type": "application/json" }
        };
        axios.get(
            "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true",
            options
        )
        .then((response) => {
            if (response.status === 200) {
                setPeople(prev => ({
                    ...prev,
                    status: "ok",
                    data: response.data.items
                }))
            }
            else {
                setPeople(prev => ({
                    ...prev,
                    status: "error"
                }))
            }
        })
        .catch((err) => {
            setPeople(prev => ({
                ...prev,
                status: "error"
            }))
        });
    }, [people.retry])

    function toggleRetry() {
        setPeople(prev => ({
            ...prev,
            status: "loading",
            retry: !prev.retry
        }))
    }

    return (
        <PeopleContext.Provider value={{
            state: people,
            retry: toggleRetry
        }}>
            <Routes>
                <Route path="/" element={<List />}/>
                <Route path="/:id" element={<Profile />}/>
            </Routes>
        </PeopleContext.Provider>
    )
}