import React, { useEffect, useState } from "react";
import { getExpenseByExpenseId } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenseByExpenseId = (expensesId: string) => {
  const [expense, setExpense] = useState<Expense | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
  
      setIsLoading(true);
      getExpenseByExpenseId(expensesId)
        .then((reponse) => setExpense(reponse.data))
        .catch((error) => {
          setErrors(error.message);
          console.log(error);
        })
        .finally(() => setIsLoading(false));
   
  }, []);
  return { expense, errors, isLoading };
};

export default useExpenseByExpenseId;
