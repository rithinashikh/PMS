import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetailPage.css'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/properties/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.status === 200) {
        setProperty(data);
      } else {
        logoutUser()
    }
    } catch (error) {
      // Handle error case
    }
  };

  return (
    <div>
      {property ? (
        <div>
            <h2><b><u>{property.name}</u></b></h2>

            <div>
                <table className='mt-6'>
                    <tr>
                        <td>Property</td>
                        <td>{property.name}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{property.price}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{property.description}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{property.location}</td>
                    </tr>
                    <tr>
                        <td>Amenities</td>
                        <td>{property.amenities}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{property.type}</td>
                    </tr>
                </table>
            </div>
            <div>
                <img
                    className="card-img-top"
                    src={`http://127.0.0.1:8000${property.image}`}
                    alt="Card image cap"
                />
            </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default PropertyDetailPage;