import Homepage from "./homepage";
import { Routes, Route } from "react-router-dom";
import Account from "./account";
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
