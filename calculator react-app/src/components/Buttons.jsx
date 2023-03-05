import Display from "./Display";

export default function Buttons() {
  return (
    <div className="container">
      <Display />
      <div className="buttons">
        HI I AM BUTTONS
        <div className="buttonsLeft">
          <button className="button1">1</button>
          <button className="button2">2</button>
          <button className="button3">3</button>
          <button className="button4">4</button>
          <button className="button5">5</button>
          <button className="button6">6</button>
          <button className="button7">7</button>
          <button className="button8">8</button>
          <button className="button9">9</button>
        </div>
        <div className="buttonsRight">
          <button className="button0">0</button>
          <button className="buttonEquals">=</button>
          <button className="buttonAdd">+</button>
          <button className="buttonSubtract">-</button>
          <button className="buttonMultiply">*</button>
          <button className="buttonDivide">/</button>
          <button className="buttonac">ac</button>
          <button className="buttonce">ce</button>
        </div>
      </div>
    </div>
  );
}
