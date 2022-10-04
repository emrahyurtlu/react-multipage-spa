import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Route path="/welcome" component={Welcome} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
