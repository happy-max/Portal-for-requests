import React from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/registration'

function App() {
    return (
        <div className="App">
            <Router>
                    {/*<Header/>*/}

                    <Switch>
                        {/*<Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>*/}
                        <Route path='/registration' component={Registration}/>


                    </Switch>
            </Router>
        </div>
    )
}

export default App
