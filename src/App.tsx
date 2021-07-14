import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Apps from './components/play';
// @ts-ignore
import RandomVRandom from "./components/RandomVRandom";
function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <RandomVRandom />} />
                    <Route path="/Play" exact component={() => <Apps />} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;

