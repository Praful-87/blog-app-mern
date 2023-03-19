import MainRoutes from "./main-routes";
import "./styles.css";
import Navbar from "./components/navbar"
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
    </div>
  );
}
