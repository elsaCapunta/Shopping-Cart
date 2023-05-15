
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingVartContext";
import { Provider } from "react-redux";
import store  from "./app/storage";

function App() {

  
  return (
    <Provider store={store}>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </Provider>
  );
}

export default App
