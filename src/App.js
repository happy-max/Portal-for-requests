import React, {useState, useEffect, useContext} from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'
import Header from './components/header'
import AddRequest from './components/add-request'
import MyRequest from './components/my-request'
import {ContactContext} from "./components/store"
import Weather from "./components/weather"

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [state, dispatch] = useContext(ContactContext)

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem('allUsers'))
        if (all) {
            dispatch({type: "UPDATE_CONTACT", payload: all})
        }
        let user = JSON.parse(localStorage.getItem('user'))
        setIsLoggedIn(!!user)
        setCurrentUser(user)
    }, [])

    useEffect(() => {
        if (isLoggedIn && currentUser) {
            localStorage.setItem('user', JSON.stringify(currentUser))
            dispatch({type: "DEL_CONTACT", payload: (currentUser.email)})
            dispatch({type: "ADD_CONTACT", payload: currentUser})
        } else {
            localStorage.setItem('user', JSON.stringify(null))
        }
    }, [currentUser, isLoggedIn])

    useEffect(() => {
        localStorage.setItem('allUsers', JSON.stringify(state.contacts))
    }, [state])

    return (
        <div className="App">

            <Router>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Switch>
                    <Route path='/registration' render={() => (
                        <Registration setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
                    )}/>
                    <Route path='/login' render={() => (
                        <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
                    )}/>
                    {
                        isLoggedIn ?
                            (
                                <>
                                    <Route path='/' render={() => <Weather/>}
                                           exact/>
                                    <Route path='/' render={() => (<AddRequest setCurrentUser={setCurrentUser}
                                                                               currentUser={currentUser}/>)}
                                           exact/>
                                    <Route path='/my-requests'
                                           render={() => (
                                               <MyRequest currentUser={currentUser} setCurrentUser={setCurrentUser}/>)}
                                           exact/>
                                </>
                            )
                            : (
                                <Redirect to='/login'/>
                            )
                    }
                </Switch>
            </Router>

        </div>
    )
}

export default App
