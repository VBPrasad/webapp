import { Link, useParams } from "react-router-dom";

import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hook/useExpenseByExpenseId";

const ExpenseDetails = () => {
const { expensesId } = useParams<{ expensesId: string }>();

  if (!expensesId) {
    return <p> Invalide ExpenseId</p>;
  }

  const { expense, errors, isLoading } = useExpenseByExpenseId(expensesId!);
  return (
    <div>
      {isLoading && <p> Loading...</p>}
      {errors && <p> {errors}</p>}
      <div>
        <button> Delete</button>
        <button> Edit</button>
        <Link className="btn btn-sm btn-secondary" to="/"> Back </Link >

       
      </div> 
      <table>
        <tr>
          <td>Name</td>
          <td>{expense ? expense?.name : "N/A"}</td>
        </tr>
        <tr>
          <td>Amount</td>
          <td>
            {" "}
            {expense ? CurrencyUtils.formatToINR(expense?.amount) : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Date</td>
          <td>{expense ? DateUtils.formatDateString(expense?.date) : "N/A"}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>{expense ? expense?.category : "N/A"}</td>
        </tr>
        <tr>
          <td>Note</td>
          <td>{expense ? expense?.note : "N/A"}</td>
        </tr>
      </table>
    </div>
  );
};

export default ExpenseDetails;
