import ExpenseList from "../../components/ExpenseList";
import { useExpense } from "../../hook/useExpenses";
import { Expense } from "../../model/Expense";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const loggedInUser2: string = "81baji@gmail.com";
  const { expenses, error, isLoading } = useExpense();

  const totalexpenses = expenses.reduce(
    (acc: number, expense: Expense) =>
       acc + expense.amount, 0
  );
  return (
    <div className="container">
      <DashboardStatus
        logggedInUser5={loggedInUser2}
        totalExpenses={totalexpenses}
      />
      <hr />
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />;
    </div>
  );
};

export default Dashboard;
