import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header userName="Matheus" />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
