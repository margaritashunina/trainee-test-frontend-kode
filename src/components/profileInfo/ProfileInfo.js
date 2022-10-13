import starIcon from '../../img/star.svg'
import phoneIcon from '../../img/phone.svg'
import goose from '../../img/goose.svg'
import './ProfileInfo.css'

export default function ProfileInfo(props) {
    const today = new Date()
    const birthday = new Date(props.birthday)
    const age = new Date(today - birthday).getFullYear() - 1970
    const dateOptions = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }

    return (
        <div>
            <div className="profile--header">
                <img src={props.avatarUrl} alt={goose}/>
                <div className="profile--header--name">
                    <p>{props.firstName} {props.lastName}</p>
                    <p className="profile--header--tag">{props.userTag}</p>
                </div>
                <p className="profile--header--pos">{props.position}</p>
            </div>
            <div className="profile--info-field">
                <img src={starIcon} alt="Star icon"/>
                <p>{birthday.toLocaleDateString('ru-RU', dateOptions)}</p>
                <p className="profile--age"> 
                    {age + " "} 
                    {age % 10 === 1 ? "год" :
                     age % 10 < 5 && age % 10  ? "года" : "лет"}
                </p>
            </div>
            <div className="profile--info-field">
                <img src={phoneIcon} alt="Phone icon"/>
                <a className="profile--phone" href={`tel:${props.phone}`}>{props.phone}</a>
            </div>
        </div>
    )
}