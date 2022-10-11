import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { PeopleContext } from "../App"
import ErrorMessage from "./ErrorMessage"
import ProfileInfo from "./ProfileInfo"

export default function Profile() {
    const { id } = useParams()
    const people = useContext(PeopleContext)

    let displayed
    if (people.status === "loading") {
        displayed = <h2>Загрузка</h2>
        //компонент Loading
    }
    else if (people.status === "error") {
        displayed = <ErrorMessage text="Что-то пошло не так..."/>
    }
    else {
        let info = people.data.find(person => person.id === id)
        if (! info) {
            displayed = <ErrorMessage text="Чела нет..."/>
        }
        else {
            //другой компонент?
            displayed = <ProfileInfo {...info}/>
        }
    }

    return (
        <main>
            <Link to="/">
                {"<"}
            </Link>
            {displayed}
        </main>
    )
}