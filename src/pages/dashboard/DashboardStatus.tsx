import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";

interface Props {
  logggedInUser5: string;
  totalExpenses: number;
}
const DashboardStatus = ({ logggedInUser5, totalExpenses }: Props) => {
  return (
    <div>
      <div className="container">
        <h5> Total expenses</h5>
        <h3>{CurrencyUtils.formatToINR(totalExpenses)}</h3>
      </div>
      <div>
        <div>
          Welcome, <b> {logggedInUser5}</b>
        </div>
        <div>{DateUtils.getFormattedDate(new Date())}</div>
      </div>
      <button> Login </button>
      <button> Register</button>
    </div>
  );
};

export default DashboardStatus;
