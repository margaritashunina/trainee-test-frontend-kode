import xIcon from '../img/x-icon.svg'
import './Sort.css'

export default function Sort(props) {
    function alphabetSort(array) {
        return array.sort((a, b) => {
            const nameA = a.firstName + a.lastName
            const nameB = b.firstName + b.lastName
            return (
                nameA === nameB ? 0 :
                nameA < nameB ? -1 : 1
            )
        }
        )
    }

    function birthdaySort(array) {
        const now = new Date()
        return array.sort((a, b) => {
            const dateA = new Date(a.birthday)
            dateA.setFullYear(now.getFullYear())
            const dateB = new Date(b.birthday)
            dateB.setFullYear(now.getFullYear())
            
            if (dateA - now < 0) dateA.setFullYear(now.getFullYear() + 1)
            if (dateB - now < 0) dateB.setFullYear(now.getFullYear() + 1)

           return (
                dateA === dateB ? 0 : 
                dateA < dateB ? -1 : 1
            )
        })
    }

    return (
        <div className="sort-modal--wrapper">
            <div className="sort-modal">
                <div className="sort-modal--header">
                    <h2>Сортировка</h2>
                    <button onClick={props.toggleSort}>
                        <img src={xIcon} alt="close"/>
                    </button>
                </div>
                <div className="sort-moadl--input-container">
                    <input 
                        className="sort-modal--radio"
                        type="radio" 
                        id="alphabet" 
                        name="sort"
                        checked={props.currentSort === "alphabet"}
                        onChange={(event) => props.change(event.target.id, alphabetSort)}
                    />
                    <label htmlFor="alphabet" className="sort-modal--label">По алфавиту</label>
                </div>
                <div className="sort-moadl--input-container"> 
                    <input 
                        className="sort-modal--radio"
                        type="radio" 
                        id="birthday" 
                        name="sort"
                        checked={props.currentSort === "birthday"}
                        onChange={(event) => props.change(event.target.id, birthdaySort)}
                    />
                    <label htmlFor="birthday" className="sort-modal--label">По дню рождения</label>
                </div>
            </div>
        </div>
    )
}