import React, {useState} from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'
import Header from './components/header'
import AddRequest from './components/add-request'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <div className="App">
            <Router>
                    <Header isLoggedIn={isLoggedIn}/>
                    <Switch>
                        {/*<Route path='/' render={() => <h2>Welcome to main</h2>} exact/>*/}
                        <Route path='/registration' component={Registration}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/' component={AddRequest}/>

                    </Switch>
            </Router>
        </div>
    )
}

export default App
