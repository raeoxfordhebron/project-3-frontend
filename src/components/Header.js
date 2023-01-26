

export default function Header(){

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return(
        <div className="header">
            <p className="cName">Road Trip Buddy</p>
            <div className="nav">
                <p>box1</p>
                <button onClick={handleToggle}>{navbarOpen ? "X" : "="}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    
                </ul>
                </div>
        </div>
    )
}



