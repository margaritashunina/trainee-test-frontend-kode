import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PeopleContext } from "../App"

export default function Profile() {
    const { id } = useParams()
    const people = useContext(PeopleContext)

    let displayed
    if (people.status === "loading") {
        displayed = <h2>Loading...</h2>
    }
    else if (people.status === "ok") {
        displayed = people.data.find(elem => elem.id === id)
        displayed = (displayed ? <p>{displayed.firstName}</p> : <h2>This person doesn't exist</h2>)
    }
    else {
        displayed = <h2>Oops... Something went wrong</h2>
    }

    return (
        <div>
            {displayed}
        </div>
    )
}