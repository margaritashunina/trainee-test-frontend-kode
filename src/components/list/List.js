import { useState, useContext } from "react"
import { PeopleContext } from "../../App"

import Person from "../person/Person"
import Searchbar from "../searchbar/Searchbar"
import Tabs from "../tabs/Tabs"
import Sort from "../sort/Sort"
import ErrorMessage from "../errorMessage/ErrorMessage"
import Loading from "../loading/Loading"

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
            person.firstName.toLowerCase().includes(listFilter.search.toLowerCase()) ||
            person.lastName.toLowerCase().includes(listFilter.search.toLowerCase()) ||
            person.userTag.toLowerCase().includes(listFilter.search.toLowerCase())
        ))
    
    peopleDisplayed = listFilter.sortFunction(peopleDisplayed)
        .map(person => (
            <Person 
                showAge={listFilter.sortFunctionName === "birthday"} 
                key={person.id} 
                {...person}
            />
        ))
    
    const n = 10
    
    return (
        <main className="list-main">
            <h2 className="list-main--header">Поиск</h2>
            <Searchbar 
                value={listFilter.search}
                change={handleSearch}
                toggleSort={toggleShowSort}
                sortIsChecked={listFilter.sortFunctionName !== "base"}
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
            people.state.status === "error" ? <ErrorMessage type="someError"/> :
            people.state.status === "loading"? (new Array(n).fill(<Loading type="list"/>)) :
            peopleDisplayed.length ? peopleDisplayed : <ErrorMessage type="notFound" />
            }
        </main>
    )
}