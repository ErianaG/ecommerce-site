import React from 'react';

const Admin = (props) => {

    const deckOfCards = 
    <div>
    {props.guitars.product.map( guitars => (
        <div key={guitars._id} className="adminCard">
            <img src={guitars.productImages} alt={guitars.description} />
            <h4>{guitars.productName}</h4>
            <p className="product--price">${guitars.price}</p>
            <p className="product--description">{guitars.description}</p>
            <p className="product--availability">{guitars.availability}</p>
            <div className="admin--buttons"> 
                <a href="#"><i class="fa fa-pencil-square fa-3x fa-fw"></i></a>
                <a href="#"><i class="fa fa-times-circle fa-3x fa-fw"></i></a>
            </div>
        </div>
    ))};
    </div>

    return(
        <div>
            <div className="adminCard admin--header">
                <p>Image</p>
                <p>Item Name</p>
                <p>Price</p>
                <p>Description</p>
                <p>Availability</p>
                <button className="add--button">Add New Item</button>
            </div>
            {deckOfCards}
        </div>
    )
}

export default Admin;