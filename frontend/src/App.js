import MainRoutes from "./main-routes";
import "./styles.css";
import Navbar from "./components/navbar"
import Blog from "./Blog";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
      {/* <Blog/> */}
    </div>
  );
}
