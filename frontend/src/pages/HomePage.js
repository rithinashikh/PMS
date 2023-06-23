import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './HomePage.css'



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
        <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          {properties.map((property) => (
            <div className="col-md-4" key={property.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`http://127.0.0.1:8000${property.image}`}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title"><b>{property.name}</b></h5>
                  <p className="card-text">{property.description}</p>
                  <p className="card-text"><i><b>Location: </b>{property.location}</i></p>
                  <p className="card-text"><i><b>Price: </b>{property.price}</i></p>
                  <Link to={`/properties/${property.id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    )
}

export default HomePage
