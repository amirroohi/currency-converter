import "./App.scss";
import CurrencyConverterBody from "./components/CurrencyConverterBody";
import CurrencyConverterContainer from "./components/CurrencyConverterContainer";
import CurrencyConverterHeader from "./components/CurrencyConverterHeader";

function App() {
  return (
    <CurrencyConverterContainer>
      <CurrencyConverterHeader />
      <CurrencyConverterBody />
    </CurrencyConverterContainer>
  );
}

export default App;
