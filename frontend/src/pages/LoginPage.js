import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={loginUser}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input type="text" name="username" className="form-control mb-2" placeholder="Enter Username" required/>
                    <input type="password" name="password" className="form-control mb-2" placeholder="Enter Password" required/>
                    <input type="submit" value="Login" className="w-100 btn btn-lg btn-primary"/>
                </form>
            </div>
  
        </div>

    )
}

export default LoginPage
