import React from "react"
import {useState} from "react"

const {form, setForm} = useState({
    username: "",
    password: ""
})

const Signup = (props) => {
const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
}
     return (
        <div>
            <form>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <input type="submit" name="signup"/>
            </form>
        </div>
     )
}

export default Signup