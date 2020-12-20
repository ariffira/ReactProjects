import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

export default function AddProduct() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // addproduct handler method
    const add = (event)=>{
        event.preventDefault();
        //console.log(event.target.product_name.value);
        // const formData = event.target;
        // const newProduct = {
        //     product_name: formData.product_name.value,
        //     price: formData.price.value,
        //     qty: formData.qty.value
        // }
        //console.log(formData.current)
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);
        // add a new product inside products array
        setProduct([...products,newProduct]);
        //console.log(products);
    }
    // increment qty value by 1
    const increQty = (event)=>{
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
            <Form onSubmit={add} ref={formData}>
            <Form.Group controlId="formBasicProductName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="number" placeholder="Price in Euro" name="price"/>
            </Form.Group>

            <Form.Group controlId="formBasicQty">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" placeholder="How many: qty" name="qty"/>
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
                    products.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>
                                    <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
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