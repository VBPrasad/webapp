import { Link } from "react-router-dom";
import { Expense } from "../model/Expense";
import CurrencyUtils from "../utils/CurrencyUtils";
import DateUtils from "../utils/DateUtils";

interface props {
  expenses: Expense[];
}
const ExpenseList = ({ expenses }: props) => {
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>ExpenseID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expensesId}>
              <td>
                <Link
                  key={expense.expensesId}
                  to={`/view/${expense.expensesId}`}
                >
                  {expense.expensesId}
                </Link>
              </td>
              <td>
                <Link
                  key={expense.expensesId}
                  to={`/view/${expense.expensesId}`}
                >
                  {" "}
                  {expense.name}{" "}
                </Link>
              </td>
              <td>{CurrencyUtils.formatToINR(expense.amount)}</td>
              <td>{DateUtils.formatDateString(expense.date)}</td>
              <td>{expense.category}</td>
              <td>{expense.note}</td>
            </tr>
          ))}

          {/* {expenses
  .filter((expense) => expense.name === 'Gas Bill')
  .map((expense) => (
    <tr key={expense.expensesId}>
      <td>{expense.id}</td>
      <td>{expense.expensesId}</td>
      <td>{expense.name}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
      <td>{expense.category}</td>
      <td>{expense.note}</td>
    </tr>
  ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
