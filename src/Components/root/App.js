import React from 'react';
import Nav from '../Navbar/index';
import {Container} from "reactstrap"  
import Dashboard from './Dashboard'
import {Route,Switch} from 'react-router-dom'
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';


export default class App extends React.Component {
  
  render() {
    return (
      <Container>
        <Nav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail} />
          <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct} />
          <Route path="/saveproduct/"  component={AddOrUpdateProduct} />
          <Route   component={NotFound} />
        </Switch>
       
      </Container>
    );
  }
}
