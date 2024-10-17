import { useEffect, useState } from "react";

function CurrencyConverterBody() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("IRR");
  const [to, setTo] = useState("IRR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleFrom = (e) => {
    console.log(e.target.value);    
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    console.log(e.target.value);
    setTo(e.target.value);
  };
  useEffect(() => {
    console.log(from);
    console.log(to);
    
    if (from === "IRR" && to === "USD") {
      return setConvertedAmount(()=>amount / 42000);
    } else if (from === "USD" && to === "IRR") {
      return setConvertedAmount(()=>amount * 42000);
    } else if (from === to) {
      return setConvertedAmount(amount);
    }else{
      setConvertedAmount("error")
    }
  }, [amount, from, to]);

  return (
    <main className="currencyConverter__body">
      <input
        className="currencyConverter__input-amount"
        type="text"
        value={amount}
        onChange={handleAmount}
        placeholder=" مبلغ مورد نظر را وارد کنید..."
      />
      <div className="currencyConverter__input-unit">
        <label htmlFor="from">تبدیل از:</label>
        <select
          className="currencyConverter__select"
          name="from"
          id="from"
          onChange={handleFrom}
          value={from}
        >
          <option value="IRR">ریال</option>
          <option value="USD">دلار</option>
        </select>
      </div>
      <div className="currencyConverter__input-unit">
        <label htmlFor="to">تبدیل به:</label>
        <select
          className="currencyConverter__select"
          name="to"
          id="to"
          onChange={handleTo}
          value={to}
        >
          <option value="IRR">ریال</option>
          <option value="USD">دلار</option>
        </select>
      </div>
      <div className="currencyConverter__result">
        مبلغ تبدیل شده: {convertedAmount}
      </div>
    </main>
  );
}
export default CurrencyConverterBody;
