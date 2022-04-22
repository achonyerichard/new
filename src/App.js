import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.components";
import SignIn from "./routes/authentication/authentication.component";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
