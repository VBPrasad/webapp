
import ExpenseList from "../../components/ExpenseList";
import { useExpense } from "../../hook/useExpenses";

const Dashboard = () => {
const{expenses, error,isLoading}=useExpense();
 return (
    <div>
      {isLoading && <p>Loading</p>}
      {error  && <p>{error}</p>}
      <ExpenseList expenses={expenses} />;
    
    </div>
  );
};

export default Dashboard;
