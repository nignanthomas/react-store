import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';

class Cart extends Component {
    state = {  }
    render() { 
        return (
            <section>
                <Title name="your" title="cart"></Title>
                
                <CartColumns></CartColumns>
            </section>
        );
    }
}
 
export default Cart;