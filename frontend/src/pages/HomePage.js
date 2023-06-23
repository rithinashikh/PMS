import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
    // let [notes, setNotes] = useState([])
    let [properties, setProperties] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getProperties()
    }, [])


    let getProperties = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/properties/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setProperties(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {properties.map(note => (
                    <div>
                        <li>Property:{note.name}</li><br/>
                        <li>Image:<img src={note.image_url} /></li><br/>
                        <li>Property:{note.name}</li>
                    </div>
                ))}
            </ul>
        </div>

    )
}

export default HomePage
