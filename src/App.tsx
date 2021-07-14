import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Apps from './components/play';
import RandomVRandomGame from "./components/RandomVRandom";
function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <RandomVRandomGame />} />
                    <Route path="/Play" exact component={() => <Apps />} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;

