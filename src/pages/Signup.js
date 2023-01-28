import React from "react"
import { useState } from "react"
import { GlobalCtx } from "../App"
import {redirect} from "react-router-dom"



const Signup = (props) => {

    // const [gState, setGState] = React.useContext(GlobalCtx)
    // const {url} = gState

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = useState(blank)

const handleChange = (event) => {

    setForm({...form, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = form
    fetch(`https://project-3-backend-cm7x.onrender.com/signup`, {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setForm(blank)
        
    })
    return redirect ("/login")
}
     return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <input type="submit" name="signup"/>
            </form>
        </div>
     )
}

export default Signup