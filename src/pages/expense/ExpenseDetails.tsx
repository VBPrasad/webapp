import { Link, useNavigate, useParams } from "react-router-dom";

import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hook/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import {  useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";

const ExpenseDetails = () => {
  const { expensesId } = useParams<{ expensesId: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate=useNavigate();
  


  if (!expensesId) {
    return <p> Invalide ExpenseId</p>;
  }

  const { expense, errors, isLoading, setIsLoading, setErrors } =
    useExpenseByExpenseId(expensesId!);

  const handleConfirm = () => {
    setIsLoading(true);
    deleteExpenseByExpenseId(expensesId)
      .then((response) => {
        if( response && response.status){
        navigate("/")
      }
    }  )
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setIsLoading(false);
        setShowDialog(false);
      });
  };
  const handleCancel = () => {
    console.log("Cancel is click");
    setShowDialog(false);
  };
  return (
    <div>
      {isLoading && <p> Loading...</p>}
      {errors && <p> {errors}</p>}
      <div className="container mt-2">
        <div className="d-flex flex-row-reverse mb-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => setShowDialog(true)}
          >
            {" "}
            Delete
          </button>
          <button className="btn btn-sm btn-warning mx-2"> Edit</button>
          <Link className="btn btn-sm btn-secondary" to="/">
            {" "}
            Back{" "}
          </Link>
        </div>
        <div className="card">
          <div className="card-body p-3">
            <table className="table table-bordeless table-responsive">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{expense?.name}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td>
                    {" "}
                    {expense
                      ? CurrencyUtils.formatToINR(expense?.amount)
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    {expense
                      ? DateUtils.formatDateString(expense?.date)
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{expense ? expense?.category : "N/A"}</td>
                </tr>
                <tr>
                  <th>Note</th>
                  <td>{expense ? expense?.note : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ConfirmDialog
          title="Confirm Delete"
          message="Are you sure want to delete this item?"
          show={showDialog}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </div>
    </div>
  );
};

export default ExpenseDetails;
