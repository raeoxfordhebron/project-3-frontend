import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { indexLoader } from "../loaders"


export default function Header(){

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [places, setPlaces] = useState([])

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    console.log(setTimeout(places, 5000), "<--- time out")

    const SliderContent = (props) => {
        
        if (places) {
            console.log(places, "<-- places in sliderContent") //
            return places.map((place) => {
                return(
                <li className="place" id="place">
                    <Link to={`/${place._id}`}>
                    <h1>{place.place}</h1>
                    </Link>
                </li>
                )
            })
        }
        
    }

    // useContext hook <- look into it
    // a way to create global scope manager
    useEffect(() => {
        fetch("https://project-3-backend-cm7x.onrender.com/places")
          .then(res => res.json())
          .then(
            (result) => {
            //   setIsLoaded(true);
              setPlaces(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            //   setIsLoaded(true);
            //   setError(error);
                console.log(error)
            }
          )
      }, [])

   
    return(
        <div className="header">
            <p className="cName">Road Trip Buddy</p>
            <div className="navBar">
                <p>Box 1</p>
                <button onClick={handleToggle}>{navbarOpen ? "X" : "="}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>    
                    {/* <Link>Test</Link> */}
                    {places ?  <SliderContent /> : <li>Loading...</li>}
                </ul>
            </div>
        </div>
    )
}