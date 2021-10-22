//App.js-> Module
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.js'
import RestapiWithAxios from './Restapi'
import RestDetailsPage from './RestDetail'
import Signup from './Signup'
import RestEditPage from './RestEditPage'
function App() {
    return (<>
        <BrowserRouter>
            <Navbar />
            <Switch>
            <Route exact path="/restapi" component={RestapiWithAxios} />
            <Route exact path="/restapi/:idno" component={RestDetailsPage} />
            <Route exact path="/restapi/view/:id" component={RestDetailsPage} />
            <Route exact path="/restapi/edit/:id" component={RestEditPage} />
            <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    </>)
}
export default App;