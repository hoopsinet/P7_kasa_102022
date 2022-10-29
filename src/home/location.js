import "./location.css"
import locations from '../data.json';

export default function location() {
    return locations.map ((location) => {
        return (
            // <a href="../location.html?id={location.id}"> à compléter 
                <div className="location_card">
                    <img src={ location.cover } alt="location_photo" className="location_cover"/>
                    <h2>{ location.title }</h2>
                </div>
            // </a>


        )

        })}

