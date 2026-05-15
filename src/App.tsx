import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header userName="Matheus" />
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
