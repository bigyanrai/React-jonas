// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//     console.log("test");
//   }

//   function handleNext() {
//     if (step < 3) setStep(step + 1);
//     console.log("test");
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//             <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//             <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//           </div>
//           {/* <p className="message">
//             Step:{step}:{messages[step - 1]}
//             <StepMessage step={step}>{messages[step - 1]}</StepMessage>
//           </p> */}
//           <StepMessage step={step}>{messages[step - 1]}</StepMessage>
//           <div className="buttons">
//             <Button textColor="#fff" bgColor="#7950f2" onclick={handlePrevious}>
//               Previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>
//       {children}
//     </div>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <>
//       <button
//         style={{ backgroundColor: bgColor, color: textColor }}
//         onClick={onClick}
//       >
//         {" "}
//         <div> {children}</div>
//       </button>
//     </>
//   );
// }

// import "./styles.css";
import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState("");
  const [dissatisfaction, setDissatisfaction] = useState(0);
  const [friendDissatisfaction, setFriendDissatisfaction] = useState(0);
  const [render, setRender] = useState(false);

  const average = Math.round(
    (Number(dissatisfaction) + Number(friendDissatisfaction)) / 2
  );
  const total = Number(bill) + average;
  console.log(average);

  return (
    <>
      <Bill
        bill={bill}
        onSetBill={setBill}
        onRender={setRender}
        render={render}
      />
      <YourSatisfaction
        dissatisfaction={dissatisfaction}
        onDissatisfaction={setDissatisfaction}
        onRender={setRender}
        render={render}
      />
      <YourFriendSatisfaction
        friendDissatisfaction={friendDissatisfaction}
        onFriendDissatisfaction={setFriendDissatisfaction}
        onRender={setRender}
        render={render}
      />
      {render ? (
        <>
          {" "}
          <Total
            average={average}
            bill={bill}
            total={total}
            dissatisfaction={dissatisfaction}
            friendDissatisfaction={friendDissatisfaction}
          />
          <Reset
            onBill={setBill}
            onDissatisfaction={setDissatisfaction}
            onFriendDissatisfaction={setFriendDissatisfaction}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

function Bill({ bill, onSetBill, onRender }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bill}
        onChange={(e) => {
          onSetBill(e.target.value);
          onRender(true);
        }}
        type="text"
      />
    </div>
  );
}

function YourSatisfaction({
  dissatisfaction,
  onDissatisfaction,

  onRender,
}) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        value={dissatisfaction}
        onChange={(e) => {
          onDissatisfaction(e.target.value);
          onRender(true);
        }}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function YourFriendSatisfaction({
  friendDissatisfaction,
  onFriendDissatisfaction,
  onRender,
}) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        value={friendDissatisfaction}
        onChange={(e) => {
          onFriendDissatisfaction(e.target.value);
          onRender(true);
        }}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function Total({
  average,
  total,
  bill,
  dissatisfaction,
  friendDissatisfaction,
}) {
  return (
    <h1>
      You paid ${total} (${bill}+${average} tip)
    </h1>
  );
}

function Reset({ onBill, onDissatisfaction, onFriendDissatisfaction }) {
  return (
    <button
      onClick={() => {
        onBill("");
        onDissatisfaction(0);
        onFriendDissatisfaction(0);
      }}
    >
      Reset
    </button>
  );
}
