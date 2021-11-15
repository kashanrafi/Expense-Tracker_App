import Title from './components/TrackerTitle/Title';
import Balance from './components/balance/balance';
import Addtransaction from './components/AddTransaction/Addtransaction';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';
import { Provider } from "./context/ContextApi";

function App() {
  return <>
  <Provider>
      <Title />
      <div className="container">
        <Balance />
        <TransactionHistory />
        <Addtransaction />
      </div>
      </Provider>
  </>
}

export default App;
