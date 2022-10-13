import searchIcon from '../../img/search-icon.svg'
import sortIcon from '../../img/sort-icon.svg'

import './Searchbar.css'

export default function Searchbar(props) {
    return (
        <div className="searchbar">
            <img 
                src={searchIcon} 
                alt="Search icon" 
            />
            <input 
                type="text"
                placeholder="Введите имя, тег..."
                value={props.value}
                onChange={props.change}
            />
            <img 
                src={sortIcon} 
                alt="Sort icon"
                onClick={props.toggleSort}
                className={props.sortIsChecked ? "filled" : ""}
            />
        </div>  
    )
}