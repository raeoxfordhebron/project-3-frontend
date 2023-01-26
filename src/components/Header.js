// import { FaCaravan } from "react-icons/fa";
import icon from "./img/car.png"

export default function Header(){
    
    return(
        <div className="header">
            <p className="cName">Road Trip Buddy <img className="trailer" src={icon} alt="car icon"/> </p>
            <div className="nav">
                <p>box1</p>
                <p>box2</p>
            </div>
        </div>
    )
}



