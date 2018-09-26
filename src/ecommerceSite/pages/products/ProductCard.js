import React from 'react';

function ProductCard(props) {
    return (
        <div className="productCard">
            <h4>{props.info.productName}</h4>
            <img src={props.info.productImages} alt={props.info.description} />
            <p className="product--price">${props.info.price}</p>
            <p>{props.info.description}</p>
            <p className="product--availability">{props.info.availability}</p>
            <button className="cart--button">Add to Cart<i className="fa fa-shopping-cart fa-lg fa-fw" aria-label="shopping cart"></i></button>
        </div>
    )
}

export default ProductCard