import React, { Component } from "react";

    class CardProduct extends Component {
        
        state = {
            order: 4
        }

        handleCounterChange = (newValue) => {
            this.props.onCounterChange(newValue)
        }

        handlePlus = () => {
            this.setState({
                order: this.state.order + 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }

        handleMinus = () => {
            if (this.state.order > 0) {
                this.setState({
                    order: this.state.order - 1
                }, () => {
                    this.handleCounterChange(this.state.order);
                })
            }
        }

        // handleMinus = () => {
        //     if (this.state.order > 0) {
        //         this.setState({
        //             order: this.state.order - 1
        //         })
        //     }
        // }

        render () {
            return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dw" alt="" />
                    </div>
                    <p className="title">Daging Ayam</p>
                    <p className="price">Rp 40.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            );
        }
    }

export default CardProduct;