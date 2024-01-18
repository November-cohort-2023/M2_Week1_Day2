
function Weather(props){

    //destructuring an object

    const {city, weatherNumber} = props

    console.log(city)
    console.log(weatherNumber)


    props.city = "Something else"

    console.log(props)
    return(
        <div>
            <h2>City: {props.city}</h2>
            <p>{props.weatherNumber}°</p>
        </div>
    )
}

export default Weather