import React from 'react';

const CartColumns = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
            <hr style={{border:'2px solid black'}}/>
        </div>
    );
}
 
export default CartColumns;