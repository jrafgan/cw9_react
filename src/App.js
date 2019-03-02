import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router";
import DishesPage from "./containers/DishesPage/ContactsPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import AddNewDish from "./components/AddNewContact/AddNewContact";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
              <Switch>
                  <Route path="/" exact component={DishesPage}/>
                  <Route path="/orders" component={OrdersPage}/>
                  <Route path="/add" component={AddNewDish}/>
                  <Route render={() => <h1>Not Found</h1>}/>
              </Switch>
      </div>
    );
  }
}

export default App;
