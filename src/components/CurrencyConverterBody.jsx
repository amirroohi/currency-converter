import { useMemo, useState } from "react";

function CurrencyConverterBody() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("IRR");
  const [to, setTo] = useState("IRR");

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

  const convertedAmount = useMemo(() => {
    if (isNaN(amount)) return "لطفا به عدد وارد کنید!!!";
    if (from === "IRR" && to === "USD") {
      return amount / 420000;
    } else if (from === "USD" && to === "IRR") {
      return amount * 420000;
    } else if (from === to) {
      return amount;
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
      <SelectInput
        label="تبدیل از:"
        id="from"
        handleChange={handleFrom}
        value={from}
      />
      <SelectInput
        label="تبدیل به:"
        id="to"
        handleChange={handleTo}
        value={to}
      />
      <div>
        مبلغ تبدیل شده:
        <h3>{convertedAmount}</h3>
      </div>
    </main>
  );
}
export default CurrencyConverterBody;

function SelectInput({ label, id, handleChange, value }) {
  return (
    <div className="currencyConverter__input-unit">
      <label htmlFor={id}>{label}</label>
      <select
        className="currencyConverter__select"
        name={id}
        id={id}
        onChange={handleChange}
        value={value}
      >
        <option value="IRR">ریال</option>
        <option value="USD">دلار</option>
      </select>
    </div>
  );
}
