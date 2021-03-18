import React, { Component } from 'react';

class AddItem extends Component {

state = {
      product_id: null,
      quantity: null,
    }

    render() {
        return (
            <form className="container">
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" min= "1" pattern="\d+" className="form-control" id="quantity" onChange = {(e) => this.updateQty(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="products">Products</label>
                    <select className="custom-select" id="product" onChange = {(e) => this.updateProductId(e)}>
                        <option selected>Select an option...</option>
                        {this.props.products.map((product) => <option value={product.id}>{product.name}</option> )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => this.submitAction(e)}>Submit</button>
            </form>

        )
    }

    submitAction = (e) => {
        e.preventDefault() 
        if (this.state.product_id !== null && this.state.quantity !== null){
            this.props.submitFunction(this.state)
        }



    }

    updateQty = (e) => {
        let updatedQty = e.target.value
        console.log("updatedQty:" + updatedQty)
        this.setState({quantity: updatedQty})
    }

    updateProductId = (e) => {
        console.log(e.target.value)
        // eslint-disable-next-line eqeqeq
        let updatedProductId = this.props.products.find((product) => product.id == e.target.value).id 
        console.log("updated product_id:" + updatedProductId)
        this.setState({ product_id: updatedProductId }, () => console.log(this.state))
    }
}

export default AddItem;