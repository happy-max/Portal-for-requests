import React from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'

function App() {
    return (
        <div className="App">
            <Router>
                    {/*<Header/>*/}
                    <Switch>
                        {/*<Route path='/' render={() => <h2>Welcome to main</h2>} exact/>*/}
                        <Route path='/registration' component={Registration}/>
                        <Route path='/login' component={Login}/>

                    </Switch>
            </Router>
        </div>
    )
}

export default App
