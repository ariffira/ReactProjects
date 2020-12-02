import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            todoList: [] // default empty array
        }
    }
    // addTodo: add a new task inside the state
    addTodo = (event)=> {
        event.preventDefault(); // stop default behaviour
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newTodo = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.todoList.push(newTodo);
        // updating state and re-render
        this.setState({
            todoList: this.state.todoList
        })
    }
    // delete todo from the array
    deleteTodo = (event)=> {
        // splice(indexNumber, howmanyTodelete)
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }
    render() {
        console.log(this.state.todoList)
        return(
            <>
            <Form onSubmit={this.addTodo}>
                <Form.Group controlId="formBasicTaskTitle">
                    <Form.Label>Task Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter A Task" name="taskTitle"/>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Task date:</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" name="date"/>
                </Form.Group>
                <Form.Group controlId="formBasicTime">
                    <Form.Label>Task Time:</Form.Label>
                    <Form.Control type="time" placeholder="Enter the Time" name="time"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Add+
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.todoList.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {task.taskTitle} at {task.time}, Date: {task.date}
                                 <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                     Delete
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}

export default TodoList;