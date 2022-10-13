import departments from "../../departmentNames"

import './Tabs.css'

export default function Tabs(props) {
    let departmentList = []
    for (const key in departments) {
        departmentList.push(
            <li 
                key={key} 
                id={key} 
                onClick={props.change}
                className={key === props.currentDep? "selected-tab" : ""}
            >
                {departments[key]}
            </li>
        )
    }

    return (
        <ul className="dep-tabs">
            {departmentList}
        </ul>
    )
}