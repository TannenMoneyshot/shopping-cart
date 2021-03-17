import React, { Component } from 'react';

class AddItem extends Component {

state = {
    product: {
      id: null,
      name: null,
      priceInCents: null
    },
    quantity: null
  }

    render() {
        return (
            <form className="container">
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" min= "1" pattern="\d+" className="form-control" id="quantity" onChange = {(e) => this.udateQty(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="products">Products</label>
                    <select class="custom-select" id="product" onChange = {(e) => this.updateProductToAddName(e)}>
                        <option selected>Select an option...</option>
                        {this.props.arrayOfProducts.map((product) => <option value={product.id}>{product.name}</option> )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => this.submitAction(e)}>Submit</button>
            </form>

        )
    }

    submitAction = (e) => {
        e.preventDefault() 
        if (this.state.product.id !== null && this.state.quantity !== null){
            this.props.submitFunction(this.state)
        }



    }

    udateQty = (e) => {
        let updatedQty = e.target.value
        this.setState({quantity: updatedQty})
    }

    updateProductToAddName = (e) => {
        console.log(e.target.value)
        // eslint-disable-next-line eqeqeq
        let updatedProduct = this.props.arrayOfProducts.find((product) => product.id == e.target.value) 
        console.log(updatedProduct)
        this.setState({product: updatedProduct})
    }
}

export default AddItem;