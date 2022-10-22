import "./location.css"
import locations from '../data.json';

export default function location() {
    return locations.map ((location) => {
        return (
            <div>
            <h2>{ Location.title }</h2>
            <p>{ Location.description }</p>
            </div>
    
        )

        })}