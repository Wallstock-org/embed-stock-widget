import "./App.css";
import StockChart from "./components/StockChart";
import { mockDB } from "./data";

interface Props {
  clientId: string;
}

function App({ clientId }: Props) {
  const data = mockDB.find((w) => w.id == clientId);

  if (!data) return null;

  return (
    <>
      <StockChart symbol={data.symbol} classNames={data.classNames} />
    </>
  );
}

export default App;
