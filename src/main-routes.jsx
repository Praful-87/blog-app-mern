import { Routes, Route } from "react-router-dom";
import Account from "./pages/account";
import Homepage from "./pages/homepage";
export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
