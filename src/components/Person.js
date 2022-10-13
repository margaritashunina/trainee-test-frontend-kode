import { Link } from 'react-router-dom'

import './Person.css'
import departments from '../departmentNames'

export default function Person(props) {
    const birthday = new Date(props.birthday)
    const dateOptions = {
        month: 'long', 
        day: 'numeric' 
    }
    return (
        <Link className="person--link" to={props.id}>
            <div className="person">
                <img src={props.avatarUrl} alt="An employee"/>
                <div className="person--info">
                    <div className="person--info--names">
                        <p className="person--info--name">{props.firstName} {props.lastName}</p>
                        <p className="person--info--tag">{props.userTag}</p>
                    </div>
                    <p className="person--info--dep">{departments[props.department]}</p>
                </div>
                {
                props.showAge && 
                <p className="profile--age"> 
                    {birthday.toLocaleDateString('ru-RU', dateOptions)}
                </p>
                }
            </div>
        </Link>
        
    )
}