import { Expense } from "../model/Expense";


interface props{
    expenses:Expense[]
}
const ExpenseList = ({expenses}:props) => {
  
      return (
        <div>
           <table border={2}>
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{expense.id}</td>
                  <td>{expense.expensesId}</td>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
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
}

export default ExpenseList
