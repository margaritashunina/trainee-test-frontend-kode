import { useContext } from "react"
import { PeopleContext } from "../App"
import errorImg from '../img/error-emoji.svg'

import './ErrorMessage.css'

export default function ErrorMessage() {
    const toggleRetry = useContext(PeopleContext).retry
    return (
        <div className="message">
            <img src={errorImg} alt="An alien ship" className="message-img"/>
            <h2>Какой-то сверхразум всё сломал</h2>
            <p>Постараемся быстро починить</p>
            <button onClick={toggleRetry}>Попробовать снова</button>
        </div>
    )
}