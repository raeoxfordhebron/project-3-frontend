

export default function Header(){
    
    return(
        <div className="header">
            <p className="cName">Road Trip Buddy</p>
            <div className="nav">
                <p>box1</p>
                <p>box2</p>
                {/* something like this = <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link */}
            </div>
        </div>
    )
}