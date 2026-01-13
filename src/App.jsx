import Products from "./components/Products";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
 

    <Router>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
