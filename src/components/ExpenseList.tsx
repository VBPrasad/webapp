
import { Expense } from "../model/Expense";


interface props {
  expenses: Expense[];
}
const ExpenseList = ({ expenses }: props) => {
  return (
  //   <div>
  //     <table border={2}>
  //       <thead>
  //         <tr>
  //           <th>ExpenseID</th>
  //           <th>Name</th>
  //           <th>Amount</th>
  //           <th>Date</th>
  //           <th>Category</th>
  //           <th>Note</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {expenses.map((expense) => (
  //           <tr key={expense.expensesId}>
  //             <td>
  //               <Link
  //                 key={expense.expensesId}
  //                 to={`/view/${expense.expensesId}`}
  //               >
  //                 {expense.expensesId}
  //               </Link>
  //             </td>
  //             <td>
  //               <Link
  //                 key={expense.expensesId}
  //                 to={`/view/${expense.expensesId}`}
  //               >
  //                 {" "}
  //                 {expense.name}{" "}
  //               </Link>
  //             </td>
  //             <td>{CurrencyUtils.formatToINR(expense.amount)}</td>
  //             <td>{DateUtils.formatDateString(expense.date)}</td>
  //             <td>{expense.category}</td>
  //             <td>{expense.note}</td>
  //           </tr>
  //         ))}

  //         {/* {expenses
  // .filter((expense) => expense.name === 'Gas Bill')
  // .map((expense) => (
  //   <tr key={expense.expensesId}>
  //     <td>{expense.id}</td>
  //     <td>{expense.expensesId}</td>
  //     <td>{expense.name}</td>
  //     <td>{expense.amount}</td>
  //     <td>{expense.date}</td>
  //     <td>{expense.category}</td>
  //     <td>{expense.note}</td>
  //   </tr>
  // ))} */}
  //       </tbody>
  //     </table>
  //   </div>

  <div className="card">
  <h5 className="card-header"> 
    Expense 
    <span className="float-end">Amount</span>
  </h5>

  <div>
    {expenses.map(expense => 
      <div className="d-flex justify-content-between border-bottom p-3 text-dark"> 
      {/* Removed the invalid border-bottom-1 */}
      
      <div className="card-title m-0">
        <h5>{expense.name}</h5>
        <span className="fst-italic">{expense.date.toString()}</span>
      </div>
      
      <div className="card-subtitle">
        <span className="badge rounded-pill app-primary-bg-color">{expense.amount}</span>
      </div>
    </div> 

    )}
    
  </div>
</div>

 
  );
};

export default ExpenseList;
