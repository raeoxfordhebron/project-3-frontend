import {Link} from "react-router-dom"

export default function Header(){
    
    return(
        <div className="header">
            <p className="cName">Road Trip Buddy</p>
            <div className="nav">
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <p>box1</p>
                <p>box2</p>
            </div>
        </div>
    )
}