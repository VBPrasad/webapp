import * as Yup from 'yup'


const expenseVaidationSchema = Yup.object({
  name: Yup.string().required('Expense name is required')
  .min(3,'Expense name must be at least 3 character long'),
    amount: Yup.number().required('Expense amount is required'),
    date: Yup.string().required('Expense date is required'),
    category: Yup.string().required('Expense categroy is required')
})


export default expenseVaidationSchema;