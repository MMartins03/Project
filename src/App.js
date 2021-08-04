import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

// Navigation:
import Personal_Menu from './components/Personal_Menu';
import About from './components/Home';
import Navbar from './components/Navbar';
import Error from './components/Error';

// Theme:
// import Theme from './components/Theme'

function App(props) {
    return (
        <div className='todoapp stack-large background'>
            <Navbar />
            <Switch>
                <Route path="/" component={Personal_Menu} exact />
                <Route path="/Home" component={About} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default App