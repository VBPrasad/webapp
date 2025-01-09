import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";

export const useExpense=()=>{
    const [expenses,setExpense]=useState<Expense[]>([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    
      useEffect(() => {
      getExpenses()
          .then((response) => {
            setExpense(response.data);
             })
          .catch((error) => setError(error.message))
          .finally(()=>setIsLoading(false))
      }, []);
      return {expenses,error,isLoading}
}