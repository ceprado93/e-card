import { Switch, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import IndexPage from '../Pages/Index/Index'
import Signup from '../Pages/Signup/Signup'
import Profile from '../Pages/Profile/Profile'
import Contact from '../Pages/Contact/Contact'






const Routes = ({ storeUser, loggedUser, isAdmin, handleAlert }) => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={props => <IndexPage loggedUser={loggedUser} storeUser={storeUser}  {...props} />} />
                <Route path="/login" exact render={props => <Login storeUser={storeUser}  {...props} />} />
                <Route path="/signup" exact render={() => <Signup />} />
                <Route path="/contact" exact render={() => <Contact />} />
                <Route path="/profile" exact render={() => <Profile loggedUser={loggedUser} />} />


            </Switch>
        </>
    )
}

export default Routes