import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuotePrice from "./route/admin/CreateQuotePrice";
import HomeAdmin from "./route/admin";
import Login from "./route/login/Authentication";
import Dashboard from "./route/admin/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/admin" element={<HomeAdmin></HomeAdmin>}>
          <Route index path="dashboard" element={<Dashboard />}></Route>
          <Route path="QuotePrice" element={<QuotePrice></QuotePrice>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
