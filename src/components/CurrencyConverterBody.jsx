import { useState } from "react";

function CurrencyConverterBody() {
  const [amount, setAmount] = useState();
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <main className="currencyConverter__body">
      <input className="currencyConverter__input" type="number" value={amount} onChange={handleAmount} placeholder=" مبلغ مورد نظر را وارد کنید..." />
      <div >
        <select name="from" id="from">
          <option value="IRR">ریال</option>
          <option value="USD">دلار</option>
        </select>
      </div>
      <div>to</div>
    </main>
  );
}
export default CurrencyConverterBody;
