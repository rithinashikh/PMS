import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">PMS</Link>

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item active">
                        {user ? (
                            <p className="nav-link" onClick={logoutUser}>Logout</p>
                        ):(
                            <Link to="/login" className="nav-link">Login</Link>
                        )}
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Header
