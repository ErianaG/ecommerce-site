import React, { Component } from 'react';
import './App.css';
import Nav from './ecommerceSite/pages/Nav';
import Footer from './ecommerceSite/pages/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './ecommerceSite/pages/home/Home';
import Products from './ecommerceSite/pages/products/Products';
import Contact from './ecommerceSite/pages/contact/Contact';
import ProductCard from './ecommerceSite/pages/products/ProductCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
     guitars: [],
     filteredProducts: [],
     guitarFull: false
 };
 this.callback = this.callback.bind(this);
 this.filterHandler = this.filterHandler.bind(this);
 }
 componentDidMount() {
     fetch('http://localhost:3005/Products', {
         headers: {
             mode: 'cors',
             "Content-type": "application/json",
             "Access-Control-Allow-Origin": "*"
         }
     })
     .then(resp => {
         return resp.json();
     }).then((data) => {
         this.setState ({
             guitars: data,
             filteredProducts: data.product,
             guitarFull: true
         })
         console.log(this.state.filteredProducts)
     }).catch(error=>{console.log(error)})
   };

 callback (el) {
     return <ProductCard info={el} key={el._id} />;
 }

 filterHandler(type) {
     var allProducts = this.state.guitars.product;
     var productFilter;

     if (type === "instrument") {
          productFilter = allProducts.filter(function(allProducts) {
             return allProducts.productType === 'instrument'
         });
         this.setState({ filteredProducts : productFilter });
     } else if (type === "amplifier") {
          productFilter = allProducts.filter(function(allProducts) {
             return allProducts.productType === 'amplifier'
         });
         this.setState({ filteredProducts : productFilter });
     } else if (type === "accessories") {
         productFilter = allProducts.filter(function(allProducts) {
             return allProducts.productType === 'accessories'
         });
         this.setState({ filteredProducts : productFilter });
     } else if (type ==="clear" ) {
         document.querySelector('input[value="instrument"]').checked = false;
         document.querySelector('input[value="amplifier"]').checked = false;
         document.querySelector('input[value="accessories"]').checked = false;
         this.setState({ filteredProducts : allProducts});
     }
 }

  render() {
    console.log(this.state.filteredProducts);
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" render={() => <Products filterHandler={this.filterHandler} guitars={this.state.guitars} guitarFull={this.state.guitarFull} filteredProducts={this.state.filteredProducts} callback={this.callback} /> } />
            <Route path="/contact" component={Contact} exact />
            {/* <Route path="/admin" /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
