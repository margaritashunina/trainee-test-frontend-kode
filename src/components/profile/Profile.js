import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { PeopleContext } from "../../App"

import ErrorMessage from "../errorMessage/ErrorMessage"
import ProfileInfo from "../profileInfo/ProfileInfo"
import Loading from "../loading/Loading"

import './Profile.css'
import arrowIcon from "../../img/arrow.svg"

export default function Profile() {
    const { id } = useParams()
    const people = useContext(PeopleContext)

    let displayed
    if (people.state.status === "loading") {
        displayed = <Loading type="profile"/>
    }
    else if (people.state.status === "error") {
        displayed = <ErrorMessage type="someError"/>
    }
    else {
        let info = people.state.data.find(person => person.id === id)
        if (! info) {
            displayed = <ErrorMessage type="notFound"/>
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