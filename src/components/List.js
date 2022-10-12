import { useState, useContext } from "react"
import { PeopleContext } from "../App"

import Person from "./Person"
import Searchbar from "./Searchbar"
import Tabs from "./Tabs"
import Sort from "./Sort"
import ErrorMessage from "./ErrorMessage"

import './List.css'

export default function List() {
    const people = useContext(PeopleContext)
    const [listFilter, setListFilter] = useState({
        department: "all",
        search: "",
        sortFunctionName: "base",
        sortFunction: (array) => array,
        showSort: false
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

    function handleSort(fName, fun) {
        setListFilter(prevFilter => ({
            ...prevFilter,
            sortFunctionName: fName,
            sortFunction: fun
        }))
    }

    function toggleShowSort() {
        setListFilter(prevFilter => ({
            ...prevFilter,
            showSort: !prevFilter.showSort
        }))
    }

    let peopleDisplayed = people.state.data
        .filter(person => (
            listFilter.department === "all" ||
            person.department === listFilter.department
        ))
        .filter(person => (
            person.firstName.toLowerCase().includes(listFilter.search) ||
            person.lastName.toLowerCase().includes(listFilter.search)
        ))
    
    peopleDisplayed = listFilter.sortFunction(peopleDisplayed)
        .map(person => (
            <Person 
                showAge={listFilter.sortFunctionName === "birthday"} 
                key={person.id} 
                {...person}
            />
        ))
    
    return (
        <main className="list-main">
            <h2 className="list-main--header">Поиск</h2>
            <Searchbar 
                value={listFilter.search}
                change={handleSearch}
                toggleSort={toggleShowSort}
            />
            <Tabs 
                change={handleDepartments}
                currentDep={listFilter.department}
            />
            {
            listFilter.showSort &&
            <Sort 
                change={handleSort}
                currentSort={listFilter.sortFunctionName}
                toggleSort={toggleShowSort}
            />
            }
            {
            people.state.status === "ok" ? peopleDisplayed :
            people.state.status === "loading"? <h2>Loading people...</h2> :
            <ErrorMessage text="Что-то пошло не так..."/>
            }
        </main>
    )
}