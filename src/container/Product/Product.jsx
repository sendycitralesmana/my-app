import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct";

    class Product extends Component {
        
        state = {
            order: 4
        }

        handleCounterChange = (newValue) => {
            this.setState({
                order: newValue
            })
        }

        render () {
            return (
                <Fragment>
                    <div className="header">
                        <div className="logo">
                            {/* <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dw" alt="" /> */}
                        </div>
                        <div className="troley">
                            {/* <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dw" alt="" /> */}
                            <div className="count">Count {this.state.order}</div>
                        </div>
                    </div>
                    <CardProduct onCounterChange={ (value) => this.handleCounterChange(value) } />
                </Fragment>
            );
        }
    }

export default Product;