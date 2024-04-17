import { Route, Routes } from "react-router-dom";

//admin
import AdminHeader from "./admin/header/AdminHeader";
import Home from "./admin/pages/Home";
import Product from "./admin/pages/Product";
import About from "./admin/pages/About";
import Contact from "./admin/pages/Contact";

//user
import UserHome from "./user/pages/Home";
import UserAbout from "./user/pages/About";
import UserProduct from "./user/pages/Product";
import Users from "./admin/pages/Users";
import UserNavbar from "./user/header/UserNavbar";

function App() {
  let role = "admin";

  if (role === "admin") {
    return (
      <>
        <AdminHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <UserNavbar />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<UserProduct />} />
          <Route path="/about" element={<UserAbout />} />
          <Route />
        </Routes>
      </>
    );
  } else {
    return <h1>Not found</h1>;
  }
}

export default App;