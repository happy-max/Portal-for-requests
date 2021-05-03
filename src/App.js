import React, {useState, useEffect, useContext} from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'
import Header from './components/header'
import AddRequest from './components/add-request'
import MyRequest from './components/my-request'
import {ContactContext} from "./components/store"


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [state, dispatch] = useContext(ContactContext)
    useEffect(()=>{
        let all = localStorage.getItem('allUsers')
        console.log(all)
        if(all){ dispatch({ type: "UPDATE_CONTACT", payload: all }) }
        let user = JSON.parse(localStorage.getItem('user')) || ''
        setIsLoggedIn(!!user)
        setCurrentUser(user)
    },[])
    useEffect(()=> {
        if(isLoggedIn){
            localStorage.setItem('user', JSON.stringify(currentUser))
        }else{
            localStorage.setItem('user', JSON.stringify(null))
        }
    }, [currentUser, isLoggedIn])

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
                                    <Route path='/' component={AddRequest} exact/>
                                    <Route path='/my-requests' component={MyRequest} exact/>
                                </>
                            )
                            : <Redirect to='/login'/>
                    }
                </Switch>
            </Router>

        </div>
    )
}

export default App
