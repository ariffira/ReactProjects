import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
import AddProduct from './components/funcComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory form by Reactjs</h1>
        <AddInventory/>
        <AddProduct/>
        {/* <h1>We will cover here:</h1>
        <ul>
          <li>Reactjs ref vs syntheticEvent</li>
          <li>Form in reactjs</li>
          <li>Reactjs Hook: useState()</li>
          <li>React components: functional vs class</li>
          <li>Add product name, price, quantity in inventory data</li>
          <li>React-Bootstrap use case</li>
        </ul> */}
      </header>
    </div>
  );
}

export default App;
