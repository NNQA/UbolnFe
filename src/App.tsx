import React from "react";
import Icon from "./components/Icon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuotePrice from "./route/admin/CreateQuotePrice";
import HomeAdmin from "./route/admin";
import Login from "./route/login/Authentication";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/admin" element={<HomeAdmin></HomeAdmin>}>
          {/* <Route path="quote" element={<QuotePrice></QuotePrice>}></Route> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
