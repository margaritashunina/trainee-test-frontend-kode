export default function Searchbar(props) {
    return (
        <div>
            <input 
                type="text"
                value={props.value}
                onChange={props.change}
            />
        </div>  
    )
}