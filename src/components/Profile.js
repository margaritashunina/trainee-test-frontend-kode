import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { PeopleContext } from "../App"

import ErrorMessage from "./ErrorMessage"
import ProfileInfo from "./ProfileInfo"

import './Profile.css'
import arrowIcon from "../img/arrow.svg"

export default function Profile() {
    const { id } = useParams()
    const people = useContext(PeopleContext)

    let displayed
    if (people.state.status === "loading") {
        displayed = <h2>Загрузка</h2>
        //компонент Loading
    }
    else if (people.state.status === "error") {
        displayed = <ErrorMessage text="Что-то пошло не так..."/>
    }
    else {
        let info = people.state.data.find(person => person.id === id)
        if (! info) {
            displayed = <ErrorMessage text="Чела нет..."/>
        }
        else {
            displayed = <ProfileInfo {...info}/>
        }
    }

    return (
        <main>
            <div className="link-back">
                <Link to="/">
                    <img className="link-back--img" src={arrowIcon} alt="Arrow back"/>
                </Link>
            </div>
            {displayed}
        </main>
    )
}