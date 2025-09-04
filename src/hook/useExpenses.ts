import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/Expense";

export const useExpense = () => {
  const [expenses, setExpense] = useState<Expense[]>([]);
  const [error, setError] = useState<string>(" ");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true)
    getExpenses()
      .then((response) => {
        setExpense(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  return { expenses, error, isLoading };
};
