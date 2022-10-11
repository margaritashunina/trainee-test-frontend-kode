import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { PeopleContext } from "../App"
import ErrorMessage from "./ErrorMessage"

export default function Profile() {
    const { id } = useParams()
    const people = useContext(PeopleContext)

    let displayed
    if (people.status === "loading") {
        displayed = <h2>Loading...</h2>
    }
    else if (people.status === "ok") {
        displayed = people.data.find(elem => elem.id === id)
        displayed = (displayed ? 
            <p>{displayed.firstName}</p> : 
            <ErrorMessage text="Такого человека нет..."/>
        )
    }
    else {
        displayed = <ErrorMessage text="Что-то пошло не так..."/>
    }

    return (
        <div>
            <Link to="/">
                Go back to main...
            </Link>
            <div>
                {displayed}
            </div>
        </div>
    )
}