import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import User from "./components/User";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
