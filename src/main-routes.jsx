import { Routes, Route } from "react-router-dom";
import Account from "./pages/account";
import EditBlog from "./pages/EditBlog";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Newblog from "./pages/New-blog";
import Register from "./pages/register";
import Private from "./private";
export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/edit/:blogId"
          element={
            <Private>
              {" "}
              <EditBlog />{" "}
            </Private>
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/newblog"
          element={
            <Private>
              {" "}
              <Newblog />{" "}
            </Private>
          }
        />
        <Route
          path="/account"
          element={
            <Private>
              {" "}
              <Account />{" "}
            </Private>
          }
        />
      </Routes>
    </>
  );
}
