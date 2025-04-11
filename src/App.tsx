import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NewExpense from "./pages/expense/NewExpenses";
import ExpenseReports from "./pages/expense/ExpenseReports";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";


const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<NewExpense />} />
          <Route path="/reports" element={<ExpenseReports />} /> */}
          <Route path="/view/:expensesId" element={<ExpenseDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
