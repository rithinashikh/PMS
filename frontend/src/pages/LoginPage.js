import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="text" name="username" className="form-control" placeholder="Enter Username" required/>
                <input type="password" name="password" className="form-control" placeholder="Enter Password" required/>
                <input type="submit" value="Login" className="w-100 btn btn-lg btn-primary"/>
            </form>
  
        </div>

    )
}

export default LoginPage
