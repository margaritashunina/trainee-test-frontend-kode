import './Loading.css'

export default function Loading(props) {
    const mainStyle = {
        flexDirection: (props.type === "list" ? "row" : "column")
    }
    const addStyle = {
        alignItems: (props.type === "list" ? "flex-start" : "center")
    }

    return (
        <div className="element" style={mainStyle}>
            <div className="element--round"></div>
            <div className="element--right-container" style={addStyle}>
                <div className="element--bigger"></div>
                <div className="element--smaller"></div>
            </div> 
        </div>
    )
}