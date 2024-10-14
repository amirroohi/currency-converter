import "./App.scss";
import CurrencyConverterBody from "./components/CurrencyConverterBody";
import CurrencyConverterHeader from "./components/Header";

function App() {
  return (
    <section>
      <CurrencyConverterHeader />
      <CurrencyConverterBody />
    </section>
  );
}

export default App;
