import { Form, Button, Table } from "react-bootstrap";
import { createRef, Component } from 'react';

export default class AddInventory extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.formData = createRef();
    }
    // addproduct handler method
    add = (event) => {
        event.preventDefault();
        //console.log(formData.current)
        const newProduct = {
            product_name: this.formData.current.product_name.value,
            price: this.formData.current.price.value,
            qty: Number(this.formData.current.qty.value)
        }
        // add a new product inside products array
        this.state.products.push(newProduct);
        this.setState({
            products: this.state.products
        });
        //console.log(products);
    }
    // increment qty value by 1
    increQty = (event) => {
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty + 1;
        this.setState({
            products: this.state.products
        });
    }
    // decrement qty value by 1
    decreQty = (event) => {
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty - 1;
        this.setState({
            products: this.state.products
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.add} ref={this.formData}>
                    <Form.Group controlId="formBasicProductName">
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="number" placeholder="Price in Euro" name="price" />
                    </Form.Group>

                    <Form.Group controlId="formBasicQty">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="How many: qty" name="qty" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add to Inventory
            </Button>
                </Form>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name:</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>
                                            <Button variant="success" onClick={event => this.increQty(event)} value={index}>+</Button>
                                            <Button variant="danger" onClick={event => this.decreQty(event)} value={index}>-</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }

}