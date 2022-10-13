import { useContext } from "react"
import { PeopleContext } from "../../App"
import errorImg from '../../img/error-emoji.svg'
import glassIcon from '../../img/magnifying-glass-icon.svg'

import './ErrorMessage.css'

export default function ErrorMessage(props) {
    const toggleRetry = useContext(PeopleContext).retry

    const values = {
        "notFound": {
            h2: "Мы никого не нашли",
            p: "Попробуй скорректировать запрос",
            img: glassIcon,
            imgAlt: "magnifying glass"
        },
        "someError": {
            h2: "Какой-то сверхразум всё сломал",
            p: "Постараемся быстро починить",
            img: errorImg,
            imgAlt: "alien ship",
            showRetry: true
        }
    }

    return (
        <div className="message">
            <img 
                src={values[props.type].img} 
                alt={values[props.type].imgAlt}
                className="message-img"
            />
            <h2>{values[props.type].h2}</h2>
            <p>{values[props.type].p}</p>
            {
                values[props.type].showRetry &&
                <button onClick={toggleRetry}>Попробовать снова</button>
            }
        </div>
    )
}