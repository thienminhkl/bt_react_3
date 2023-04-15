import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { content, addToCart } = this.props;

    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Shoes Detail</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className='card'>
                  <img src={content.image} alt={content.alias} style={{width: '75%', height: '75%'}} />
                  <div className='card-body bg-info'>
                    <p>{content.name}</p>
                    <p>{content.price.toLocaleString()}$</p>
                    <p>{content.description}</p>
                    <p>Stock: {content.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className='btn btn-dark mx-2' onClick={() => addToCart(content)}>
                  Add to cart
                  <i className="fa-solid fa-cart-plus" style={{ marginLeft: 5 }}></i>
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
