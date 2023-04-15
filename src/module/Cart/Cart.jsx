import React, { Component } from 'react'

export default class Cart extends Component {

    render() {
        const { cart, handleDelete, handleChangeQuantity, handleClearCart, handleBuy } = this.props;

        const renderTotalPrice = () => {
            let sumTotal = 0;
            cart.forEach((product) => {
                sumTotal += product.cartQuantity * product.price;
            });
            return sumTotal;
        }

        return (
            <div className="modal fade" id="exampleCart" tabIndex={-1} aria-labelledby="exampleCartLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h1 className="modal-title fs-5" id="exampleCartLabel">Cart</h1>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th className="w-25" >Ảnh sản phẩm</th>
                                        <th>Giá tiền</th>
                                        <th>Số lượng</th>
                                        <th>Tổng giá tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) =>
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img className="w-25" src={item.image} alt="" />
                                            </td>
                                            <td>{item.price.toLocaleString()}$</td>
                                            <td>
                                                <button className='btn btn-success mx-2 btn-sm' onClick={() => { handleChangeQuantity(item.id, -1) }}>-</button>
                                                {item.cartQuantity}
                                                <button className='btn btn-success mx-2 btn-sm' onClick={() => { handleChangeQuantity(item.id, 1) }}>+</button>
                                            </td>
                                            <td>{(item.cartQuantity * item.price).toLocaleString()}$</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Xóa</button>
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className='mx-5' style={{ textAlign: 'right' }}>
                            <h5>Tổng đơn hàng: {renderTotalPrice().toLocaleString()}$</h5>
                        </div>

                        <div className="modal-footer">

                            <button 
                            className='btn btn-dark mx-2' 
                            onClick={() => { handleClearCart() }}
                            disabled={cart.length === 0}
                            >Clear Cart</button>
                            <button className='btn btn-success' onClick={() => {handleBuy()}}>Buy</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
