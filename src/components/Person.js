import { Link } from 'react-router-dom'
import './Person.css'
import departments from '../departmentNames'

export default function Person(props) {
    return (
        <Link className="person--link" to={props.id}>
            <div className="person">
                <img src={props.avatarUrl} alt="An employee"/>
                <div>
                    <p>{props.firstName} {props.lastName}</p>
                    <p>{departments[props.department]}</p>
                </div>
            </div>
        </Link>
        
    )
}