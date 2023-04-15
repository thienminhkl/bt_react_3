import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal, addToCart } = this.props;
    return (
      <div className='card'>
        <img src={item.image} alt={item.alias} />
        <div className='card-body'>
          <p>{item.name}</p>
          <p>{item.price.toLocaleString()}$</p>
          <button className='btn btn-success btn-sm' onClick={() => { setStateModal(item) }}
            type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Shoe Detail</button>
          <button className='btn btn-dark mx-2 btn-sm' onClick={() => addToCart(item)}>
            Add to cart
            <i className="fa-solid fa-cart-plus" style={{ marginLeft: 5 }}></i>
          </button>
        </div>
      </div>
    )
  }
}
