import "./location.css"

export default function location(props) {
    console.log(props)
    return props.details.map ((location) => {
        return (
            <div>
            <h2>{ location.title }</h2>
            <p> { location.description }</p>
            </div>
           
        )

        })}

// const location = this.locations.map((location) =>  <h2>{locations.title</h2>}
    
