import "./App.css";

import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDeatails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
          <Routes>
            <Route path="/" exact element={<ProductListing></ProductListing>} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetails></ProductDetails>}
            />
            <Route> 404 Not Found</Route>
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
