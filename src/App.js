import React, { Component } from 'react';
import './App.css';
import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
    render() {
        return (
            <Provider>
                <HashRouter>
                    <div className="App">
                        <Header branding="Contacts manager"/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/contact/add" component={AddContact}/>
                                <Route exact path="/contact/edit/:id" component={EditContact}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/test" component={Test}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
