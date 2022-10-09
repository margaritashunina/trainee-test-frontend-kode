import departments from "../departmentNames"

export default function Tabs(props) {
    let departmentList = []
    for (const key in departments) {
        departmentList.push(
            <li 
                key={key} 
                id={key} 
                onClick={props.change}
            >
                {departments[key]}
            </li>
        )
    }

    return (
        <ul>
            {departmentList}
        </ul>
    )
}