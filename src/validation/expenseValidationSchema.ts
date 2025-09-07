import * as Yup from 'yup'


const expenseVaidationSchema = Yup.object({
  name: Yup.string().required('Expense name is required')
  .min(3,'Expense name must be at least 3 character long'),
    amount: Yup.number().required('Expense amount is required')
    .positive('Expense amount must be greater than 0'),
    date: Yup.date()
      .required('Expense date is required')
      .transform((value) => {
        return value ? new Date(value) : null;
      }),
    category: Yup.string().required('Expense categroy is required')
})


export default expenseVaidationSchema;