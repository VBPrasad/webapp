import { Formik, useFormik } from "formik";
import { Expense } from "../../model/Expense";
import expenseVaidationSchema from "../../validation/expenseValidationSchema";
import Dropdown from "../../components/Dropdown";
import { expenseCategories } from "../../utils/AppConstant";
import { getExpenseByExpenseId, saveOrUpdateExpense } from "../../services/expense-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewExpense = () => {
  const {expensesId}=useParams<{expensesId: string}>();
  const navigate= useNavigate();
  const [ error, setError]= useState<string>("")
  const [isLoading, setLoader] = useState<boolean>(false)
  const [initialValues, setInitialValues]= useState<Expense>( {
      name: "",
      amount: 0,
      note: "",
      category: "",
      date: new Date().toISOString().split('T')[0]
  })

  useEffect(()=>{
    setLoader(true)
    if(expensesId){
      getExpenseByExpenseId(expensesId)
        .then(response=>{
          if(response && response.data){
            setInitialValues(response.data)
          }
        })
        .catch(error=>setError(error.message))
        .finally(()=>setLoader(false));
      }
    },  [expensesId]);

  const formik = useFormik({
    initialValues,
    enableReinitialize:true,
    onSubmit: (values: Expense) => {
      saveOrUpdateExpense(values)
      .then((response)=> {
      if(response  && response.status===200){
      navigate("/")
    }else if (response && response.status !== 200)
      navigate(`/view/${expensesId}`)
    })
    
      .catch((error)=> {
        console.log(error)
      setError(error.message);
      });
      
    },
    validationSchema: expenseVaidationSchema,
  });

  return (
    <div className="d-flex justify-contnent-center align-items-center mt-2">
    
      <div className="container col-md-4 col-sm-3 col-xs-12">
          {error && <p className="text-danger fst-italic"> {error} </p>}
    
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-control"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-danger fst-italic">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="form-control"
              value={formik.values.note}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-danger fst-italic">{formik.errors.date}</div>
            ) : null}
          </div>

          {/* <div className="mb-3">
          <label htmlFor="date" className="form-label">
           Category
          </label>
          <input type="category" id="category" name="category" className="form-control" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.category && formik.errors.category ? 
          <div className="text-danger fst-italic">
            {formik.errors.category}
          </div>:null}

        </div> */}
          <Dropdown options={expenseCategories}
          id="category" 
           name="category"
           label="Category"
          onChange={formik.handleChange}
      OnBlur={formik.handleBlur}
          error={formik.errors.category}
          touched={formik.touched.category}
          value={formik.values.category}
           />
          <button
            className="btn btn-sm btn-primary btn-outline0light"
            type="submit"
          >
            {" "}
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewExpense;
