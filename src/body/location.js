import "./location.css"
import locations from '../data.json';

export default function location() {
    return locations.map ((location) => {
        return (
            <div>
            <h2>{ location.title }</h2>
            <p> { location.description }</p>
            </div>
           
        )

        })}

// const location = this.locations.map((location) =>  <h2>{locations.title</h2>}
    
