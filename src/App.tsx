
import { Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import WebsiteLayout from "./component/Layout/Website";
import AdminLayout from "./component/Layout/Admin";
import Detail from "./pages/client/Detail";
import AuthForm from "./pages/client/AuthForm";
import ForgotPass from "./pages/client/ForgotPass";
import ResetPassword from "./pages/client/ResetPassword";
import Shirt from "./pages/client/Shirt";
import Categories from "./pages/admin/Categories/Category";
import AddCate from "./pages/admin/Categories/AddCate";
import Products from "./pages/admin/products/Products";
import AddProduct from "./pages/admin/products/AddProduct";
import { useEffect, useState } from "react";
import { IProduct } from "./interface/IProduct";
import { instance } from "./instance/instance";
import { ICategory } from "./interface/ICategory";


function App() {
  // const navigate = useNavigate()
  const [products, setProduct] = useState<IProduct[]>([])
  const [categories, setCagtegory] = useState<ICategory[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products")
      setProduct(data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/category")
      setCagtegory(data)
    })()
  }, [])
  return (
    <>
      <main>
        <Routes>
          <Route path="" element={<WebsiteLayout />}>
            <Route index path="" element={<Home />} />
            <Route path="detail" element={<Detail />} />
            <Route path="shirt" element={<Shirt />} />
          </Route>
          <Route path="login" element={<AuthForm isLogin />} />
          <Route path="register" element={<AuthForm />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index path="" element={<Dashboard />} />
            <Route path="categories" element={<Categories categoris={categories} />} />
            <Route path="categories/addcate" element={<AddCate />} />
            <Route path="products" element={<Products products={products} />} />
            <Route path="products/addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
