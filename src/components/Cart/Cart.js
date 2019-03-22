import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';

class Cart extends Component {
    state = {  }
    render() { 
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if (cart.length>0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns></CartColumns>
                                    <CartList value={value}></CartList>
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart></EmptyCart>;
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}
 
export default Cart;