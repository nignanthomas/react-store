import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';

class ProducList extends Component {
    state = {
        products:storeProducts
    }

    render() { 
        console.log(this.state.products);
        
        return ( 
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>

                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
                // <Product></Product>
        );
    }
}
 
export default ProducList;