import React from 'react';
import Head from './components/head/Head'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import {HashRouter as Router, Route} from "react-router-dom";  //引入路由
function App() {
    return (
        <div className="App">
            <Router>
                <Head/>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail' component={Detail} />
            </Router>
        </div>
    );
}

export default App;
