import {useEffect, useState} from 'react'
import { useHistory } from 'react-router';

const Home = () => {
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [hobby, setHobby] = useState("");
    const apiUrlGet = "http://localhost:8000/api/user"
    const apiUrlLogout = "http://localhost:8000/api/logout"
    
    const history = useHistory();

    useEffect( () => {
        (
            async () =>{
                const response = await fetch(apiUrlGet, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                })

                const content = await response.json();

                setName(content.name)
                setSection(content.section)
                setHobby(content.hobby)
            }
        )()
    })

    //Logout using fetch
    const logout = async () => {
        await fetch(apiUrlLogout, {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        history.push("/")
    }

    return (
        <div>
           <h3>{name ? 'Hi ' + name: 'You are not authenticated'}</h3>
           <h3>Section: {section}</h3>
           <h3>Hobby: {hobby}</h3>
           
           <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home
