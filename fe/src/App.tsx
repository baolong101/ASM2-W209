import { Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import WebsiteLayout from "./component/Layout/Website";
import AdminLayout from "./component/Layout/Admin";
import Detail from "./pages/client/Detail";
import AuthForm from "./pages/client/AuthForm";
import ForgotPass from "./pages/client/ForgotPass";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="" element={<WebsiteLayout />}>
            <Route index path="" element={<Home />} />
            <Route path="detail" element={<Detail />} />
          </Route>
          <Route path="login" element={<AuthForm isLogin />} />
          <Route path="register" element={<AuthForm />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
