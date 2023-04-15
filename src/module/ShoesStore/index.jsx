import React, { Component } from 'react'
import ProductList from '../ProductList'
import Cart from '../Cart/Cart'
import Modal from '../Modal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class ShoesStore extends Component {
  MySwal = withReactContent(Swal)

  state = {
    productDetail: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    cart: [],
  }

  setStateModal = (modal) => {
    this.setState({
      productDetail: modal
    })
  }

  handleAddToCart = (product) => {
    const cart = this.state.cart;

    const index = cart.findIndex(
      (item) => item.id === product.id
    )
    if (index === -1) {
      product.cartQuantity = 1;
      cart.push(product);
    } else {
      cart[index].cartQuantity += 1
    }

    this.setState({
      cart: cart
    })
  }

  handleDelete = (id) => {
    let cart = this.state.cart;

    const index = cart.findIndex((item) => {
      return item.id === id;
    });

    this.MySwal.fire({
      title: 'Are you sure to delete this product',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    }).then((result) => {
      if(result.isConfirmed) {
        cart.splice(index, 1);
        this.setState({
          cart: cart
        })
      }
    })
  
  }

  handleChangeQuantity = (id, value) => {
    let cart = this.state.cart;

    const index = cart.findIndex((item) => {
      return item.id === id;
    });

    if ((cart[index].cartQuantity + value) < 1) {
      this.MySwal.fire({
        title: 'This action will remove this product out of your cart',
        confirmButtonText: 'Confirm',
        showDenyButton: true,
        denyButtonText: 'Deny'
      }).then((result) => {
        if(result.isConfirmed) {
          cart.splice(index, 1);
          this.setState({
            cart: cart
          })
        }
      })
    } else {
      cart[index].cartQuantity += value;
    }

    this.setState({
      cart: cart
    })
  }

  handleClearCart = () => {
    this.MySwal.fire({
      title: 'This action will empty your cart',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    }).then((result) => {
      if(result.isConfirmed) {
        this.setState({
          cart: []
        })
      }
    })
  }


  handleBuy = () => {
    let cart = this.state.cart;
    if (cart.length > 0) {
      this.MySwal.fire({
        icon: 'success',
        title: 'Your order is completed',
        showConfirmButton: false,
        timer: 1500,
      });
      this.setState({
        cart: []
      })
    } else {
      this.MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your cart is empty',
      });
    }
  }

  renderCartCount = () => {
    let cartCount = 0;
    this.state.cart.forEach((product) => {
    cartCount += product.cartQuantity;
    });
    return cartCount;
  }

  render() {
    const products = [
      {
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
      },
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 990,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 415,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
      },
      {
        "id": 4,
        "name": "Adidas Super Star Red",
        "alias": "adidas-super-star-red",
        "price": 465,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 542,
        "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
      },
      {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 674,
        "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
      },
      {
        "id": 6,
        "name": "Adidas Tenisky Super Star",
        "alias": "adidas-tenisky-super-star",
        "price": 250,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 456,
        "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
      },
      {
        "id": 7,
        "name": "Adidas Ultraboost 4",
        "alias": "adidas-ultraboost-4",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 854,
        "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
      },
      {
        "id": 8,
        "name": "Adidas Yeezy 350",
        "alias": "adidas-yeezy-350",
        "price": 750,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 524,
        "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
      },
      {
        "id": 9,
        "name": "Nike Adapt BB",
        "alias": "nike-adapt-bb",
        "price": 630,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "quantity": 599,
        "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
      },
      {
        "id": 10,
        "name": "Nike Air Max 97",
        "alias": "nike-air-max-97",
        "price": 650,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "quantity": 984,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
      },
      {
        "id": 11,
        "name": "Nike Air Max 97 Blue",
        "alias": "nike-air-max-97-blue",
        "price": 450,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "quantity": 875,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
      },
      {
        "id": 12,
        "name": "Nike Air Max 270 React",
        "alias": "nike-air-max-270-react",
        "price": 750,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "quantity": 445,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
      }
    ]

    return (

      <div className='container'>

        <header className='text-center'>
          <h1>Shoes Shop</h1>
          <button className='btn btn-success btn-sm text-right' type="button" data-bs-toggle="modal" data-bs-target="#exampleCart" style={{position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1030
        }}>
          <i className="fa-solid fa-cart-plus mx-2"></i>
          {this.renderCartCount()}
          </button>
        </header>
        <ProductList productsData={products} setStateModal={this.setStateModal} addToCart={this.handleAddToCart} />

        <Cart 
        cart={this.state.cart} 
        handleDelete={this.handleDelete} 
        handleChangeQuantity={this.handleChangeQuantity} 
        handleClearCart={this.handleClearCart}
        handleBuy={this.handleBuy} />

        <Modal content={this.state.productDetail} addToCart={this.handleAddToCart} />
      </div>
    )
  }
}
