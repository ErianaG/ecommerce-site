import React from 'react';

const Products = (props) => {

    //    this.state = {
    //     guitars: [],
    //     filteredProducts: [],
    //     guitarFull: false
    // };
    // this.callback = this.callback.bind(this);
    // this.filterHandler = this.filterHandler.bind(this);
    // }
    // componentDidMount() {
    //     fetch('http://localhost:3005/Products', {
    //         headers: {
    //             mode: 'cors',
    //             "Content-type": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //     .then(resp => {
    //         return resp.json();
    //     }).then((data) => {
    //         this.setState ({
    //             guitars: data,
    //             filteredProducts: data.product,
    //             guitarFull: true
    //         })
    //         console.log(this.state.filteredProducts)
    //     }).catch(error=>{console.log(error)})
    //   };

    // callback (el) {
    //     return <ProductCard info={el} key={el._id} />;
    // }

    // filterHandler(type) {
    //     var allProducts = this.state.guitars.product;
    //     var productFilter;

    //     if (type === "instrument") {
    //          productFilter = allProducts.filter(function(allProducts) {
    //             return allProducts.productType === 'instrument'
    //         });
    //         this.setState({ filteredProducts : productFilter });
    //     } else if (type === "amplifier") {
    //          productFilter = allProducts.filter(function(allProducts) {
    //             return allProducts.productType === 'amplifier'
    //         });
    //         this.setState({ filteredProducts : productFilter });
    //     } else if (type === "accessories") {
    //         productFilter = allProducts.filter(function(allProducts) {
    //             return allProducts.productType === 'accessories'
    //         });
    //         this.setState({ filteredProducts : productFilter });
    //     } else if (type ==="clear" ) {
    //         document.querySelector('input[value="instrument"]').checked = false;
    //         document.querySelector('input[value="amplifier"]').checked = false;
    //         document.querySelector('input[value="accessories"]').checked = false;
    //         this.setState({ filteredProducts : allProducts});
    //     }
    // }

        let deckOfCards = '';

        if (props.guitarFull) {
            deckOfCards = props.filteredProducts.map(props.callback);
        }
        return (
            <main>
                <div className="heroImg--products"></div>
                <div className="heroImg--text--products">
                    <h1>Great Products</h1>
                    <h2>No strings attached.</h2>
                </div>
                <div className="card--product">
                    <div className="card--product__left">
                        <h3>FILTERS</h3>
                        <hr />
                        <form>
                            <label>
                                <input onClick={() => props.filterHandler("instrument")} type="radio" value='instrument' name="product" />
                                Instruments
                            </label>
                            <label>
                                <input onClick={() => props.filterHandler("amplifier")} type="radio" value='amplifier' name="product" />
                                Amplifiers
                            </label>
                            <label>
                                <input onClick={() => props.filterHandler("accessories")} type="radio" value='accessories' name="product" />
                                Accessories
                            </label>
                            <button onClick={() => props.filterHandler("clear")} type="button" className="clear--button">Clear Filter</button>
                        </form>
                    </div>
                    <div className="card--product__main">
                        <h3>Shop All Products</h3>
                        <div className="container">
                            {deckOfCards}
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    


export default Products;