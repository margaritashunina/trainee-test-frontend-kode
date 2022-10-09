import { useState, useContext } from "react"
import { PeopleContext } from "../App"

import Person from "./Person"
import Searchbar from "./Searchbar"
import Tabs from "./Tabs"

export default function List() {
    const people = useContext(PeopleContext)
    const [listFilter, setListFilter] = useState({
        department: "all",
        search: ""
    })

    function handleSearch(event) {
        setListFilter(prevFilter => ({
            ...prevFilter,
            search: event.target.value
        }))
    }

    function handleDepartments(event) {
        setListFilter(prevFilter => ({
            ...prevFilter,
            department: event.target.id
        }))
    }

    const peopleDisplayed = people.data
        .filter(person => (
            listFilter.department === "all" ||
            person.department === listFilter.department
        ))
        .filter(person => (
            person.firstName.toLowerCase().includes(listFilter.search) ||
            person.lastName.toLowerCase().includes(listFilter.search)
        ))
        .map(person => (
            <Person key={person.id} {...person}/>
        ))
    
    return (
        <div>
            <Searchbar 
                value={listFilter.search}
                change={handleSearch}
            />
            <Tabs 
                change={handleDepartments}
            />
            {people.status === "ok" ? peopleDisplayed :
            people.status === "loading"? <h2>Loading people...</h2> :
            <h2>Something went wrong...</h2>}
        </div>
    )
}