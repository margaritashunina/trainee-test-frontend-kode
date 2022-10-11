import starIcon from '../img/star.svg'
import phoneIcon from '../img/phone.svg'

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
            <div>
                <img src={props.avatarUrl} alt="An employee"/>
                <div>
                    <p>{props.firstName} {props.lastName}</p>
                    <p>{props.userTag}</p>
                </div>
                <p>{props.position}</p>
            </div>
            <div>
                <div>
                    <img src={starIcon} alt="Star icon"/>
                    <p>{birthday.toLocaleDateString('ru-RU', dateOptions)}</p>
                    <p>{age}</p>
                </div>
                <div>
                    <img src={phoneIcon} alt="Phone icon"/>
                    <a href={`tel:${props.phone}`}>{props.phone}</a>
                </div>
                
            </div>
        </div>
    )
}