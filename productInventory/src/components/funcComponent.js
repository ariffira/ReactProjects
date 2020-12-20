import { Form, Button, Table } from "react-bootstrap";
import { useState } from "react";

export default function AddProduct() {
    const initialValue = [];
    // const [nameOfStateData, nameOfUpdateFunction] = useState(initialValue);
    const [products, setProduct] = useState(initialValue)
    // add product handler
    const addProduct = (event)=>{
      event.preventDefault()
      //console.log(event.target.product_name.value)
      const formData = event.target;
      const newProduct = {
          product_name: formData.product_name.value,
          price: formData.price.value,
          qty: formData.qty.value
      }
      // console.log(newProduct)
      // update products
      setProduct([...products,newProduct])
      //console.log(products)
    }
    return(
        <div>
        <Form onSubmit={addProduct}>
            <Form.Group controlId="formProductName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="product_name"/>
            </Form.Group>

            <Form.Group controlId="formProductPrice">
                <Form.Label>Price: </Form.Label>
                <Form.Control type="number" placeholder="Price in Euro" name="price"/>
            </Form.Group>

            <Form.Group controlId="formProductQty">
                <Form.Label>Quantity: </Form.Label>
                <Form.Control type="number" placeholder="how many" name="qty"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add to Inventory
            </Button>
        </Form>
        <Table striped bordered hover size="sm"  variant="dark">
        <thead>
            <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((item, index)=> {
                    return(
                        <tr key={index}>
                        <td>{index}</td>
                        <td>{item.product_name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </Table>
        </div>
    )
}