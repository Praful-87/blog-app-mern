import MainRoutes from "./main-routes";
import Navbar from "./navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}
