import React from 'react';

const Products = (props) => {

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