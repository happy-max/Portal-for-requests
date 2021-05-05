import React, {useEffect, useState} from 'react'
import axios from "axios"

const Weather = () => {
    const [weather, setWeather] = useState({temperature: '', wind_speed: ''})

    useEffect(() => {
        axios.get('http://api.weatherstack.com/current?access_key=651c037b3070fa04271968bf57e2941c&query=Minsk')
            .then((response) => {
            setWeather(response.data.current)
                console.log(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Weather in Minsk</h2>
            <h4>Temperature: {weather.temperature} C</h4>
            <h4>Wind speed: {weather.wind_speed} m/s</h4>
        </div>
    )
}
export default Weather