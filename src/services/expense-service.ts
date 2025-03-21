import { apiClient } from "../components/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = () => {
  return apiClient.get<Expense[]>("expenses");
};

export const getExpenseByExpenseId = (expensesId: string) => {
  return apiClient.get<Expense>(`/expenses/${expensesId}`);
};
